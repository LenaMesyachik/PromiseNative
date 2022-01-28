const doAfter = (seconds) => {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randValue = Math.random()
            resolve(randValue)
        }, seconds*1000)
    })
    return myPromise
}



