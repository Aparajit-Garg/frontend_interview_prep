// axios provides these interceptor methods by default.

// output : {
//   "userId": 1,
//   "id": 2,
//   "title": "quis ut nam facilis et officia qui",
//   "completed": false
// }


// store the original fetch method in a variable
const originalFetch = window.fetch


// create a function to be called before sending in the request
window.requestInterceptor = (args) => {
    args[0] = args[0] + "2";
    console.log('request interceptor')
    return args;
}

// create a function to be called after getting the response
window.responseInterceptor = (response) => {
    console.log('response interceptor')
    return response.json();
}


// update the default program flow of the fetch function
window.fetch = async (...args) => {
    args = window.requestInterceptor(args)

    let response = await originalFetch(args)
    
    const updatedResponse = window.responseInterceptor(response)
    return updatedResponse;
}


fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(json => console.log(json));
