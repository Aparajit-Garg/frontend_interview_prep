
// inside a function, this keyword refers to global scope but if the function is inside an object
// it refers to the object but if there is a function inside that function it's direct parent element
// is no longer that object and inside a function this keyword always refers to the global scope

const obj = {
    a: 1,
    showTags() {
        console.log(this)           // this is pointing to obj
    },
    function () {
        console.log(this)           // this is pointing to obj
        // console.log(value)
    },
    c: function() {
        console.log(this)           // this is pointing to obj
        return function() {
            console.log(this)       // this is pointing to the global scope
        }
    }
}

obj.showTags()
obj.function()
obj.c()()