
// TOPIC: CURRYING
/*
What is Currying: Currying is the technique of translating the evaluation of a function 
                  that takes multiple arguments into evaluating a sequence of functions,
                  each with a single argument.
Benefits of Currying:
    1) With this we can create higher order functions
    2) Reduces the chance of error by dividing a big piece of code into smaller components
    3) Makes code more readable and maintainable
    4) Reduces code repeatition
*/


// Problem statement: Return a function which maintains the total sum.
// Solution: We'll use the concept of closures and higher order function

const curry = () => {
    let totalSum = 0;

    return (value = 0) => {
        console.log(totalSum += value)
    }
}

let sum = curry()
sum(1)
sum(2)
sum(3)