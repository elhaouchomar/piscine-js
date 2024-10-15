function filterEntries(cart, filterFn) {
    return Object.fromEntries(
        Object.entries(cart).filter(([k, v]) => filterFn([k, v]))
    );
}

function mapEntries(cart, mapFn) {
    return Object.fromEntries(
        Object.entries(cart).map(([k, v]) => mapFn([k, v]))
    );
}

function reduceEntries(cart, reducerFn, initial) {
    return Object.entries(cart).reduce(
        (acc, [k, v]) => reducerFn(acc, [k, v]),
        initial
    );
}

function totalCalories(cart) {
    return parseFloat(reduceEntries(cart, (total, [item, grams]) => {
        return total + (nutritionDB[item].calories * grams) / 100;
    }, 0).toFixed(2));
}


function lowCarbs(cart) {
    return filterEntries(cart, ([item, grams]) => {
        return (nutritionDB[item].carbs * grams) / 100 < 50;
    });
}

function cartTotal(cart) {
    return mapEntries(cart, ([item, grams]) => {
        const nutrition = nutritionDB[item];
        return [
            item,
            Object.fromEntries(
                Object.entries(nutrition).map(([key, value]) => [
                    key,
                    parseFloat(((value * grams) / 100).toFixed(3))
                ])
            )
        ];
    });
}

