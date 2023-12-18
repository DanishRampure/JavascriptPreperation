let arr=[10,20,30,70,68]

function sumOfNumbers(arr){
    let sum=0
    for (let index = 0; index < arr.length; index++) {
        sum=sum+arr[index];  
    }
    return sum
}
console.log(sumOfNumbers(arr));
