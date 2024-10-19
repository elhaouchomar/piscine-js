function replica(target, ...sources) {
    if (target === null || typeof target !== 'object') {
        throw new Error('error')
    }

    for (const source of sources) {
        if (source === null || typeof source !== 'object') continue

        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                const sourceValue = source[key]
                if (typeof sourceValue === 'object' && sourceValue !== null) {
                    if (sourceValue instanceof RegExp) {
                        target[key] = new RegExp(sourceValue)
                    } else if (Array.isArray(sourceValue)) {
                        target[key] = [...sourceValue]
                    } else {
                        if (typeof target[key] !== 'object' || Array.isArray(target[key])) {
                            target[key] = {}
                        }
                        replica(target[key], sourceValue)
                    }
                } else {
                    target[key] = sourceValue
                }
            }
        }
    }
    return target
}