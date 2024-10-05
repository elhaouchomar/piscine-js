function RNA(str) {
    let RNA = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'G') {
            RNA += 'C';
        } else if (str[i] === 'C') {
            RNA += 'G';
        } else if (str[i] === 'A') {
            RNA += 'U';
        } else if (str[i] === 'T') {
            RNA += 'A';
        } else if (str[i] === 'U') {
            RNA += 'A'
        }
    }
    return RNA;
}

function DNA(str) {
    let DNA = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'C') {
            DNA += 'G';
        } else if (str[i] === 'G') {
            DNA += 'C';
        } else if (str[i] === 'A') {
            DNA += 'T';
        } else if (str[i] === 'U') {
            DNA += 'A';
        }
    }
    return DNA;
}

// console.log(RNA(DNA('AUCG')));
// console.log(RNA('UAGC')); 
