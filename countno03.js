
arr=[12,42,21,54]
function countNum(arr){
    let count=0;
    while(arr[count]!=null){
        count++
    }
    return count
}
console.log(countNum(arr));