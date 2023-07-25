
// Problem Statement: This method involves method chaining and can be solved in various ways. I have
// provided 3 ways on how to compute: computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value()

// Solution: 3 approaches:
// 1) Closure
// 2) using an object
// 3) using a constructor function

/************************************** Approach 1 **********************************/

let computeAmount = () => {
    let totalSum = 0
    let combined = {
        lacs: function a (...args) {
            totalSum += (args*100000)
            // console.log(totalSum)
            return combined
        },
        crore: function b (...args) {
            totalSum += (args*10000000)
            return combined
        },
        thousand: function c (...args) {
            totalSum += (args*1000)
            return combined
        }
    }

    combined.valueOf = function () {
        console.log('Approach 1: ', totalSum)
    }

    combined.value = combined.valueOf
    return combined
}


computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value()

/******************************************* Approach 2 *************************************/

const computeAmount1 = () => {
    let functionObject = {
        totalSum: 0,
        lacs: function(n) {
            this.totalSum += n * Math.pow(10, 5)
            return this;
        },
        crore: function(n) {
            this.totalSum += n * Math.pow(10, 7)
            return this;
        },
        thousand: function(n) {
            this.totalSum += n * Math.pow(10, 4)
            return this
        },
        value: function() {
            console.log('Approach 2: ', this.totalSum)
        }
    }
    return functionObject
}

computeAmount1().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value()


/**************************************** APPROACH 3 ************************************** */

function computeAmount2 () {
    this.totalSum = 0
    this.lacs = (n) => {
        this.totalSum += n * Math.pow(10, 5)
        return this
    }
    this.crore = (n) => {
        this.totalSum += n * Math.pow(10, 7)
        return this
    }
    this.thousand = (n) => {
        this.totalSum += n * Math.pow(10, 4)
        return this
    }
    this.value = () => {
        console.log("Approach 3: ", this.totalSum)
    }
}

let testing = new computeAmount2()
testing.lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value()