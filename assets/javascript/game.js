
//alert('Are you a psychic');
// prompt("Yes?");
// alert("Start typing to see if you can guess the letter");

var compChoice = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var userGuess = null;

var letterToBeGuessed = compChoice[Math.floor(Math.random() * compChoice.length)];



document.onkeyup = function (event) {
console.log("console");
    var playerChoice = event.key;
    console.log (playerChoice);
    console.log (letterToBeGuessed);
    if (letterToBeGuessed === playerChoice ) {
        wins++;
        guessesLeft = 9;
                    document.getElementById("wins").innerText = wins;
                        console.log("You won!");
                        console.log(wins);

                    document.getElementById("guessesLeft").innerText = guessesLeft;
    } else {
        if(guessesLeft > 0)  {
            guessesLeft--;
            console.log(guessesLeft);
        }
        }

        if(guessesLeft === 0) {
            losses--;
            guessesLeft = 9;
            document.getElementById("losses").innerText = losses;
            console.log('You Lost');
            console.log(losses);
        }
    var html = "<h1> The Psychic Game </h1> " + "<p> Guess What Letter I am thinking of</p>" + "<p> Wins: </p>" + " <p> Losses: </p>" + "<p> Guesses Left:</p>" + "<p> Your Guesses So Far:</p>";
    };








