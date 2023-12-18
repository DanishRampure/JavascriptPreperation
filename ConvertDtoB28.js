

function decimalToBinary(N) { 
    let binary = ''; 
    while (N > 0) { 
        binary = (N % 2) + binary; 
        N = Math.floor(N / 2); 
    } 
    return binary; 
}
let N = 10; 
let binary = decimalToBinary(N); 
console.log( 
    "The binary representation of given number is:- " + binary);