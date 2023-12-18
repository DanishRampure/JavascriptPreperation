let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;
while (guess !== secretNumber) {
    guess = prompt("Guess the number between 1 and 100:");
    if (guess > secretNumber) {
        console.log("Too high! Try again.");
    } else if (guess < secretNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Congratulations! You got correct number.");
    }
}
