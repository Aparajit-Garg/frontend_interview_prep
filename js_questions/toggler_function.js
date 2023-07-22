// Problem statement: given a function, code it in a way that whenever it is called
// it returns the next index or the value in the next index from the provided array

// Solution: We will be using the concept of closures here to maintain the last index which was returned
// and return the next index whenever the function is called

const nextIndex = (...args) => {
    let index = 0

    return function() {
        if (args.length === 0)
            console.log('nothing found')

        else if (index >= args.length) {
            index = 0;
            console.log(args[index++]);
        }
        else console.log(args[index++]);
    }
}



const value = nextIndex('1', '2', '3')
value()
value()
value()
value()
value()