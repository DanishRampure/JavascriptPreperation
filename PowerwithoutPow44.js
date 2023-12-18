function calculatePower(base, exponent) {
    let result = 1;
    let count = 0;
    while (count < exponent) {
        result *= base;
        count++;
    }
    return result;
}

let base = 2;
let exponent = 3;
console.log(calculatePower(base, exponent));