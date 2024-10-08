function dayOfTheYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const diffInTime = date - startOfYear;
    const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    return diffInDays + 1; 
}