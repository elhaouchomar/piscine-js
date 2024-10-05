function sameAmount(str, regex1, regex2) {
    const matches1 = str.match(regex1);
    const matches2 = str.match(regex2);
  
    const count1 = matches1 ? matches1.length : 0;
    const count2 = matches2 ? matches2.length : 0;
  
    return count1 === count2;
  }
  
//   console.log(sameAmount('abc 123 abc 123', /abc/g, /\d+/g));
//   console.log(sameAmount('abc 123 abc 123 456', /abc/g, /\d+/g));