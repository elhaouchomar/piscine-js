function letterSpaceNumber(str) {
    return str.match(/[a-zA-Z] \d(?!\d|\w)/g) || [];
  }
  
//   console.log(letterSpaceNumber('example 1, example 20')); 
  