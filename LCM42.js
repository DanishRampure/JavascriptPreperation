function findLCM(num1, num2) {
    let lcm = Math.max(num1, num2);
    while (true) {
        if (lcm % num1 === 0 && lcm % num2 === 0) {
            return lcm;
        }
        lcm++;
    }
}
let num1 = 21;
let num2 = 7;
console.log(`LCM of ${num1} and ${num2}: ${findLCM(num1, num2)}`);
