function isPerfectSquare(num) {
    if (num < 0) {
        return false;
    }
    for (var i = 0; i * i <= num; i++) {
        if (i * i === num) {
            return true;
        }
    }
    return false;
}
var numberToCheck = 16;
if (isPerfectSquare(numberToCheck)) {
    console.log(numberToCheck + ' is a perfect square.');
} else {
    console.log(numberToCheck + ' is not a perfect square.');
}
