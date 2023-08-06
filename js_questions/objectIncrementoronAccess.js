
// upon accessing the object's property, it should be incremented upon access. Also 
// setting a value should not be possible if it's below 10


let obj = {
    i: 0
}

obj = new Proxy(obj, {
    get: (target, property) => {
        if (property === 'i') {
            target[property]++;
            return target[property];
        }
        if (property === 'j')
            return target[property];
    },
    set: (target, property, value) => {
        if (property === 'j') {
            if (value > 10)
                target[property] = value;
            else {
                throw RangeError("Value should be greater than 10");
            }
        }
    }
})

console.log(obj.i)
console.log(obj.i)
console.log(obj.i)
console.log(obj.i)
console.log(obj.i)
try {
    obj.j = 9
}catch (error) {
    console.error(error.message)
}
obj.j = 11;

console.log(obj.j)
