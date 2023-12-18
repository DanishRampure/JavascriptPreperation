function containsSubstring(str, substring) {
    let i = 0;
    while (i <= str.length - substring.length) {
        if (str.slice(i, i + substring.length) === substring) {
            return true;
            
        }
        i++;
    }
    return false;
}
console.log(containsSubstring('javascript', 'maqwrk'));