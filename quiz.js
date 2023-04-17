var questionBank = mod14
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].options[0];
    option1.innerHTML= questionBank[i].options[1];
    option2.innerHTML= questionBank[i].options[2];
    option3.innerHTML= questionBank[i].options[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].correctAnswer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

function selectModule(moduleName) {

  // Set the selected module's questions to the questionBank variable
  if (moduleName === "mod14") {
    questionBank = mod14;
  } else if (moduleName === "mod58") {
    questionBank = mod58;
  } else if (moduleName === "mod912") {
    questionBank = mod912;
  }else if (moduleName === "AI_quiz1") {
    questionBank = AI_quiz1;
  }else if (moduleName === "AI_quiz2") {
    questionBank = AI_quiz2;
  }else if (moduleName === "AI_quiz3") {
      questionBank = AI_quiz3;
      }
  i=0;
  core= 0;
    // Reload the page with the selected module's questions
   //location.reload();
   displayQuestion();
}

// Add click event listeners to the module buttons
document.getElementById("mod1").addEventListener("click", function() {
  selectModule("mod14");
});

document.getElementById("mod2").addEventListener("click", function() {
  selectModule("mod58");
});

document.getElementById("mod3").addEventListener("click", function() {
  selectModule("mod912");
});


//click events to next button
next.addEventListener('click',nextQuestion);


//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].correctAnswer;
        answers.appendChild(list);
    }
}


displayQuestion();
