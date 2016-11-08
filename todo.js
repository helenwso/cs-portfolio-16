// user input box for to-do text //
var todoInput = document.getElementById("todoInput");

// dropdown for choosing CSS styling
var dropdown = document.getElementById("dropdown");
// div where the user's to-do is displayed
var todoDisplayDiv = document.getElementById("todoDisplayDiv");

var addButton = document.getElementById("addButton");
// button the user clicks to add to-do

addButton.addEventListener("click", function (){
    var addTask = "<div style = 'color" + color +"'>" + todoInput.value + "</div>";
    todoDisplayDiv.innerHTML = todoDisplayDiv.innerHTML + addTask;
    
});

todoDisplayDiv.addEventListener("click", function (evt){
        var minusTask = evt. target;
        minusTask.parentNode.removeChild (minusTask);
    });


// div where the user's completed tasks are displayed
var completedDisplayDiv = document.getElementById("completedDisplayDiv");

var display;

/* Event listener for addButton
   Adds items to list */
// addButton.addEventListener("click", function thing (evt){
//     todoDisplayDiv.innerHTML = todoInput.value;
// //    if (todoInput) has text, then put it into tododisplaydiv within p tag
// //else: do nothing
//     //if (dropdown.value =
//     // "black"){display.innerHTML = display
// })