is.num = function(v) {
    return typeof v === 'number'
},
is.nan = function(v) {
    return Number.isNaN(v)
},
is.str = function(v) {
    return typeof v === 'string'
},
is.bool = function(v) {
    return typeof v === 'boolean'
},
is.undef = function(v) {
    return typeof v === 'undefined'
},
is.def = function(v) {
    return typeof v != 'undefined'
},
is.arr = function(v) {
    return Array.isArray(v)
},
is.obj = function(v) {
    return v != null && v === 'object' && v !== Array.isArray(v)
},
is.func = function(v) {
    return typeof v === 'function'
},
is.truthy = function(v) {
    return !!v
},
is.falsy = function(v) {
    return !v
}


// is.num = (v) => typeof v === 'number'
// is.nan = (v) => Number.isNaN