function uppercaseWords(sentence) {
    const words = sentence.split(' ');
    let result = '';
    for (let word of words) {
        result += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    }
    console.log(result.trim());
}
uppercaseWords('this is a sentence');