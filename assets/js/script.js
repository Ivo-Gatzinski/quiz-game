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

function startTimer() {
  // starts timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.innerHTML = "Time: " + timerCount;
    // Tests if time has run out
    if (timerCount <= 0) {
      // Clears interval
      clearInterval(timer);
    }
  }, 1000);
}

// //show only start game button and welcome on first page:

// function welcomePage() {
//   question.innerHTML = "";
//   allDone.textContent = "";
//   displayScores.innerHTML = "";
// }

// start game function
function startGame() {
  timerCount = 120;
  startButton.disabled = true;

  Question();

  var classQuestion = document.querySelector(".question");
  classQuestion.setAttribute("style", "display: contents;");

  var allDone = document.querySelector(".all-done");
  allDone.setAttribute("style", "display: contents;");

  startTimer();
}

function Question() {
  startButton.innerHTML = "";
  allDone.innerHTML = "";
  displayScores.innerHTML = "";
  welcome.innerHTML = "";

  promptQuestion.innerHTML = questionsArray[questionCounter].prompt;

  button1.innerHTML = questionsArray[questionCounter].answers[0];
  button2.innerHTML = questionsArray[questionCounter].answers[1];
  button3.innerHTML = questionsArray[questionCounter].answers[2];
  button4.innerHTML = questionsArray[questionCounter].answers[3];

  correctAnswer = questionsArray[questionCounter].correct;
}

// CALL indexed QUESTION function +

// COMPARE CLICKED STRING TO CORRECT STRING +

//display correct! or wrong!

answerOptions.addEventListener("click", function (event) {
  if (event.target.textContent === correctAnswer) {
    displayCorrect();
  } else {
    displayWrong();
  }

  questionCounter = questionCounter + 1;

  if (questionCounter < questionsArray.length) {
    Question();
  } else {
    displayEnd();
  }
});

//display last page

function displayEnd() {
  //display All Done
  //display your score
  //display ENTER INITIALS
  //collect your score into scores ranking array
  //display rankings array
  //do not display question
}

//display Correct! or Wrong! functions

function displayCorrect() {
  rightWrong.innerHTML = "<br><hr><br>Correct!";
}

function displayWrong() {
  rightWrong.innerHTML = "<br><hr><br>Wrong!";
}

// -- WHEN no more questions left in array of questions:
//
// -- show "All Done" Page
// -- Append YOUR scores into an array of high scores

//reset game
function resetGame() {
  //resets timer
  timer = 120;
  welcomePage();
  allDone.innerHTML = "";
  displayScores.innerHTML = "";

  //saves scores in local storage
  //setScore();

  //location.reload();
}

// -- Display your scores
// -- Display INITIALS FORM
// -- Collect INITIALs and SCORES into Local Storage
// -- display GO BACK and CLEAR HIGH SCORES button

//where exactly to put init() function?

//init();
//welcomePage();

//EVENT ON CLICK START BUTTON:

startButton.addEventListener("click", startGame);

// -- IF player clicks go back button, reset game

// -- IF player clicks GO BACK, then DISPLAY WELCOME PAGE

goBack.addEventListener("click", resetGame);

// -- IF player clicks CLEAR SCORES, then erase scores in ARRAY
