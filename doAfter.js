const doAfter = (seconds) => {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randValue = Math.random()
            reject(randValue)
        }, seconds*1000)
    })
    return myPromise
}



