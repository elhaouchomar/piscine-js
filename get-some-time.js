function firstDayWeek(weekNumber, year) {
    year = parseInt(year);
    const firstDayOfYear = new Date(year, 0, 1);


    firstDayOfYear.setDate(firstDayOfYear.getDate());

    const firstDayOfWeek = new Date(firstDayOfYear);
    firstDayOfWeek.setDate(firstDayOfYear.getDate() + (weekNumber - 1) * 7)


    return `${firstDayOfWeek.getDate().toString().padStart(2, '0')}-${(firstDayOfWeek.getMonth() + 1).toString().padStart(2, '0')}-${firstDayOfWeek.getFullYear()}`;
}