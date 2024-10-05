function sameAmount(str, reg1, reg2){
  let res = str.split(reg2)
  let res2 = str.split(reg1)
  return res.length==res2.length
}
  
//   console.log(sameAmount('abc 123 abc 123', /abc/g, /\d+/g));
//   console.log(sameAmount('abc 123 abc 123 456', /abc/g, /\d+/g));