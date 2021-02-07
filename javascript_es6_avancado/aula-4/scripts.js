// CALLBACKS E PROMISES
    // 

    // Exemplo 1:
        // CALLBACKS
        // function doSomething(callback) {
        //     setTimeout(function() {
        //         // did something
        //         callback('First data')
        //     }, 1000)
        // }
        
        // function doOtherThing(callback) {
        //     setTimeout(function() {
        //         // did other thing
        //         callback('Second data')
        //     }, 1000)
        // }

        // function doAll() {
        //     try {
        //         doSomething(function(data) {
        //             var processedData = data.split('')
                    
        //             try {
        //                 doOtherThing(function(data2) {
        //                     var processedData2 = data2.split('')
        
        //                     try {
        //                         setTimeout(function() {
        //                             console.log(processedData, processedData2)
        //                         }, 1000)
        //                     } catch(err) {
        //                         // handle error
        //                     }
        //                 })
        //             } catch(err) {
        //                 // handle error
        //             }
        //         })
        //     } catch(err) {
        //         // handle error
        //     }
        // }

        // doAll()

        // PROMISES
        // const doSomethingPromise = new Promise((resolved, reject) => {
        // gera a Promise através de uma função
        const doSomethingPromise = () => new Promise((resolved, reject) => {
            // throw new Error('Something went wrong')
            setTimeout(function() {
                // did something
                resolved('First data')
            // }, 1000)
            }, 1500)
        })

        // const doOtherThingPromise = new Promise((resolved, reject) => {
        // gera a Promise através de uma função
        const doOtherThingPromise = () => new Promise((resolved, reject) => {
            // throw new Error('Something went wrong')
            setTimeout(function() {
                // did other thing
                resolved('Second data')
            }, 1000)
        })

        // console.log(doSomethingPromise) // errado
        // doSomethingPromise
        //     .then(data => console.log(data))
        //     .catch(error => console.log(error))

        // Os 3 status de uma Promise
            // Pending - quando está pendente, em execução
            // Fulfilled - quando terminou de executar
            // Rejected - quando ocorre algum erro na execução
        
        // INVOCANDO UMA NOVA PROMISE DENTRO DA PRIMEIRA - PROMISES ENCADEADAS

            // doSomethingPromise()
            // .then(data => { 
            //     console.log(data)
            //     return doOtherThingPromise()
            // })
            // .then(data2 => console.log(data2))
            // .catch(error => console.log('Ops!', error))
            
            // PROMISES PARALELAS:
                // Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
                //     console.log(data[0].split(''))
                //     console.log(data[1].split(''))
                // }).catch(err => {
                //     console.log(err)
                // })

            // PROMISES SEQUENCIAIS:
                // doSomethingPromise()
                // .then(data => { 
                //     console.log(data.split(''))
                //     return doOtherThingPromise()
                // })
                // .then(data2 => console.log(data2.split('')))
                // .catch(error => console.log('Ops!', error))

            // PRIORIZANDO A ORDEM DE TÉRMINO DE EXECUÇÃO
                Promise.race([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
                    console.log(data)
                }).catch(err => {
                    console.log(err)
                })
