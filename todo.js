// user input box for to-do text //
var todoInput = document.getElementById("todoInput");

// dropdown for choosing CSS styling
var dropdown = document.getElementById("dropdown");

// button the user clicks to add to-do
var addButton = document.getElementById("addButton");

// div where the user's to-do is displayed
var todoDisplayDiv = document.getElementById("todoDisplayDiv");

// div where the user's completed tasks are displayed
var completedDisplayDiv = document.getElementById("completedDisplayDiv");

var display;

/* Event listener for addButton
   Adds items to list */
addButton.addEventListener("click", function evt (){
    todoDisplayDiv.innerHTML = todoInput.value;
//    if (todoInput) has text, then put it into tododisplaydiv within p tag
//else: do nothing
    //if (dropdown.value =
    // "black"){display.innerHTML = display
})