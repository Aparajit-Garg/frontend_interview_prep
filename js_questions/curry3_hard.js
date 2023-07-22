
// Problem statement: Given a function which accepts a given number of parameters, create a function which
// can handle different types of argument combinations and call the provided function when the arguments
// passed are equal to or greater than the number of arguments

// Solution1: We'll be using the concept of closures and currying. For handling different types of parameters
// we'll be creating a function which can handle the inputs and for storing the parameters, we'll be using an
// array with the help of closures. We'll call the passed in the function when the parameters received are equal
// to or greater than the parameters that the passed in function accepts.

// Solution2: We'll be using the currying concept without closure. The code is self-explanatory.

/******************************** FIRST APPROACH ********************************************** */
// const curry = (fn) => {
//     let storage = []
//     const temp = (...args) => {
//         if (args.length) {
//             storage.push(...args)
//         }

//         if (storage.length >= fn.length) {
//             let result = fn(...storage)
//             storage = []
//             return result
//         }
//         else return temp;
//     }

//     return temp;
// }


/******************************** SECOND APPROACH *************************************************/
const curry = (fn) => {
    let helper = (...args) => {
        if (args.length >= fn.length) return fn(...args)
        
        else {
            let temp = (...args1) => helper(...args, ...args1);
            return temp
        }
    }
    return helper;
}


const sum = (a, b, c, d, e, f=0) => {
    return a + b + c + d + e + f;
}

const value = curry(sum)

console.log(value(1, 2, 3, 4, 5))
console.log(value(1)(2, 3)(4, 5, 6))
console.log(value(1)(2)(3)(4)(5))