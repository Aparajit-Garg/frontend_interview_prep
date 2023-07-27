

const fetchWithRetry = (url, retryCount) => {
    console.log('entered')
    return new Promise((resolve, reject) => {
        let retryAttempts = 0
        const fetchFunction = () => {
            fetch(url).then((resp) => {
                console.log('.then block')
                resolve(resp)
            }).catch((err) => {
                console.log('err block')
                if (retryAttempts >= retryCount)
                    reject(err)
                else {
                    retryAttempts++
                    fetchFunction()
                }
            })
        }
        fetchFunction()
    })
}



fetchWithRetry("", 5).then((resp) => console.log(resp)).catch(err => console.log(err))