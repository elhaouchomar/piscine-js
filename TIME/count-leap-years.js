function countLeapYears(date) {
    const year = date.getFullYear();
    let leapYearCount = 0;

    for (let i = 1; i < year; i++) {
        if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
            leapYearCount++;
        }
    }

    return leapYearCount;
}
console.log(countLeapYears(new Date('1664-08-09')))
console.log(countLeapYears(new Date('2024-01-01')));
console.log(countLeapYears(new Date('2000-01-01')));
console.log(countLeapYears(new Date('1900-01-01')));
console.log(countLeapYears(new Date('0001-12-01')));   