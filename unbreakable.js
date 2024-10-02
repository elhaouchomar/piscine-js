function split(s,b){
    let ar =[]
    if (b == null){
        ar[ar.length]=s
        return ar
    }
    if (b ===''){
        for (let i = 0 ; i < s.length; i++){
            ar[ar.length]=s[i]
        }
        return ar
    }
    let str =""
    for (let i = 0 ; i < s.length; i++){
        if (s[i]===b[0] ){
            let x = b[0]
            for (let j = 1 ; j < b.length; j++){
                x+= b[j]
                i++
            }
            if (x==b){
                ar[ar.length] = str
                str = ""
            }
            if (i ===s.length-1){
                ar[ar.length] = str
            }  
            continue
        }
        str += s[i]
    }
    if (str !==""){
        ar[ar.length] = str
    }
    if (ar.length===0){
        ar[ar.length] = s
    }
    return ar
}

function join(arr, sep) {
    let result = ""
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
        if (i < sep.length - 1) {
            result += sep
        }
    }
    return result
}

// const str = "hedddllo wordddld dfsdddgnf fdddgnnf";
// const sep = "ddd";
// console.log(split(str, sep));
// console.log(join(['o', 'm', 'a', 'r'], ''))