// Problem statement: Using the concept of currying handle the function calling multiple times

// Solution: Using the concept of closures we'll handle this problem statement. If we divide the function
// call to multiple individual calls, it doesn't mean we need to do return function nesting. We can call the
// child function iteratively. We don't need to do add the nested function calls manually.


const sum = (...args) => {
    let storage = [...args];

    const temp = (...args1) => {
        storage.push(...args1)

        if (args1.length === 0) return storage.reduce((a, b) => a+b, 0)
        
        else return temp;
    }
    return temp;
}


const value = sum(10)(20)(30)(40)(50)
console.log("sum: ", value())