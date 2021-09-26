// EVENT ON LOAD PAGE: Display start page:
// - display high scores link in top left corner
// - display timer in top right corner, showing 0 seconds
// - display welcome title
// - display welcome message
// - display start button


//EVENT ON CLICK START BUTTON: 
//
// - Display one question:
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
// -- then DISPLAY NEW QUESTION and ANSWER-BUTTON set
// -- HIDE PREVIOUS QUESTION
// -- then "Correct! under line" shows up under buttons
// -- Timer keeps counting down
//
// - IF user clicks on OTHER button - WRONG - 
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
// -- Display your scores
// -- Display INITIALS FORM
// -- Collect INITIALs and SCORES into Local Storage
// -- display GO BACK and CLEAR HIGH SCORES button
// 
// -- IF player clicks GO BACK, then DISPLAY WELCOME PAGE
// -- IF player clicks CLEAR SCORES, then erase scores in ARRAY