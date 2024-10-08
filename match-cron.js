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

// console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00')));
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00')));
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00')));
// console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00')));
