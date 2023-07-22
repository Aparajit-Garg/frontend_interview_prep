// Problem statement: Using the concept of currying handle the function calling multiple times

// Solution:

const sum = (...args) => {
    let storage = [...args];

    const temp = (...args1) => {
        storage.push(args1)

        if (args1.length === 0) {
            const reduced = storage.reduce((x, y) => x+y, 0)
            console.log('reduced: ', reduced)
        }
        else
            return temp;
    }
    return temp;
}


const value = sum(10)(20)(30)(40)()
console.log("sum: ", value)