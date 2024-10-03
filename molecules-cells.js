function DNA(str) {
    let RNA = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'G') {
            RNA += 'C'
        } else if (str[i] === 'C') {
            RNA += 'G'
        } else if (str[i] === 'T') {
            RNA += 'A'
        } else if (str[i] === 'A') {
            RNA += 'U'
        }
    }
    return RNA
}

function RNA(str) {
    let DNA = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'G') {
            DNA += 'C'
        } else if (str[i] === 'C') {
            DNA += 'G'
        } else if (str[i] === 'T') {
            DNA += 'A'
        } else if (str[i] === 'A') {
            DNA += 'U'
        }
    }
    return DNA
}



// const ARN = DNA('AGCTAGTTAGGC')
// const ADN = RNA('TAGC')
// console.log(ARN)
// console.log(ADN)
