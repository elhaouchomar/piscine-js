function dayOfTheYear(date) {
    let year = date.getFullYear();
    if (year == 0) {
        year++
    }
    let startOfYear = new Date();

    startOfYear.setFullYear(year)
    startOfYear.setMonth(0)
    startOfYear.setDate(0)
    
    let diffInTime = date - startOfYear;
    let diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    return diffInDays + 1;
}