function firstDayWeek(weekNum, yearNum) {
    let year = new Date(yearNum, 0, 1)
    let dayOfWeek = year.getDay()
    let adjustment = (dayOfWeek === 0 ? 6 : dayOfWeek - 1)
    year.setDate(year.getDate() - adjustment)
    
    let firstOfWeek = new Date(year)
    firstOfWeek.setDate(firstOfWeek.getDate() + 7 * (weekNum - 1))
    
    if (firstOfWeek.getFullYear() < yearNum) {
        return `01-01-${yearNum}`
    }
    
    return `${firstOfWeek.getDate().toString().padStart(2, '0')}-${(firstOfWeek.getMonth() + 1).toString().padStart(2, '0')}-${firstOfWeek.getFullYear()}`
}

// console.log(firstDayWeek(1, '2024')) 
// console.log(firstDayWeek(2, '2024')) 
// console.log(firstDayWeek(53, '2024'))
// console.log(firstDayWeek(52, '1000'))