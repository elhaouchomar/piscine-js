function throttle(func, wait) {
    let lastCall = 0

    return function (...args) {
        const now = Date.now()
        if (now - lastCall >= wait) {
            lastCall = now
            func(...args)
        }
    }
}
function opThrottle(func, wait, options = { leading: true, trailing: true }) {
    let lastCall = 0;
    let timeout = null;

    if (arguments.length === 2) {
        options.leading = false;
        options.trailing = false;
    }

    return function (...args) {
        const now = Date.now();

        if (!options.leading && !options.trailing) {
            return;
        }

        if (!options.leading && options.trailing && !timeout) {
            timeout = setTimeout(() => {
                func(...args);
                lastCall = Date.now();
                timeout = null;
            }, wait);
            return;
        }

        if (now - lastCall >= wait) {
            if (options.leading) {
                lastCall = now;
                func(...args);
            }
        } else if (options.trailing) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                lastCall = Date.now();
                func(...args);
                timeout = null;
            }, wait - (now - lastCall));
        }
    };
}