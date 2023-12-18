
function ContinueStatement(Cnum) {
    let result = "";
    for (i = 0; i <= Cnum; i++) {
        if (i == 2) {
            result += "Continue is the Skip the Specific index mentioned above";
            continue;
        }
        result += i + " ";
    }
    return result;
}
 let Cnum = 10;
 console.log(ContinueStatement(Cnum));
