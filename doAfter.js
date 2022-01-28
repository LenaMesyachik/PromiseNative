const doAfter = (seconds) => {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randValue = Math.random()
            if (randValue>0.5 ) {
                resolve (randValue)
            }else {
                reject(randValue)
            }
        }, seconds*1000)
    })
    return myPromise
}



