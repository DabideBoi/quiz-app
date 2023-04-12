fetch("questions.json")

	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		var quizContainer = document.getElementById('quiz-container');
		var submitBtn = document.getElementById('submit-btn');
		var questions = data;
		var currentQuestion = 0;
		var score = 0;

		function displayQuestion() {
			var q = questions[currentQuestion];
			quizContainer.innerHTML = '<h2>' + q.question + '</h2>';
			for (var i = 0; i < q.options.length; i++) {
				quizContainer.innerHTML += '<input type="radio" name="answer" value="' + q.options[i] + '"> ' + q.options[i] + '<br>';
			}
		}

		function checkAnswer() {
			var selectedOption = document.querySelector('input[name="answer"]:checked').value;
			if (selectedOption === questions[currentQuestion].correctAnswer) {
				score++;
			}
			currentQuestion++;
			if (currentQuestion < questions.length) {
				displayQuestion();
			} else {
				quizContainer.innerHTML = '<h2>You scored ' + score + ' out of ' + questions.length + '.</h2>';
				submitBtn.style.display = 'none';
			}
		}

		displayQuestion();

		submitBtn.addEventListener('click', checkAnswer);
	})
	.catch(function(error) {
		console.error(error);
	});