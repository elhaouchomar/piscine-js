function matchCron(cronString, date) {
    const [cronMinute, cronHour, cronDayOfMonth, cronMonth, cronDayOfWeek] = cronString.split(' ');
    
    const minute = date.getMinutes();
    const hour = date.getHours();
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1; 
    const dayOfWeek = (date.getDay() + 1) % 7 || 7;

    const matches = (cronField, value) => {
        return cronField === '*' || cronField == value;
    };

    return (
        matches(cronMinute, minute) &&
        matches(cronHour, hour) &&
        matches(cronDayOfMonth, dayOfMonth) &&
        matches(cronMonth, month) &&
        matches(cronDayOfWeek, dayOfWeek)
    );
}