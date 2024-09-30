// function dogYears(namePlanet, ageSecond) {
//     ageSecond *= 7;
    
//     const secondsInYear = 31_557_600; 

//     if (namePlanet === "earth") {
//         return Math.floor(ageSecond / secondsInYear);
//     } else if (namePlanet === "mercury") {
//         return Math.floor((ageSecond * 0.2408467) / secondsInYear);
//     } else if (namePlanet === "venus") {
//         return Math.floor((ageSecond * 0.61519726) / secondsInYear);
//     } else if (namePlanet === "mars") {
//         return Math.floor((ageSecond * 1.8808158) / secondsInYear);
//     } else if (namePlanet === "jupiter") {
//         return Math.floor((ageSecond * 11.862615) / secondsInYear);
//     } else if (namePlanet === "saturn") {
//         return Math.floor((ageSecond * 29.447498) / secondsInYear);
//     } else if (namePlanet === "uranus") {
//         return Math.floor((ageSecond * 84.016846) / secondsInYear);
//     } else if (namePlanet === "neptune") {
//         return Math.floor((ageSecond * 164.79132) / secondsInYear);
//     } else {
//         return
//     }
// }





function dogYears(namePlanet, ageSecond) {
    ageSecond *= 7;
    const secondsInYear = 31_557_600;

    const planet = {
        earth: 1,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,
    };

    const newAge = planet[namePlanet];

    if (newAge) {
        return +((ageSecond / secondsInYear) / newAge).toFixed(2);
    }
    return undefined;
}

console.log(dogYears("earth", 1000000000)); 
console.log(dogYears("mercury", 2134835688)); 