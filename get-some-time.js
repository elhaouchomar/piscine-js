function firstDayWeek(nbWeek, year) {
    year = parseInt(year)
    const firstDayOfYear = new Date(year, 0, 1)
    console.log("firstDayOfYear: ",firstDayOfYear)
    console.log()


    const firstMonday = new Date(firstDayOfYear)
    console.log("firstMonday: ", firstMonday)
    console.log()


    const dayOfWeek = firstMonday.getDate()
    console.log("dayOfWeek: ", dayOfWeek)
    console.log()


    firstMonday.setDate(firstMonday.getDate() )
    console.log("firstMonday: ", firstMonday)
    console.log()


    const firstDayWeek = new Date(firstMonday)
    firstDayWeek.setDate(firstMonday.getDate() + (nbWeek - 1) * 7)
    console.log("firstDayWeek: ", firstDayWeek)
    console.log()

}


console.log(firstDayWeek(1, '2024'));  // Should return '01-01-2024'
console.log(firstDayWeek(2, '2024'));  // Should return '08-01-2024'
console.log(firstDayWeek(53, '2024'));
