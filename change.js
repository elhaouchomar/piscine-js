const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
  }

function get(key) {
    return sourceObject[key]
}

function set(key, newValue) {
    sourceObject[key] = newValue
    return newValue
}

console.log(get("num"))
console.log(set("num", 54))