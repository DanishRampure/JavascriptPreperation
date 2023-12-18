function SixDivisible(num){
    if(num%2==0){
        if(num%3==0){
            console.log("Number is divisible is 6");
        }
    }
    else{
        console.log("Number is not divisible by 6");
    }
}
let mark=36;
console.log(SixDivisible(mark));