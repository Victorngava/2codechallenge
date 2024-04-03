function swapCase(str) {
    let swappedStr = '';
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        swappedStr += str[i].toLowerCase();
      } else {
        swappedStr += str[i].toUpperCase();
      }
    }
  
    return swappedStr;
  }
  
  // Test the function
  console.log(swapCase('The Quick Brown Fox')); // Output: 'tHE qUICK bROWN fOX'