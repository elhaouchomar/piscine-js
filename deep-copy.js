function deepCopy(v) {
    if (v === null) {
        return null
    }
    if (typeof v !== 'object') {
        return v
    }
    if (typeof v === 'function') {
        return v
    }
    if (v instanceof RegExp) {
        return new RegExp(v)
    }

    let res

    if (Array.isArray(v)) {
        res = []
        for (let i = 0; i < v.length; i++) {
            res[i] = deepCopy(v[i])
        }
    } else {
        res = {}
        for (const key in v) {
            if (v.hasOwnProperty(key)) {
                res[key] = deepCopy(v[key])
            }
        }
    }

    return res
}