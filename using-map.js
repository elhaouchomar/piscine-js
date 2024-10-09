function citiesOnly(arr) {
    return arr.map((value) => value.city)
}

function upperCasing(arr) {
    return arr.charAt(0).toUpperCase() + arr.slice(1)
}

function upperCasingStates(arr) {
    return arr.map(upperCasing)
}

function fahrenheitToCelsius(arrF) {
    return arrF.map(temp => {
        const pars = parseFloat(temp)
        return Math.floor(convert(pars)) + '°C'
    })
}
function convert(f) {
    return (f - 32) * 5 / 9
}

function trimTemp(arr) {
    return arr.map(value => value.temperature.replace(/\s+/g, ''))
}

function tempForecasts(arr) {
    return arr.map(value => {
        const tm = parseFloat(value.temperature);
        const celsius = convert(tm);
        return Math.round(celsius) + "°C in " + value.city + ', ' + value.state
    });
}
