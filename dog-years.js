function dogYears(namePlanet, ageSecond) {
    // Convert dog age to seconds
    ageSecond *= 7;
    
    const secondsInYear = 31_557_600; // Seconds in one year

    if (namePlanet === "earth") {
        return (+((ageSecond) / secondsInYear)).toFixed(2);
    } else if (namePlanet === "mercury") {
        return (+((ageSecond * 0.2408467) / secondsInYear)).toFixed(2);
    } else if (namePlanet === "venus") {
        return (+((ageSecond * 0.61519726) / secondsInYear)).toFixed(2);
    } else if (namePlanet === "mars") {
        return (+((ageSecond * 1.8808158) / secondsInYear)).toFixed(2);
    } else if (namePlanet === "jupiter") {
        return (+((ageSecond * 11.862615) / secondsInYear)).toFixed(2);
    } else if (namePlanet === "saturn") {
        return (+((ageSecond * 29.447498) / secondsInYear)).toFixed(2);
    } else if (namePlanet === "uranus") {
        return (+((ageSecond * 84.016846) / secondsInYear)).toFixed(2);
    } else if (namePlanet === "neptune") {
        return (+((ageSecond * 164.79132) / secondsInYear)).toFixed(2);
    }
}

// console.log(dogYears("earth", 1000000000));
// console.log(dogYears("mercury", 2134835688));