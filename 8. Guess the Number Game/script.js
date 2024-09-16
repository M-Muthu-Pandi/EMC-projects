// Selecting Elements
var inputBox = document.getElementById("inputBox");
var result = document.getElementById("result");
var guessCount = document.getElementById("guessCount");
var restart = document.getElementById("restart");
var noOfGuess = 3;

// Generate Random Number 1 to 5
var randomNumber = Math.floor(Math.random() * 10) + 1;  // 1 to 10
if (randomNumber > 5) {
    randomNumber = randomNumber - 5;
}

// Event Handler Function
function checkTheNumber() {
    if (inputBox.value == randomNumber) {
        alert("You got it Right, Congratulations.");
        result.textContent = "You are Right !"

        restart.textContent = "Restart the page. And play again";
    }
    else {
        noOfGuess = noOfGuess - 1;
        if (noOfGuess == 0) {
            alert("You lost, The Generated Random Number is: " + randomNumber);
            restart.textContent = "Restart the page. And play again";
        }

        result.textContent = "You are Wrong !"
        guessCount.textContent = "Available Guesses: " + noOfGuess;
    }
}