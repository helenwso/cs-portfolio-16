// JavaScript File
var todoInput = document.getElementById("todoinput");
var dropdown = document.getElementById("dropdown");
var todoSubmitButton = document.getElementById("todoSubmitButton");
var todo;
var todoLocation = document.getElementById("todoLocation");
var display = document.getElementById("display");



/* Event listener for answerButton
   Performs specified operation */
todoSubmitButton.addEventListener("click", displayTodo)
//the color changing stuff probably goes here???
;

/*  Function to produce requested answer-
    Takes user input values and combines with dropdown selection */
function displayTodo () {
    if (dropdown.value == "Important") {
        todo = parseInt (todoInput.value, 10);
        displayTodo.innerHTML = todo;
    }
    else if (dropdown.value == "Important") {
        todo = parseInt (todoInput.value, 10);
        displayTodo.innerHTML = todo;
    }
}