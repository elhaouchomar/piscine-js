function crosswordSolver(emptyPuzzle, words) {
    if (typeof emptyPuzzle !== 'string' || !Array.isArray(words)) {
        console.log('Error');
        return;
    }
    if (emptyPuzzle.trim() === '') {
        console.log('Error');
        return;
    }

    let arr = emptyPuzzle.split('\n');
    let res = [...arr.map(line => line.split(''))];

    if (solve(res, words, 0)) {
        for (let i = 0; i < res.length; i++) {
            console.log(res[i].join(''));
        }
    } else {
        console.log('Error');
    }
}

function solve(res, words, index) {
    if (index < words.length) {
        var word = words[index];

        for (var i = 0; i < res.length; i++) {
            for (var j = 0; j < res[i].length; j++) {
                if (!isNaN(Number(res[i][j])) || res[i][j] === word[0]) {
                    if (possibleVertical(res, word, i, j)) {
                        var placedVer = changeVertical(res, word, i, j);
                        if (solve(res, words, index + 1)) {
                            return true;
                        }
                        removeVertical(res, placedVer, i, j);
                    }
                    if (possibleHorizontal(res, word, i, j)) {
                        var placedHor = changeHorizontal(res, word, i, j);
                        if (solve(res, words, index + 1)) {
                            return true;
                        }
                        removeHorizontal(res, placedHor, i, j);
                    }
                }
            }
        }
        return false;
    }
    return true;
}

function possibleHorizontal(res, word, i, j) {
    if (j + word.length > res[i].length || (j > 0 && res[i][j - 1] !== '.')) {
        return false;
    }
    for (let k = 0; k < word.length; k++) {
        if (k + j >= res[i].length || 
            (isNaN(Number(res[i][j + k])) && res[i][j + k] !== word[k])) {
            return false;
        }
    }
    return true;
}

function possibleVertical(res, word, i, j) {
    if (i + word.length > res.length || (i > 0 && res[i - 1][j] !== '.')) {
        return false;
    }
    for (let k = 0; k < word.length; k++) {
        if (isNaN(Number(res[i + k][j])) && res[i + k][j] !== word[k]) {
            return false;
        }
    }
    return true;
}

function changeHorizontal(res, word, i, j) {
    let original = new Array(word.length);
    for (let k = 0; k < word.length; k++) {
        original[k] = (!isNaN(Number(res[i][j + k])));
        res[i][j + k] = word[k];
    }
    return original;
}

function changeVertical(res, word, i, j) {
    let original = new Array(word.length);
    for (let k = 0; k < word.length; k++) {
        original[k] = (!isNaN(Number(res[i + k][j])));
        res[i + k][j] = word[k];
    }
    return original;
}

function removeHorizontal(res, arr, i, j) {
    for (let k = 0; k < arr.length; k++) {
        if (arr[k]) {
            res[i][j + k] = "0";
        }
    }
}

function removeVertical(res, arr, i, j) {
    for (let k = 0; k < arr.length; k++) {
        if (arr[k]) {
            res[i + k][j] = "0";
        }
    }
}
const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['aaab', 'aaac', 'aaad', 'aaae']

crosswordSolver(puzzle, words)
