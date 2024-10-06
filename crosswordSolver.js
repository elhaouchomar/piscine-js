function crosswordSolver(puzzle, words) {
    // Validate input types
    if (typeof puzzle !== 'string' || !Array.isArray(words)) {
        console.log('Error');
        return;
    }
    
    // Check for empty puzzle
    if (puzzle.trim() === '') {
        console.log('Error');
        return;
    }

    // Convert puzzle string to 2D array
    let arr = puzzle.split('\n');
    let res = arr.map(line => line.split(''));

    // Calculate the sum of 1s and 2s in the puzzle
    const puzzleSum = getPuzzleSum(res);

    // Validate sum against number of words
    if (puzzleSum !== words.length) {
        console.log('Error');
        return;
    }

    // Check for reversed words
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    const hasReversedWord = reversedWords.some(word => words.includes(word));
    if (hasReversedWord) {
        console.log('Error');
        return;
    }

    words.sort();

    // Attempt to solve the puzzle
    if (solve(res, words, 0)) {
        // Validate final grid for 0s, 1s, and 2s
        if (res.flat().some(cell => cell === '0' || cell === '1' || cell === '2')) {
            console.log('Error');
            return;
        }

        // Print solved puzzle
        for (let i = 0; i < res.length; i++) {
            console.log(res[i].join(''));
        }
    } else {
        console.log('Error'); // Print error if solving fails
    }
}

function getPuzzleSum(res) {
    let sum = 0; // Initialize sum
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < res[i].length; j++) {
            // Accumulate sum of 1s and 2s
            if (res[i][j] === '1' || res[i][j] === '2') {
                sum += Number(res[i][j]);
            }
        }
    }
    return sum; // Return the total sum
}

function solve(res, words, index) {
    if (index < words.length) { // Check if there are more words to place
        const word = words[index]; // Get the current word

        for (let i = 0; i < res.length; i++) { // Iterate through puzzle grid
            for (let j = 0; j < res[i].length; j++) {
                // Check if the current cell can accommodate a word
                if (!isNaN(Number(res[i][j])) || res[i][j] === word[0]) {
                    // Try placing vertically
                    if (possibleVertical(res, word, i, j)) {
                        const placedVer = changeVertical(res, word, i, j); // Place word
                        if (solve(res, words, index + 1)) {
                            return true; // Successful placement
                        }
                        removeVertical(res, placedVer, i, j); // Backtrack
                    }
                    // Try placing horizontally
                    if (possibleHorizontal(res, word, i, j)) {
                        const placedHor = changeHorizontal(res, word, i, j); // Place word
                        if (solve(res, words, index + 1)) {
                            return true; // Successful placement
                        }
                        removeHorizontal(res, placedHor, i, j); // Backtrack
                    }
                }
            }
        }
        return false; // No valid placement found
    }
    return true; // All words successfully placed
}

function possibleHorizontal(res, word, i, j) {
    // Check if the word fits horizontally without overflow
    if (j + word.length > res[i].length || (j > 0 && res[i][j - 1] !== '.')) {
        return false;
    }
    // Check each character for compatibility
    for (let k = 0; k < word.length; k++) {
        if (k + j >= res[i].length ||
            (isNaN(Number(res[i][j + k])) && res[i][j + k] !== word[k])) {
            return false;
        }
    }
    return true; 
}

function possibleVertical(res, word, i, j) {
    // Check if the word fits vertically without overflow
    if (i + word.length > res.length || (i > 0 && res[i - 1][j] !== '.')) {
        return false; // Invalid placement
    }
    // Check each character for compatibility
    for (let k = 0; k < word.length; k++) {
        if (isNaN(Number(res[i + k][j])) && res[i + k][j] !== word[k]) {
            return false;
        }
    }
    return true;
}

function changeHorizontal(res, word, i, j) {
    let original = new Array(word.length); // Store original values
    for (let k = 0; k < word.length; k++) {
        original[k] = (!isNaN(Number(res[i][j + k]))); // Track original state
        res[i][j + k] = word[k]; // Place the word
    }
    return original; // Return original state
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
    // Restore original values for horizontal placement
    for (let k = 0; k < arr.length; k++) {
        if (arr[k]) {
            res[i][j + k] = "0"; 
        }
    }
}

function removeVertical(res, arr, i, j) {
    // Restore original values for vertical placement
    for (let k = 0; k < arr.length; k++) {
        if (arr[k]) {
            res[i + k][j] = "0"; 
        }
    }
}

const puzzle = '2001\n0..0\n1000\n0..0';
const words = ['aaab', 'aaac', 'aaad', 'aaae'];

crosswordSolver(puzzle, words);
