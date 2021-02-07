// AULA 5

function botao() {
    document.getElementById("thanks").innerHTML = "Obrigado por clicar"
}

function redirecionar() {
    window.open("https://github.com/augustoprogramador")
    window.location.href = "https://github.com/augustoprogramador"
}

function trocar(x) {
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    x.innerHTML = "Obrigado por passar o mouse"
    // alert("Trocar texto")
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Mova o mouse sobre mim"
}

function load() {
    alert("Página carregada.")
}

function change(elemento) {
    console.log(elemento.value)
}


// AULA 4 FUNÇÕES

// function soma(n1, n2) {
//     return n1 + n2
// }

// function validaIdade(idade) {
//     var validar = true
//     if (idade >= 18) {
//         return validar = true
//     } else {
//         return validar = false
//     }
// }

// var idade = prompt("Qual sua idade?")
// console.log(validaIdade(idade))

// AULA 3

// var d = new Date()

// console.log(d.getUTCDate())
// console.log(d.getMonth()+1)
// console.log(d.getUTCFullYear())







// var count = 0

// do {
//     alert(count)
//     count++
// } while (count < 5)

// for (count = 0; count < 5; count++) {
//     alert(count)
// }

// while (count < 5) {
//     console.log(count)
//     // count = count + 1
//     // alert(count)
//     count++
// }

// var idade = prompt("Qual sua idade?")
// // var idade = 18
// if (idade >= 18) {
//     alert("Maior de idade")
// } else {
//     alert("Menor de idade")
// }







// AULA 2

// var frutas = [
//     {nome: "maçã", cor: "vermelha"},
//     {nome: "uva", cor: "roxa"}
// ]

// console.log(frutas)
// alert(frutas[1].nome)



// var fruta = {nome: "maçã", cor: "vermelha"}
// console.log(fruta.nome)
// alert(fruta.cor)



// var lista = ["maçã", "pêra", "laranja"]
// lista.push("uva")
// // lista.pop()
// // console.log(lista)
// console.log(lista.length)
// // console.log(lista.reverse())
// console.log(lista.toString())
// // console.log(lista.toString()[0])
// console.log(lista.join(" - ")) // altera o separador dos elementos de um vetor

// console.log(lista[1])
// alert(lista[1])

















// AULA 1

// var nome = "Augusto Camargo"
// // var idade = "29"
// var idade = 29
// var idade2 = 10
// var frase = "Japão é o melhor time do mundo."

// // alert("Bem-vindo!" + nome)
// // alert(nome + " tem " + idade + " anos.")
// // alert(idade + idade2)

// console.log(nome)
// console.log(idade + idade2)
// console.log(frase.replace("Japão", "Brasil"))
// console.log(frase.toUpperCase("Japão", "Brasil"))
// console.log(frase.toLowerCase("Japão", "Brasil"))
// alert(frase.replace("Japão", "Brasil"))