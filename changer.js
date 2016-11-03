// Creates variables and saves DOM elements to each
var newBGcolor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

/* Event Listener for button.
   Sets the body's background color to the user provided value
*/
colorChangeButton.addEventListener("click", function myFunc (){
    document.body.style.backgroundColor = newBGcolor.value;
} )

