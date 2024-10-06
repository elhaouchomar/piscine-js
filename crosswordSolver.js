function crosswordSolver(emptyPuzzle, words){
    let arr = emptyPuzzle.split('\n')
    let res = [...arr.map(line=> line.split(''))]
    if (solve(res, words, 0)){
    for (let i = 0; i < res.length; i++){
        console.log(res[i].join(''));
    }
}else{
    console.log('Error')
}
    
}

function solve(res, words, index){
    if (index < words.length){
        var word = words[index];
        for (var i = 0; i < res.length; i++){
            for (var j = 0; j < res[i].length; j++){
                if (!isNaN(Number(res[i][j])) || res[i][j] === word[0]){
                    if (possiblevertical(res, word, i, j)){
                        var placedVer = changeVertical(res, word, i, j);
                        if (solve(res, words, index + 1)) {
                            return true;
                        }
                        suprimerVertical(res, placedVer, i, j);
                    }
                    if (possiblehorizontal(res, word, i, j)){
                        var placedHor = changehorizontal(res, word, i, j);
                        if (solve(res, words, index + 1)) {
                            return true;
                        }
                        supprimerHorizontal(res, placedHor, i, j);
                    }
                }
            }
        }
        return false;
    }
    return true;
}

function possiblehorizontal(res, word, i, j){
    // if (j-1 >= 0 && res[i][j-1] !== ".") {
    //     return false;
    // }
    if (j + word.length < res[i].length && res[i][j + word.length] !== ".") {
        return false;
    }
    for (let k = 0; k < word.length; k++){
        if (k + j >= res[i].length || isNaN(Number(res[i][j + k])) && res[i][j + k] !== word[k]) {
            return false;
        }
    }
    return true;
}

function possiblevertical(res, word, i, j){
    // if (i-1 >= 0 && res[i-1][j] !== ".") {
    //     return false;
    // }
    if (i + word.length > res.length) {
        return false;
    }
    for (let k = 0; k < word.length; k++){
        if ( (isNaN(Number(res[i + k][j])) && res[i + k][j] !== word[k])) {
            return false;
        }
    }
    return true;
}

function changehorizontal(res, word, i, j){
    let original = new Array(word.length);
    for (let k = 0; k < word.length; k++){
        original[k] = (!isNaN(Number(res[i][j + k])));
        res[i][j + k] = word[k];
    }
    return original;
}

function changeVertical(res, word, i, j){
    let original = new Array(word.length);
    for (let k = 0; k < word.length; k++){
        original[k] = (!isNaN(Number(res[i + k][j])));
        res[i + k][j] = word[k];
    }
    return original;
}

function supprimerHorizontal(res, arr, i, j){
    for (let k = 0; k < arr.length; k++){
        if (arr[k]) {
            res[i][j + k] = "0";
        }
    }
}

function suprimerVertical(res, arr, i, j){
    for (let k = 0; k < arr.length; k++){
        if (arr[k]) {
            res[i + k][j] = "0";
        }
    }
}

const emptyPuzzle = '2001\n0..0\n1000\n0..0'
const words = ['aaab', 'aaac', 'aaad', 'aaae']

crosswordSolver(emptyPuzzle, words)