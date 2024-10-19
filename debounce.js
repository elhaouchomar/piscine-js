function debounce(func, wait) {
    let timeout;

    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

function opDebounce(func, wait, leading) {

    let timeout;
 

    return function(...args) {
        if (leading){
            func(...args)
            leading = false
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// const logMessage = (message) => {
//     console.log(message);
// };

// const debouncedLog = debounce(logMessage, 2000);
// const opDebouncedLog = opDebounce(logMessage, 2000);

// debouncedLog("dsuifqhdsiofgdsoigjdfoighosdfghs");
// opDebouncedLog("fsdhiosdgqsdkfjndskjnsdkfjqOIFJOIEFJOIE");