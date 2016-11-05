// Creates variables and saves DOM elements to each
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var dropdown = document.getElementById("dropdown");
var answerButton = document.getElementById("answerButton");
var answer;
var display = document.getElementById("display");

/* Event listener for answerButton
   Performs specified operation */
answerButton.addEventListener("click", getAnswer);

/*  Function to produce requested answer-
    Takes user input values and combines with dropdown selection */
function getAnswer () {
    if (dropdown.value == "add") {
        answer = parseInt(input1.value, 10) + parseInt(input2.value, 10);
        display.innerHTML = answer;
    }
    else if (dropdown.value == "subtract") {
        answer = parseInt(input1.value, 10) - parseInt(input2.value, 10);
        display.innerHTML = answer;
    }
    else if (dropdown.value == "multiply") {
        answer = parseInt(input1.value, 10) * parseInt(input2.value, 10);
        display.innerHTML = answer;
    }
    else if (dropdown.value == "divide") {
        answer = parseInt(input1.value, 10) / parseInt(input2.value, 10);
        display.innerHTML = answer;
    }
    else if (dropdown.value == "square") {
        answer = Math.pow(parseInt(input1.value, 10),parseInt(input2.value, 10));
        display.innerHTML = answer;
    }
    else if (dropdown.value == "sqrt") {
        answer = Math.sqrt(parseInt(input2.value, 10)) ;
        display.innerHTML = answer;
    }
}