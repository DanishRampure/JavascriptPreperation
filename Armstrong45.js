function isArmstrong(number) {
    let originalNumber = number;
    let numDigits = String(number).length;
    let sum = 0;
    while (number > 0) {
        let digit = number % 10;
        sum += Math.pow(digit, numDigits);
        number = Math.floor(number / 10);
    }
    return sum === originalNumber;
}
// Example usage
let testNumber = 153;
console.log(`${testNumber} is Armstrong: ${isArmstrong(testNumber)}`); 