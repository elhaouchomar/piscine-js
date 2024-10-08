function firstDayWeek(weekNumber, year) {
    year = parseInt(year);
    const firstMonday = new Date(year, 0, 1);
    // console.log(firstMonday)
    // firstMonday.setDate(firstMonday.getDate() + (1 - firstMonday.getDay() + 7) % 7);
    // console.log(firstMonday)
    firstMonday.setDate(firstMonday.getDate() + (weekNumber - 1) * 7);
    // console.log(firstMonday)
    
    return `${firstMonday.getDate().toString().padStart(2, '0')}-${(firstMonday.getMonth() + 1).toString().padStart(2, '0')}-${firstMonday.getFullYear()}`;
}

// console.log(firstDayWeek(1, '2024'));
// console.log(firstDayWeek(2, '2024'));
// console.log(firstDayWeek(53, '2024'));