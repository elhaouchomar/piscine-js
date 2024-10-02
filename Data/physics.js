
const isNumber = (a) => typeof a === 'number'
function getAcceleration(info) {
    if (isNumber(info.f) && isNumber(info.m)) {
        return info.f / info.m
    } else if (isNumber(info.Δv) && isNumber(info.Δt)) {
        return info.Δv / info.Δt
    } else if (isNumber(info.d) && isNumber(info.t)) {
        return (2*info.d) / (info.t * info.t)
    }
    return "impossible"
}
