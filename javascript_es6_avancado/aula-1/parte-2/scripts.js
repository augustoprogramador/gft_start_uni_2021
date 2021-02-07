// DEFAULT FUNCTION ARGUMENTS

// function multiply(a, b) {
// function multiply(a, b = a) { // também é possível, respeitando a ordem dos parâmetros

function multiply(a, b = 1) { // a partir do ES6, isso é possível
    // Definindo um valor padrão, caso o parâmetro não seja informado ou esteja incorreto
    // b = b || 1
    // b = typeof b === "undefined" ? 1 : b
    // if (typeof b === "undefined") {
    //     b = 1
    // }
    return a * b
}

// LAZY EVALUATION

function randomNumber() {
    console.log("Generating a random number...")
    return Math.random() * 10
}

function multiply2(a, b = randomNumber()) {
    return a * b
}

// console.log(multiply(5, 5))
console.log(multiply2(5))
console.log(multiply2(5))