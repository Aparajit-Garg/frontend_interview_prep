
// Problem: Create a memoized function so that for a pure function the value is returned
// without having to recalculate the result

// Solution: We'll use closure and save the result for values passed in an object to avoid
// computation for the next time

const memoize = (fn) => {
    let value = {}

    return (...args) => {
        let key = args
        if (value[key]) {
            console.log('returning from cache: ', value[key])
            return value[key]
        }

        let result = fn(args)
        value[key] = result
        return result
    }
}

const factorial = (number) => {
    if (number === 0 || number === 1)
        return 1
    
    return n * factorial(n-1)
}

const memoizedFunction = memoize(factorial)
console.log(memoizedFunction(5))
console.log(memoizedFunction(5))