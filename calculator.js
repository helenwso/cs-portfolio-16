// Creates variables and saves DOM elements to each
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var dropdown = document.getElementById("dropdown");
var answerButton = document.getElementById("answerButton");
var answer;
var display = document.getElementById("display");

/* Event listener for button
   Does operation */

answerButton.addEventListener("click", getAnswer);

function getAnswer () {
    if (dropdown.value == "add") {
        answer = parseInt (input1.value, 10) + parseInt(input2.value, 10);
        display.innerHTML = answer;
    }
    else if (dropdown.value == "multiply") {
        answer = parseInt(input1.value, 10) * parseInt(input2.value, 10);
        display.innerHTML = answer;
    }
}