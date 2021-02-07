// FETCH, ASYNC / AWAIT E EVENTEMITTER

    // Exemplo:
        // fetch('http://localhost:5500/data.json')
        //     .then(responseStream => {
        //         console.log(responseStream)
        //         if (responseStream.status === 200) {
        //             return responseStream.json()
        //         } else {
        //             throw new Error('Request error!')
        //         }
        //         // responseStream.json()
        //     })
        //     .then(data => {
        //         console.log(data)
        //     })
        //     .catch(err => {
        //         console.log('Error: ', err)
        //     })

// ES7 - ASYNC / AWAIT

    const asyncTimer = () => 
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(12345)
            }, 1000)
        })

    const simpleFunc = async () => {
        // MÉTODO ASSÍNCRONO SEQUENCIAL
        // const data = await asyncTimer()
        // console.log(data)
        // const dataJSON = await fetch('/data.json').then(resStream => resStream.json())

        // MÉTODO ASSÍNCRONO PARALELO
        const data = await Promise.all([
            asyncTimer(), fetch('/data.json').then(
                resStream => 
                    resStream.json()
            )
        ])

        return data
    }

    simpleFunc().then(data => {
        // throw new Error("Oh no!")
        console.log(data)
    }).catch(err => {
        console.log(err)
    })