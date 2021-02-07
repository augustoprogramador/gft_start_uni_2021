// // INTRODUÇÃO A GENERATORS

//     // SYMBOLS
//         // São uma maneira de gerar um identificador!
//         // Pode ser utilizado para gerar propriedades privadas
//         // Well Known Symbols

//         const uniqueId = Symbol('Hello')

//         // const obj = {
//         //     [uniqueId]: 'Hello'
//         // }

//         // console.log(obj)

//         // EXEMPLO DE MÉTODOS DO SYMBOL:
//             // ADICIONAM PROPRIEDADES AO OBJETO
//             Symbol.iterator // interface para iterações
//             Symbol.split
//             Symbol.toStringTag

//             const arr = [1, 2, 3, 4]
//             const str = "Digital Innovation One"

//             // ANTES DO ES6
//                 const it = arr[Symbol.iterator]()

//                 while (true) {
//                     let { value, done } = it.next()
//                     console.log(value)
//                     if (done) {
//                         break;
//                     }
//                 }

//             // DEPOIS DO ES6
//                 for (let value of str) {
//                     console.log(value)
//                 }
        
        // OBJETO
            
            const obj = {
                values: [1, 2, 3, 4],
                [Symbol.iterator]() {
                    let i = 0

                    return {
                        next: () => {
                            i++
                            return {
                                value: this.values[i - 1],
                                done: i > this.values.length
                            }
                        }
                    }
                }
            }

            const it = obj[Symbol.iterator]()

            for (let value of obj) {
                console.log(value)
            }

            const arr2 = [...obj]

            console.log(arr2)