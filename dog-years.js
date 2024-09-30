function dogYears(namePlanet, ageSecond) {
    ageSecond*=7
    if (namePlanet == "earth") {
        return +((ageSecond)/31_557_600).toFixed(2)
    } else if (namePlanet == "mercury") {
        return +((ageSecond*0.2408467)/31_557_600).toFixed(2)
    } else if (namePlanet == "venus") {
        return +((ageSecond*0.61519726)/31_557_600).toFixed(2)
    } else if (namePlanet == "mars") {
        return +((ageSecond*1.8808158)/31_557_600).toFixed(2)
    } else if (namePlanet == "jupiter") {
        return +((ageSecond*11.862615)/31_557_600).toFixed(2)
    } else if (namePlanet == "saturn"){
        return +((ageSecond*29.447498)/31_557_600).toFixed(2)
    } else if (namePlanet == "uranus") {
        return +((ageSecond*84.016846)/31_557_600).toFixed(2)
    } else if (namePlanet == "neptune"){
        return +((ageSecond*164.79132)/31_557_600).toFixed(2)
    }
}

// console.log(dogYears("earth", 1000000000))