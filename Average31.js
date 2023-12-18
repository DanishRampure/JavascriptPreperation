const numbers = [5, 10, 15, 20, 25];
function Average(numbers){
let i = 0;
let sum = 0;
while (i < numbers.length) {
    sum += numbers[i];
    i++;
}
let average = sum / numbers.length;
return average;
}

console.log(Average(numbers));
