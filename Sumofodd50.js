function sumofoddarray(sarr) {
    let sum = 0;
    for (let i = 0; i < sarr.length; i++) {
        if (sarr[i] % 2 !== 0) {
            sum += sarr[i];
        }
    }
    return sum;
}
let sarr = [15, 13, 12, 10];
console.log(sumofoddarray(sarr));
