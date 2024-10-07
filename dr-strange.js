function addWeek(date) {
    const dayOfWeek = [
        'Monday',          
        'Tuesday',         
        'Wednesday',       
        'Thursday',        
        'Friday',          
        'Saturday',        
        'Sunday',          
        'secondMonday',    
        'secondTuesday',   
        'secondWednesday', 
        'secondThursday',  
        'secondFriday',    
        'secondSaturday',  
        'secondSunday'     
    ];
    
    const epoch = new Date('0001-01-01');
    const diffInMilliseconds = date.getTime() - epoch.getTime();
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)); 
    const dayIndex = diffInDays % 14; 
    
    return dayOfWeek[dayIndex];
}

function timeTravel({ date, hour, minute, second }) {
    const newDate = new Date(date); 
    
    if (typeof hour === 'number') newDate.setHours(hour);
    if (typeof minute === 'number') newDate.setMinutes(minute);
    if (typeof second === 'number') newDate.setSeconds(second);
    
    return newDate;
}
