let arr=[12,342,1,12,32,3,43,12]

function largestNumber(arr){
    return Math.max(...arr)
}
console.log(largestNumber(arr));

function largestNum(arr){
    let large=arr[0]
    for(let i=0;i<arr.length;i++){
        if (large<arr[i]){
        large=arr[i]
        }
    }
    return large;
}
console.log(largestNum(arr));
// function secondLargest(newarray){
//     let var1=newarray[0];
//     for(let i=0;newarray.length;i++){
//         if (newarray[i]>var1){
//             var1=newarray[i];
//         }
//     }
//     return var1;
// }
// let newarray=[1,2,3,4,5,6,7,8,9,10];
// let result=secondLargest(newarray)
// console.log(result);