// 1
function filterShortStateName(arr) {
    return arr.filter((value) => value.length < 7)
}

// 2
function filterStartVowel(arr) {
    return arr.filter((value) => /^[aeiou]/i.test(value) )
}

// 3
function filter5Vowels(arr) {
    return arr.filter((value) => {
        const fivevowel = (value.match(/[aeiou]/gi) || []).length
        return fivevowel >= 5
    })
}

// 4
function filter1DistinctVowel(arr) {
    return arr.filter((value) => {
        const fivevowel = new Set(value.toLowerCase().match(/[aeiou]/gi))
        return fivevowel.size === 1
    })
}

// 5
function multiFilter(arr) {
    return arr.filter(item => {
        const {capital, name, tag, region} = item

        const isCapitalValid = capital && capital.length >= 8

        const isNameValid = name && !/^[aeuio]/i.test(name)

        const isTagValid = tag && /[aeuio]/i.test(tag)

        const isRegionValid = region && region !== "South"
        
        return isCapitalValid && isNameValid && isTagValid && isRegionValid
    })
}