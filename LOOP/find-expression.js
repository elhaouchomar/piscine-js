// const add4 = '+4';
// const mul2 = '*2';

function findExpression(target) {
    function helper(current, expression) {
        if (current === target) {
            return expression.trim();
        }
        if (current > target) {
            return undefined;
        }

        let addResult = helper(current + 4, expression + add4 + ' ');
        let mulResult = helper(current * 2, expression + mul2 + ' ');

        return addResult || mulResult;
    }

    return helper(1, '1 ');
}

// console.log(findExpression(8)); 
// console.log(findExpression(64));
// console.log(findExpression(10));
// console.log(findExpression(5)); 
// console.log(findExpression(1)); 
