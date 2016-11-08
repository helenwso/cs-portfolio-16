// user input box for to-do text //
var todoInput = document.getElementById("todoInput");

// dropdown for choosing CSS styling
var dropdown = document.getElementById("dropdown");
// div where the user's to-do is displayed
var todoDisplayDiv = document.getElementById("todoDisplayDiv");

var addButton = document.getElementById("addButton");
// button the user clicks to add to-do

addButton.addEventListener("click", function (){
    

    var addBlackTask = "<p style ='color:black'>" + todoInput.value + "</p>";
    
    if (dropdown.value == "black") {
       todoDisplayDiv.innerHTML = todoDisplayDiv.innerHTML + addBlackTask; 
    }

    var addRedTask = "<p style ='color:red'>" + todoInput.value + "</p>";
    
    if (dropdown.value == "red") {
       todoDisplayDiv.innerHTML = todoDisplayDiv.innerHTML + addRedTask; 
    }
    
    var addOrangeTask = "<p style ='color:orange'>" + todoInput.value + "</p>";
    
    if (dropdown.value == "orange") {
       todoDisplayDiv.innerHTML = todoDisplayDiv.innerHTML + addOrangeTask; 
    }    
    
    var addGreenTask = "<p style ='color:green'>" + todoInput.value + "</p>";
    
    if (dropdown.value == "green") {
       todoDisplayDiv.innerHTML = todoDisplayDiv.innerHTML + addGreenTask; 
    }    
    
    var addBlueTask = "<p style ='color:blue'>" + todoInput.value + "</p>";
    
    if (dropdown.value == "blue") {
       todoDisplayDiv.innerHTML = todoDisplayDiv.innerHTML + addBlueTask; 
    }            
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