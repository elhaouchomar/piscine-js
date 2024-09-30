const escapeStr = "\`\\/\"\'"
const arr = [4, '2']
const obj = {
    str : "Hello World!",
    num : 1, 
    bool : true, 
    undef : undefined,
};
const nested = {
    arr : [4, '2'],
    obj :  {
        str : "Hello World!",
        num : 1, 
        bool : true, 
    }
}
Object.freeze(obj,nested, nested.arr, nested.obj)