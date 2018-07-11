var num = Math.floor(Math.random() * 5 + 1);

console.log("Welcome to the guessing game!");
console.log("Guess a number between 1 and 5");

function play(guess) {
  if (guess == num) {
    alert("You Win!");
  } else {
    alert("Try Again");
  }
}
