function round(number) {
    const isNegative = number < 0;
    const absNumber = isNegative ? -number : number;
    const intPart = absNumber | 0;
    const fractionalPart = absNumber - intPart;

    if (fractionalPart < 0.5) {
        return isNegative ? -intPart : intPart;
    } else {
        return isNegative ? -(intPart + 1) : intPart + 1;
    }
}

function ceil(number) {
    const isNegative = number < 0;
    const absNumber = isNegative ? -number : number;
    const intPart = absNumber | 0; 

    return (absNumber > intPart) ? (isNegative ? -intPart : intPart + 1) : (isNegative ? -intPart : intPart);
}

function floor(number) {
    const isNegative = number < 0;
    const absNumber = isNegative ? -number : number;
    const intPart = absNumber | 0;

    return (isNegative && absNumber !== intPart) ? -(intPart + 1) : (isNegative ? -intPart : intPart);
}

function trunc(number) {
    return number < 0 ? ceil(number) : number | 0;
}


// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))
