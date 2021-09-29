var questionCounter = 0; // index for displaying next question

var correctAnswer = ""; //set initial value of correctAnswer

var timer;
var timerCount = 120;
var timerElement = document.querySelector(".timer");

var startButton = document.querySelector(".start-button");
var welcome = document.querySelector(".welcome");

var question = document.querySelector(".question");
var promptQuestion = document.querySelector(".prompt-question");
var rightWrong = document.querySelector(".right-wrong");
var answerOptions = document.querySelector(".answer-options");

var goBack = document.querySelector(".go-back");
var allDone = document.querySelector(".all-done");

var displayScores = document.querySelector("#display-scores");

var button1 = document.querySelector(".button-1");
var button2 = document.querySelector(".button-2");
var button3 = document.querySelector(".button-3");
var button4 = document.querySelector(".button-4");

var score = 0;
var initials = [];

//data used to be all arrays, do NOT do that!
var questionsArray = [
  {
    prompt: "Commonly used data types do NOT include:",
    answers: ["strings", "boolean", "arrays", "numbers"],
    correct: "arrays",
  },
  {
    prompt: "Arrays in JavaScript can be used to store:",
    answers: ["objects", "strings", "numbers", "all of the above"],
    correct: "all of the above",
  },
  {
    prompt: "The condition in an if/else statement is enclosed with:",
    answers: [
      "curly braces",
      "parentheses",
      "square brackets",
      "quotation marks",
    ],
    correct: "parentheses",
  },
];

function startGame() {
  timerCount = 120;
  startButton.disabled = true;

  Question();

  var classQuestion = document.querySelector(".question");
  classQuestion.setAttribute("style", "display: block;");

  startTimer();
}

function Question() {
  startButton.style.display = "none";
  allDone.style.display = "none";
  displayScores.style.display = "none";
  welcome.style.display = "none";

  promptQuestion.innerHTML = questionsArray[questionCounter].prompt;

  button1.innerHTML = questionsArray[questionCounter].answers[0];
  button2.innerHTML = questionsArray[questionCounter].answers[1];
  button3.innerHTML = questionsArray[questionCounter].answers[2];
  button4.innerHTML = questionsArray[questionCounter].answers[3];

  correctAnswer = questionsArray[questionCounter].correct;
}

function startTimer() {
  
    timer = setInterval(function () {
      timerCount--;
      timerElement.innerHTML = "Time: " + timerCount;
      
      if (timerCount <= 0) {
        
        clearInterval(timer);
      }
    }, 1000);
  }
  

// CALL indexed QUESTION function +

// COMPARE CLICKED STRING TO CORRECT STRING +

//display correct! or wrong!

answerOptions.addEventListener("click", function (event) {
  if (event.target.textContent === correctAnswer) {
    displayCorrect();
  } else {
    displayWrong();
    score = timerCount - 30;
    timerElement.innerHTML = "Time:" + score;
  }

  questionCounter = questionCounter + 1;

  if (questionCounter < questionsArray.length) {
    Question();
  } else {
    displayEnd();
    localStorage.setItem('score', score);
  }
});

//display last page

// -- WHEN no more questions left in array of questions:
//
// -- show "All Done" Page
// -- Append YOUR scores into an array of high scores

function displayEnd() {
  
  welcome.style.display = "none";
  question.style.display = "none";

  clearInterval(timer);

 allDone.style.display = "block";
 goBack.style.display = "block";
 displayScores.style.display = "block";

 yourScore = document.querySelector(".your-score");

 yourScore.innerHTML = "<p>" + "Your Score is: <br>" + score.toString() + "</p>";

//var showScore = document.querySelector(".your-score");

//showScore.textContent = score;

  //collect your score into scores ranking array
  //display rankings array
  
}

//display Correct! or Wrong! functions

function displayCorrect() {
  rightWrong.innerHTML = "<br><hr><br>Correct!";
}

function displayWrong() {
  rightWrong.innerHTML = "<br><hr><br>Wrong!";
}

//reset game
function resetGame() {
  //resets timer
  timer = 120;
  welcomePage();
}


startButton.addEventListener("click", startGame);


goBack.addEventListener("click", resetGame);
