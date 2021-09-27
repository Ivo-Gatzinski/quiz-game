//how do I order the innerHTML = ""; commands
//so that welcome page only shows welcome, but then it
//disappears to show questions?
//How do I RE-display hidden content? hidden HTML?

//What containers do I need?

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

var answerArray = [button3, button4, button2, button1];

var questionsArray = [
  {
    question: "Commonly used data types do NOT include:",
    answers: {
      1: "1. strings",
      2: "2. boolean",
      3: "3. arrays",
      4: "4. numbers",
    },
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answers: {
      1: "1. objects",
      2: "2. strings",
      3: "3. numbers",
      4: "4. all of the above",
    },
  },
  {
    question: "The condition in an if/else statement is enclosed with:",
    answers: {
      1: "1. curly braces",
      2: "2. parentheses",
      3: "3. square brackets",
      4: "4. quotation marks",
    },
  },
  {
    question: "Which characters define an array:",
    answers: {
      1: "1. square brackets",
      2: "2. parentheses",
      3: "3. curly braces",
      4: "4. quotation marks",
    },
  },
];

var score = 0;
var initials = [];

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
  

// EVENT ON LOAD PAGE: Display start page:

// function welcomePage() {
//   //display all items on welcome page
//  question.innerHTML = "";
//  allDone.textContent = "";
//  displayScores.innerHTML = "";
// };

// - display high scores link in top left corner
// - display timer in top right corner, showing 120 seconds
// - display welcome title
// - display welcome message
// - display start button

//init function is called when page loads
//to prepare the high scores for display
//and display the welcome page
// function init() {
//   //gets high scores from local storage
//   //updates the high scores in high scores <section>
//   function getHighScores() {

//   };
//   //displays home page
//   getHighScores();
//   welcomePage();

// }

// start game function
function startGame() {
  timerCount = 120;
  startButton.disabled = true;
  askQuestion();
  startTimer();
}

//
// - Display one question:
function askQuestion() {
  startButton.innerHTML = "";
  allDone.innerHTML = "";
  displayScores.innerHTML = "";
  welcome.innerHTML = "";

  promptQuestion.innerHTML = questionsArray[0].question;

  button1.innerHTML = questionsArray[0].answers[1];
  button2.innerHTML = questionsArray[0].answers[2];
  button3.innerHTML = questionsArray[0].answers[3];
  button4.innerHTML = questionsArray[0].answers[4];
  
  //IF user clicks button,
  // SHOW correct or wrong, and
  // SHOW NEXT QUESTION

  // - USE FOR LOOP?

}


//display Correct! or Wrong! functions

function displayCorrect() {
    rightWrong.innerHTML ="<br><hr><br>Correct!";

}

function displayWrong() {
    rightWrong.innerHTML = "<br><hr><br>Wrong!";
}

// check to see if correct button was pressed:
button3.addEventListener("click", displayCorrect);

//check to see if wrong button was pressed:
button1.addEventListener("click", displayWrong);
button2.addEventListener("click", displayWrong);
button4.addEventListener("click", displayWrong);

//
// - Display question prompt in h2
// 	- DISPLAY QUESTION: example of a quiz question:
// "What keyword can be used to print a type of a value?"
//
//- show multiple choice answers:
// - Display list of four (4) buttons with answers on labels
// 	- display buttons with the following text below the question:
// 	- A: true
// 	- B: string
// 	- C: typeof
// 	- D: function
//
//  - timer countdown starts:
// 	- display "Time: 120" to begin
// 	- update the time display each second counting down
//
// - do NOT display Title, Welcome, Start-Button

//BRANCHES HERE ON CLICK BUTTON
//
// When user clicks button:
//
// - IF user clicks button with "C: typeof" - CORRECT -

if ((wrongAnswer = true)) {
  wrong();
} else {
  correct();
}

function correct() {}
// -- then DISPLAY NEW QUESTION and ANSWER-BUTTON set
// -- HIDE PREVIOUS QUESTION
// -- then "Correct! under line" shows up under buttons
// -- Timer keeps counting down
//
// - IF user clicks on OTHER button - WRONG -
function wrong() {}
// -- then DISPLAY NEW QUESTION and ANSWER BUTTON set
// -- HIDE PREVIOUS QUESTION
// -- then "Wrong! under line" shows up under buttons
// -- Timer skips 30 seconds down
// -- -- and keeps counting down
//
// Repeat When User Clicks Button by:
// -- choose new prompt string from ARRAY of Questions
// -- choose new answer-buttons (4) from ARRAY of CORRESPONDING answers
//
// -- WHEN no more questions left in array of questions:
//
// -- show "All Done" Page
// -- Append YOUR scores into an array of high scores

//reset game
function resetGame() {
  //resets timer
  timer = 120;
  //saves scores in local storage
  //setScore();
  location.reload();
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
