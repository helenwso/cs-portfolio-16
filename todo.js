// user input box for to-do text //
var todoInput = document.getElementById("todoInput");

// dropdown for choosing CSS styling
var dropdown = document.getElementById("dropdown");
// div where the user's to-do is displayed
var todoDisplayDiv = document.getElementById("todoDisplayDiv");

var addButton = document.getElementById("addButton");
// button the user clicks to add to-do

addButton.addEventListener("click", function (){

    var addBlackTask = "<div style ='color:black'>" + todoInput.value + "</div>";
    
    if (dropdown.value == "black") {
       todoDisplayDiv.innerHTML = todoDisplayDiv.innerHTML + addBlackTask; 
    }

    var addRedTask = "<div style ='color:red'>" + todoInput.value + "</div>";
    
    if (dropdown.value == "red") {
       todoDisplayDiv.innerHTML = todoDisplayDiv.innerHTML + addRedTask; 
    }
    
    var addOrangeTask = "<div style ='color:orange'>" + todoInput.value + "</div>";
    
    if (dropdown.value == "orange") {
       todoDisplayDiv.innerHTML = todoDisplayDiv.innerHTML + addOrangeTask; 
    }    
    
    var addGreenTask = "<div style ='color:green'>" + todoInput.value + "</div>";
    
    if (dropdown.value == "green") {
       todoDisplayDiv.innerHTML = todoDisplayDiv.innerHTML + addGreenTask; 
    }    
    
    var addBlueTask = "<div style ='color:blue'>" + todoInput.value + "</div>";
    
    if (dropdown.value == "blue") {
       todoDisplayDiv.innerHTML = todoDisplayDiv.innerHTML + addBlueTask; 
    }            
 
    var addBoldTask = "<div style ='font-weight:bold'>" + todoInput.value + "</div>";
    
    if (dropdown.value == "bold") {
       todoDisplayDiv.innerHTML = todoDisplayDiv.innerHTML + addBoldTask; 
    }            
        
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