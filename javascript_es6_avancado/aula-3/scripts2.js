// GENERATORS
    // São funções com pausa que retornam valores através da interface de iteração
    // Pode ser usado para construir a interface de iteração dos objetos iteráveis

    // Exemplo:

        // function* hello() {
        //     // console.log('Hello')
        //     // yield; // pausa a execução da função
        //     // yield 1; // caso queira retornar algum valor
        //     // console.log('From')
        //     // yield; // pausa a execução da função
        //     // yield 2; // caso queira retornar algum valor
        //     // console.log('Function')

        //     // Recebendo valores de fora
        //     console.log('Hello')
        //     yield 1
        //     console.log('From')
        //     const value = yield 2
        //     console.log(value)
        // }

        // const it = hello()

        // console.log(it.next())
        // console.log(it.next())
        // console.log(it.next('Outside'))
    // Exemplo 2:

        // function *naturalNumbers() {
        //     let number = 0
        //     while (true) {
        //         yield number
        //         number++
        //     }
        // }

        // const it = naturalNumbers()
        
        // console.log(it.next())
        // console.log(it.next())
        // console.log(it.next())
    
    // Exemplo 3:

        const obj = {
            values: [1, 2, 3, 4],
            *[Symbol.iterator]() {
                for (var i = 0; i < this.values.length; i++) {
                    yield this.values[i]
                }
            }
        }

        for (let value of obj) {
            console.log(value)
        }