
// Problem: using the .value function access the value of an operand and perform the required operations

// Solution: We'll maintain the array of args using closure and add the values in the array. Then we'll overload
// the valueOf method available on functions in javascript. We'll provide the reference of it to .value method on 
// helper function as well as on add function as it will be required in the first test case.


const add = (...args) => {
    let storage = args

    let helper = (...args1) => {
        storage.push(...args1)
        return helper
    }

    helper.valueOf = function () {
        return storage.reduce((x, y) => x+y, 0)
    }

    helper.value = helper.valueOf

    this.value = helper.valueOf
    
    return helper;
}


console.log(add(1, 2, 3).value() === 6) // true
console.log(add(1)(2, 3).value() === 6) // true
console.log(add(1)(2)(3).value() === 6) // true
console.log(add(1)(2) + 3) // 6