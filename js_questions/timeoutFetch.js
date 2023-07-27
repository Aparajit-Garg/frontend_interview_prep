

function fetchWithTimeout(url, duration) {
    return new Promise((resolve, reject) => {
        const controller = new AbortController()
        const signal = controller.signal
        let timerId = null

        fetch(url, { signal })
        .then(resp => resp.json())
        .then((data) => {
            clearTimeout(timerId)
            resolve(data)
        })
        .catch(err => reject(err))

        timerId = setTimeout(() => {
            controller.abort()
        }, duration)

    })
}



fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 1)
.then(resp => console.log('completed'))
.catch(err => console.log("error occurred: ", err))