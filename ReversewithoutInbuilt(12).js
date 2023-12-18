string1="My name is String"
function stringReverse(string1){
    let string2="";
    for(let i=string1.length;i>0;i--){
        string2+=string1.charAt(i)

    }
    return string2;
}
console.log(stringReverse(string1));