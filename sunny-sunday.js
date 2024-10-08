function sunnySunday(date) {
    const referenceDate = new Date('0001-01-01');
    const totalDays = Math.floor((date - referenceDate) / (1000 * 60 * 60 * 24));
    const adjustedDay = totalDays % 6;
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    return weekdays[adjustedDay];
}