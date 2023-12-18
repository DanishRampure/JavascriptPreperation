
function DecreasingPattern(n){
let string = "";
for (let i = 1; i < n; i++) {
  // printing star
  for (let k = 1; k < n - i; k++) {
    string += k;
  }
  string += "\n";
}

console.log(string);
}
let n=5;
DecreasingPattern(n);