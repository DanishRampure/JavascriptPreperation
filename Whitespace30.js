function checkWhitespace(str) { 
    let whitespace = new Set([" ", "\t", "\n"]); 
    for (let i = 0; i < str.length; i++) { 
        if (whitespace.has(str[i])) { 
            return true; 
        } 
    } 
    return false; 
} 
let str = "Danish isPresent"; 
if (checkWhitespace(str)) { 
    console.log( 
        "The string contains whitespace characters."
    ); 
} else { 
    console.log( 
        "The string does not contain whitespace characters."
    ); 
}