function get(srs, path) {
    let paths = path.split('.');
    let a = srs;

    for (let i = 0; i < paths.length; i++) {
        if (a[paths[i]] !== undefined) {
            a = a[paths[i]]
        } else {
            return undefined
        }

    }
    return a;
}