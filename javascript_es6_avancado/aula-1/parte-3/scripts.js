// ENHANCED OBJECT LITERALS - HERANÇA DE OBJETOS LITERAIS


// Maneira clássica de declarar objetos literais
var obj = {
    prop1: "Digital Innovation One" // propriedades e métodos
}

// Método 2
var prop1 = "Digital Innovation One"

var obj2 = {
    prop1: prop1 // definindo propriedade através da referência a uma variável
}

// console.log(obj2)

// Com o advento do ES6

function method1() {
    console.log("method called")
}

var obj3 = {
    prop1, // podemos omitir o lado direito, caso a propriedade e a variável que a definiria tenham o mesmo nome
    method1, // o mesmo se aplica aos métodos
    
    // OUTRAS FORMAS DE CRIAR MÉTODOS
    // sum: function sum(a, b) {
    //     return a + b
    // }

    // sum: function(a, b) {
    //     return a + b
    // }

    sum(a, b) {
        return a + b
    }
}

// console.log(obj3)
// obj3.method1()
// console.log(obj3.sum(1, 5))


// OUTRO CASO COMUM ANTES DO ES6

var propName = "test" // nome da propriedade

var obj4 = {}
      // test
obj4[propName] = "prop value"
obj4[propName + "concat"] = "prop value"

// console.log(obj4)

// APÓS O ES6

var propName = "test" // nome da propriedade

var obj5 = {
    [propName]: "prop value",
    [propName + "concat"]: "prop value"
}

console.log(obj5)