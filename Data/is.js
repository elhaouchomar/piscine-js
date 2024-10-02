// is.num = function(v) {
//     return typeof v === 'number' && !is.nan(v);
// };

// is.nan = function(v) {
//     return Number.isNaN(v);
// };

// is.str = function(v) {
//     return typeof v === 'string';
// };

// is.bool = function(v) {
//     return typeof v === 'boolean';
// };

// is.undef = function(v) {
//     return typeof v === 'undefined';
// };

// is.def = function(v) {
//     return typeof v !== 'undefined';
// };

// is.arr = function(v) {
//     return Array.isArray(v);
// };

// is.obj = function(v) {
//     return v !== null && typeof v === 'object' && !Array.isArray(v);
// };

// is.func = function(v) {
//     return typeof v === 'function';
// };

// is.truthy = function(v) {
//     return Boolean(v);
// };

// is.falsy = function(v) {
//     return !v;
// };


is.num = (value) => typeof value === 'number'
is.nan = (value) => Number.isNaN(value)
is.str = (value) => typeof value === "string"
is.bool = (value) => typeof value === 'boolean'
is.undef = (value) => typeof value === "undefined"
is.def = (value) => typeof value !== "undefined"
is.arr = (value) => Array.isArray(value)
is.obj = (value) => typeof value === "object" && value != null && !Array.isArray(value)
is.fun = (value) => typeof value === 'function'
is.truthy = (value) => Boolean(value) === true
is.falsy = (value) => Boolean(value) === false