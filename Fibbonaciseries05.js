let var1=0;
let var2=1;
let num=9
let sum;
function Fibbonaci(num){
    for(let i=2;i<=num;i++)
    sum=var1+var2;
    var1=var2;
    var2=sum
}
console.log(Fibbonaci(num));