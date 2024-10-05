function sameAmount(str, regex1, regex2) {
    const matches1 = str.match(regex1) || [];
    const matches2 = str.match(regex2) || [];
    return matches1.length === matches2.length;
  }
  
//   console.log(sameAmount('abc 123 abc 123', /abc/g, /\d+/g));
//   console.log(sameAmount('abc 123 abc 123 456', /abc/g, /\d+/g));