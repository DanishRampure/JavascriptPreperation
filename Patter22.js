function PatternPrint(num){
    let output=""
    for (let i = 1; i <=num; i++) {
        for (let j = 1; j <=i; j++) {
            output=output+j+" ";
        }console.log(output);
        output=''
    }
}

PatternPrint(5);

