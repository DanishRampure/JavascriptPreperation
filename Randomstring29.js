function getString(n) { 
    let str = ''; 
    const characters =  
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    const charLen = characters.length; 
  
    for (let i = 0; i < n; i++) { 
  
        // Generating a random index 
        const idx = Math.floor(Math.random() * charLen); 
  
        str += characters.charAt(idx); 
    } 
  
    return str; 
} 
  
const result = getString(10); 
console.log(result);