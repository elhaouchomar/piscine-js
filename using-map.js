// 1
function citiesOnly(arr) {
    return arr.map((value) => value.city)
}

// 2
function upperCasing(arr) {
    const str = arr.split(' ')
    let stri = ""
    for (let i = 0; i < str.length; i++) {
        if (i != str.length - 1) {

            stri += str[i].charAt(0).toUpperCase() + str[i].slice(1) + ' '
        } else {
            stri += str[i].charAt(0).toUpperCase() + str[i].slice(1)
        }
    }
    return stri
}

function upperCasingStates(arr) {
    return arr.map(upperCasing)
}

// 3
function fahrenheitToCelsius(arrF) {
    return arrF.map(temp => {
        const pars = parseFloat(temp)
        return Math.floor(convert(pars)) + '°C'
    })
}
function convert(f) {
    return (f - 32) * 5 / 9
}

// 4
function trimTemp(arr) {
    return arr.map((value) => {
        value.temperature =  value.temperature.replace(/\s/g, '')
        return value
    })
}

// 5
function tempForecasts(arr) {
    return arr.map(value => {
        const tm = parseFloat(value.temperature);
        const celsius = convert(tm);
        return Math.round(celsius) + "°C in " + value.city + ', ' + value.state
    });
}
