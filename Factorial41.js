function factorial(n) {
    let result = 1;
    while (n > 0) {
        result *= n;
        n--;
    }
    return result;
}
let number = 5;
console.log(`The factorial of ${number} is: ${factorial(number)}`);