function debounce(func, wait) {
    let timeout;

    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

function opDebounce(func, wait) {
    let timeout;
    let opt = false;

    return function(...args) {
        if (!opt) {
            func(...args);
            opt = true;
        }

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            opt = false;
        }, wait);
    };
}

// const logMessage = (message) => {
//     console.log(message);
// };

// const debouncedLog = debounce(logMessage, 2000);
// const opDebouncedLog = opDebounce(logMessage, 2000);

// debouncedLog("dsuifqhdsiofgdsoigjdfoighosdfghs");
// opDebouncedLog("fsdhiosdgqsdkfjndskjnsdkfjqOIFJOIEFJOIE");