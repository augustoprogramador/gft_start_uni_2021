// APLICANDO CONCEITOS REST, SPREAD OPERATOR E DESTRUCTURING

// function sum(a, b) {
    // MÉTODO VERBOSO

    // var value = 0

    // for (var i = 0; i < arguments.length; i++) {
    //     value += arguments[i]
    // }
    // console.log(arguments)
    // return a + b
    // return value
// }

// ... = REST OPERATOR
function sum(...args) {
    
    // console.log(args)      // prototype: Array
    // console.log(arguments) // prototype: Object

    // args além de trazer uma lista como o arguments, traz também os métodos de array para que manipulemos os argumentos

    return args.reduce((acc, value) => acc + value, 0)
}

// COM ARROW FUNCTIONS
const sum2 = (...rest) => { // Coreeção! Usar rest operator
// const sum2 = (a, b, ...rest) => { // Rest Operators pegam os argumentos restantes de uma função
    // caso desejemos separar alguns argumentos

    // console.log(arguments) // Erro! arguments não definido
    // console.log(a, b, rest)

    // VERBOSO E POUCO DESCRITIVO
    // Quando desejavamos passar um array para outra função
    //Era comum usar o método apply das funções
    // return multiply.apply(undefined, rest) // undefined representando o contexto

    // SPREAD OPERATOR
    // Mesma sintaxe, com funcionamento inverso
    // Rest - Transforma argumentos restantes em array
    // Spread - Transforma um array em argumentos separados para outra função
    return multiply(...rest)
}

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

// console.log(sum(5, 5, 3, 7, 8, 1 ))
// console.log(sum2(5, 5, 3, 7, 8, 1 ))

// USOS DO SPREAD OPERATOR
// strings, arrays, objetos literais e objetos iteráveis

// !!! STRINGS !!!
const str = "Digital Innovation One"

// function logArgs(...args) {
function logArgs(a, b, c) {
    // console.log(arguments)
    // console.log(a, b, c)
}

// logArgs(...str) // rest operator

// !!! ARRAYS !!!

    // CONSTRUINDO ARRAYS
        const arr = [1, 2, 3, 4]
        logArgs(...arr) // spread operator, dividindo os elementos do array pelos argumentos

    // UNINDO ARRAYS
        // FORMA ANTIGA
        // const arr2 = arr.concat([5, 6, 7])

        // FORMA ATUAL
        const arr2 = arr.concat([...arr, 5, 6, 7])

        //Exemplo extra
        const arr3 = [...arr2, ...arr, 0, 10, 20]
        // console.log(arr3)

        const arrClone = [...arr]
        // console.log(arrClone)


// !!! OBJETOS LITERAIS !!!

    // Quando utilizado em objetos literais, o Spread Operator apenas pode ser usado para gerar novos Objetos Literais
    //Exemplo:
        // const obj = {
        //     test: 123
        // }

        // const obj2 = {
        //     ...obj,
        //     test2: "hello"
        // }
        // console.log(obj2)
    
    // Não podemos construir um array a partir do Spread de um Objeto Literal
    // Exemplo:
        // const arr = [...obj]
        // console.log(arr)
    
    // PRIORIDADE DAS PROPRIEDADES COM SPREAD
    // Exemplo:
        // const obj = {
        //     test: 123
        // }

        // const obj2 = {
            // Prevalece o Spread
            // test: 456,
            // ...obj
            
            // Prevalece o test
            // ...obj,
        //     test: 456
        // }
        // console.log(obj2)

    // Outro exemplo:
        // const obj = {
        //     test: 123
        // }

        // const obj2 = {
        //     test: 456
        // }
        // const objMerged = {
        //     ...obj,
        //     ...obj2
        // }
        // console.log(objMerged)

    // CLONANDO OBJETOS
        // ALTERA O OBJETO ORIGINAL !!!
            // const obj = {
            //     test: 123
            // }

            // const obj2 = obj

            // obj2.test = 456;
            // console.log(obj)

        // NÃO ALTERA O OBJETO ORIGINAL
            const obj = {
                test: 123,
                subObj: {
                    test: 123
                }
            }

            const obj2 = { ...obj, subObj: {...obj.subObj } }

            obj2.subObj.test = 456;
            console.log(obj)
            console.log(obj2)

// !!! OBJETOS ITERÁVEIS !!!