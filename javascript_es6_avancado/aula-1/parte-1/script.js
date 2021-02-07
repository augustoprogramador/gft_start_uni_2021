// Arrow functions
// só podem ser utilizadas como parâmetros de uma função
// ou atribuindo-as a uma variável

// var sum = (a, b) => a + b; // quando temos apenas uma expressão do lado direito, não precisamos de {}. O return está implícito
// Outro exemplo de uma arrow function simplificada é: 
// var sum = a => a

// objeto literal
// var obj = {
//     test: '123'
// }
// Retornando um objeto literal implicitamente
// var createObj = () => ({ test: '123' })


// FUNÇÃO CONSTRUTORA
// function Car() {
//     this.foo = 'bar'
// }

// Retornando objeto com função construtora
// console.log(new Car())

// console.log(sum(1, 3))
// console.log(sum(1))
// console.log(createObj())

// ENTENDENDO O CONTEXTO DE INVOCAÇÃO DE UMA FUNÇÃO
var obj = {
    showContext: function showContext() {
        // console.log(this) // O "this" referencia o próprio objeto
        this.log('Augusto Camargo') // agora, o objeto pode acessar o método log e imprimir a mensagem desejada

        setTimeout(
            function() {
                // console.log(this) // verificando o contexto do "this"
                
                // this.log("After 1000ms")
            }.bind(this), 1000 // "Bind" fixa o contexto do "this"
        )
    },
    log: function log(value) {
        console.log(value)
    }
}

obj.showContext()