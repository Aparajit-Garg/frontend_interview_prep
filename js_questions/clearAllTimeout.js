
// Approach 1: 

window.timeoutIds = [];

// store the original method
const originalTimeoutFn = window.setTimeout;

//over-writing the original method
window.setTimeout = function(fn, delay) { 
  const id = originalTimeoutFn(fn, delay);
  timeoutIds.push(id);
  
  //return the id so that it can be originally cleared
  return id;
}

window.clearAllTimeout = function(){
  //clear all timeouts
  while(timeoutIds.length){
    clearTimeout(timeoutIds.pop());
  }
}

setTimeout(() => {console.log("hello")}, 2000);
setTimeout(() => {console.log("hello1")}, 3000);
setTimeout(() => {console.log("hello2")}, 4000);
setTimeout(() => {console.log("hello3")}, 5000);

clearAllTimeout();


// Approach 2: Here we are not interfering with the window objects
const MY_TIMERS = {
    timeoutIds : [],//global timeout id arrays
    
    //create a MY_TIMERS's timeout
    setTimeout : function(fn,delay){
        let id = setTimeout(fn,delay);
        this.timeoutIds.push(id);
        return id;
    },

    //MY_TIMERS's clearAllTimeout
    clearAllTimeout : function(){
        while(this.timeoutIds.length){
          clearTimeout(this.timeoutIds.pop());
        }
    }
};

const id = MY_TIMERS.setTimeout(() => {console.log("hello")}, 1000);
console.log(id);
MY_TIMERS.clearAllTimeout();