function chunk(arr, nb) {
    let smallarr = []
    let bigarr = []

    for (let i = 0; i < arr.length; i++) {
        if (i == nb) {
            bigarr[bigarr.length] = smallarr
            smallarr = []
            nb += i
        }
        smallarr[smallarr.length] = arr[i]
    }
    if (smallarr != 0) {
        bigarr[bigarr.length] = smallarr
    }
    return bigarr
}

// console.log(chunk([1, 2, 3, 4, 5, 6], 2))