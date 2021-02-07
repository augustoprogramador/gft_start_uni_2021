// PARTE 2: DESTRUCTURING

// COM ARRAYS
    // SEM O DESTRUCTURING
        // var arr = ['Apple', 'Banana', 'Orange', ['Tomato']]
        var arr = [{ name: 'Apple', type: 'fruit'}]

        var apple = arr[0]
        var banana = arr[1]
        // var orange = arr[2]
        // var tomato = arr[3][0]

    // COM O DESTRUCTURING

        var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']]

        // console.log(tomato, tomato2)

// DESTRUCTURING COM OBJETOS

    var obj = {
        name: "Augusto",
        prop: {
            age: 29,
            favoriteColors: ['blue', 'balck']
        }
    }

    var { name: name2 } = obj // ou { obj }
    var { prop: { age, favoriteColors: [color1, color2] } } = obj
    var [{ name }] = arr
    var [{ type }] = arr
    name2 = "Carlos" // não precisamos nos preocupar com o apontamento
    console.log(obj)
    console.log(age)
    console.log(color1)
    console.log(name)
    console.log(type)

    // SEM DESTRUCTURING
        var age = obj.prop.age
        var fruit1 = arr[0].name

// DESTRUCTURING COM FUNÇÕES

    // ARRAYS
        // COM DESTRUCTURING
        function sumArr([a, b] = [0, 0]) {
            return a + b
        }

        // SEM DESTRUCTURING
        function sumArr2(arr) {
            return arr[0] + arr[1]
        }

    console.log(sumArr())
    console.log(sumArr2([5, 3]))

    // OBJETOS
        // COM DESTRUCTURING
        function sumObj({ a, b }) {
            return a + b
        }
        console.log(sumObj({ a: 5, b: 4}))