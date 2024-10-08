function firstDayWeek(weekNumber, year) {
    year = parseInt(year);
    const firstDayOfYear = new Date(year, 0, 1);
    const firstMonday = new Date(firstDayOfYear);
    firstMonday.setDate(firstMonday.getDate() + (1 - firstMonday.getDay() + 7) % 7);

    const firstDayOfWeek = new Date(firstMonday);
    firstDayOfWeek.setDate(firstMonday.getDate() + (weekNumber - 1) * 7);

    if (weekNumber === 1 && firstDayOfYear.getDay() !== 1) {
        return `${firstDayOfYear.getDate().toString().padStart(2, '0')}-${(firstDayOfYear.getMonth() + 1).toString().padStart(2, '0')}-${firstDayOfYear.getFullYear()}`;
    }

    return `${firstDayOfWeek.getDate().toString().padStart(2, '0')}-${(firstDayOfWeek.getMonth() + 1).toString().padStart(2, '0')}-${firstDayOfWeek.getFullYear()}`;
}