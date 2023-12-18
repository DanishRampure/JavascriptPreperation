arr=[2,3,1,3,5,7,8,9,10]

function smallestNo(arr)
{
    return Math.min(...arr);
}


console.log(smallestNo(arr));

function smallestNum(arr){
    let small=arr[0]
    for(let i=0;i<arr.length;i++){
        if(small>arr[i]){
            small=arr[i]
        }
    }
    return small
}
console.log(smallestNum(arr));