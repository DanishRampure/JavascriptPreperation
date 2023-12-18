function ThreeDivisibleTest(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(i%3==0){
            count++;
        }
    }
    return count;
}
let mark=36;
console.log(ThreeDivisible(mark));