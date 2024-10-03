function sums(n) {
    const result = [];

    function backtrack(remaining, start, path) {
        if (remaining === 0) {
            result.push(path);
            return;
        }

        for (let i = start; i <= remaining; i++) {
            backtrack(remaining - i, i, [...path, i]);
        }
    }

    backtrack(n, 1, []);
    return result.filter(partition => partition.length > 1 || partition[0] !== n);
}

// console.log(sums(5));