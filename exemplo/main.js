// objetivo: receber 2 numeros e somar os valores
// para passar + de 1 parametro eu separo eles por virgula.
// E SE eu quiser passar +1 paramentro que valide o "tipo de operação(+, -, *,/)"?
// se o usuario passar o valor de operador, faz a escolha dele, se ele não passar
// por padrão é executado a funçao SOMAR

function fnSoma(numero1, numero2, operador = "somar") {
let resultado = 0

if (operador == "somar") {
resultado = numero1 + numero2
} else if (operador == "subtrair") {
resultado = numero1 - numero2
} else if (operador == "multiplicar") {
resultado = numero1 * numero2
} else if (operador == "dividir") {
resultado = numero1 / numero2
}else {
    console.log("valor do operador invalido, calculo zerada!")
}


console.Log("Ao " + operador + ": " + resultado)
}