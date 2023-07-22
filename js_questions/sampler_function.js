// Problem statement: Create a function where another function will be passed as an argument and
// a number "n" will be passed with it. The goal is to call the passed in function when the parent function
// is called "n" times

// Solution: We will be using the concept of closure where we will be maintaining the count of how
// many times the function has been called and when it matches the passed in number, we will call the
// required function

let parentFunction = (fn, sample) => {
    count = 0;

    return function() {
        count++;
        console.log('count: ', count)
        
        if (count === sample)
            fn();
    }
}

let message = () => {
    console.log('Message function is being called');
}

const value = parentFunction(message, 3)

value()
value()
value()
value()