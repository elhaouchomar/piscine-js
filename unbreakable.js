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
function join(arr,b){
    let str = ""
    for (let i = 0 ; i < arr.length; i++){
        if (i ===arr.length-1){
            str += arr[i]
            break
        }
        str += arr[i]+b
    }
    return str
}