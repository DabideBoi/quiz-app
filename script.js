(function($, Handlebars) {
    "use strict";

    // Define an object that maps category names to the URL of the corresponding JSON file
    var categoryMap = {
        "Module 1": "https://dabideboi.github.io/json/mod1-4.json",
        "Module 5": "https://dabideboi.github.io/json/mod5-8.json",
        "Module 9": "https://dabideboi.github.io/json/mod9-12.json",
        "Module Uhhh": "https://dabideboi.github.io/json/questions.json"
    };

    // Create a dropdown menu to let the user choose a category
    var categoryDropdown = $("<select>").attr("id", "category-dropdown");
    for (var categoryName in categoryMap) {
        $("<option>").attr("value", categoryMap[categoryName]).text(categoryName).appendTo(categoryDropdown);
    }
    $(categoryDropdown).appendTo("#category-selector");

    // Define a function to load questions from a specified URL
    function loadQuestions(url) {
        return $.getJSON(url);
    }

    // Get all the questions from the JSON file
    // var request = $.getJSON("https://dabideboi.github.io/quiz-app/json/questions.json");
    var selectedCategory = $("#category-dropdown").val();
    var request = loadQuestions(selectedCategory);


    var Quiz = {
        // Current question index in the array, starting with 0
        currentIndex: 0,

        // Current score, increments when the user chooses the right answer
        currentScore: 0,

        config: {},

        init: function(config) {
            this.config = config;

            // When the request to the questions.json file is complete
            request.done(function(questions) {

                // Extract the list of categories from the questions
                var categories = questions.map(function(question) {
                  return question.category;
                });
            
                // Remove duplicate categories
                categories = categories.filter(function(category, index, self) {
                  return self.indexOf(category) === index;
                });
            
                // Compile the category dropdown template
                var template = Handlebars.compile($(Quiz.config.categoryDropdownTemplateEl).html());
            
                var context = {
                  categories: categories
                };
            
                // Render the category dropdown menu
                $(Quiz.config.categoryDropdownContainerEl).html(template(context));

                // If they reached the final question of the quiz
                // Calculate their final score
                if (Quiz.currentIndex + 1 > questions.length) {
                    Quiz.renderFinalScore(Quiz.config.finalScoreTemplateEl, questions);
                } else {
                    Quiz.renderTitle(Quiz.config.titleTemplateEl, questions);
                    Quiz.renderChoices(Quiz.config.choicesTemplateEl, questions);   
                }
            });
        },

        renderTitle: function(titleTemplateEl, questions) {
            // Compile the title template
            var template = Handlebars.compile($(titleTemplateEl).html());

            var context = {
                title: questions[Quiz.currentIndex].title
            };

            // Display the question title
            $(Quiz.config.questionTitleEl).html(template(context));
        },

        renderChoices: function(choicesTemplateEl, questions) {
            var template = Handlebars.compile($(choicesTemplateEl).html());

            var context = {
                choices: questions[Quiz.currentIndex].choices
            };

            // Display the question choices
            $(Quiz.config.choicesEl).html(template(context));
        },

        handleQuestion: function(event) {
            // Just so I don't have to type the same thing again
            var questions = event.data.questions;
            var correctAnswer = questions[Quiz.currentIndex].correctAnswer;
            var userInput = $("input[name=choices]:checked").val();

            if (parseInt(userInput, 10) === correctAnswer) {
                Quiz.currentScore += 1;
            }

            // Increment the current index so it can advance to the next question
            // And Re-render everything.
            Quiz.currentIndex += 1;
            Quiz.init(Quiz.config);
        },

        renderFinalScore: function(finalScoreTemplate, questions) {
            var template = Handlebars.compile($(finalScoreTemplate).html());
            var context = {
                totalScore:      Quiz.currentScore,
                questionsLength: questions.length   
            };

            $(Quiz.config.quizEl).html(template(context));
        },

        renderDropDown: function(dropDownE1) {
            var template = Handlebars.compile($(dropDownE1).html());
            var context = {
                totalScore:      Quiz.currentScore,
                questionsLength: questions.length   
            };

            $(Quiz.config.quizEl).html(template(context));
        }
    };


    // Providing a config object just so 
    // when the element names change for some reason 
    // I don't have to change the whole element names
    Quiz.init({
        choicesTemplateEl:                       "#choices-template",
        titleTemplateEl:                         "#title-template",
        questionTitleEl:                         "#question-title",
        choicesEl:                               "#choices",
        finalScoreTemplateEl:                    "#finalScore-template",
        quizEl:                                  "#quiz",
        categoryDropdownContainerEl:             "#category-dropdown-template"
    });

    // Passing the questions as a parameter so it's available to the handleQuestion method
    request.done(function(questions) {
        // When they click on the `Next Question` button
        // Passing a event.data.questions variable so I can use it in the
        // handleQuestion method.
        $("#next-question").on("click", {questions: questions}, Quiz.handleQuestion);
    });
})(jQuery, Handlebars);
