// // // 1. Crie uma função que receba o nome de um aluno e suas três notas, calcule 
// // // a média e informe se ele está aprovado (média maior ou igual a 7) ou 
// // // reprovado. A mensagem deverá ser personalizada com o nome do aluno. 

// //

// // function fnmediaAluno(nome, nota1, nota2, nota3) {
// //     let media = (nota1 + nota2 + nota3) / 3
// //     if (media >= 7) {
// //         console.log("Parabéns " + nome + "! Você foi aprovado com média: " + media)
// //     } else {
// //         console.log("Infelizmente " + nome + ", você foi reprovado com média: " + media)
// //     }  
// // } 
// // fnmediaAluno("João", 8, 7, 9)


// // 2. Crie uma função que receba dois números e exiba a diferença entre eles. 


// function fnDiferenca(num1, num2) {
//     let diferenca = num1 - num2
//     console.log("A diferença entre " + num1 + " e " + num2 + " é: " + diferenca)
// } 

// fnDiferenca(10, 5)

// // // 3. Crie uma função que receba um número e exiba sua tabuada de 
// // // multiplicação, utilizando um laço de repetição, do 1 ao 10. 


// // function fnTabuada(numero) {
// //     console.log("Tabuada do " + numero + ":")
// //     for (let i = 1; i <= 10; i++) {
// //         let resultado = numero * i
// //         console.log(numero + " x " + i + " = " + resultado)
// //     }
// //    fnTabuada(5)
// // }

// // // 4. Crie uma função que receba a idade de uma pessoa e classifique sua faixa 
// // // etária de acordo com as seguintes regras: menor que 12 anos: criança; de 
// // // 12 até 17 anos: adolescente; de 18 até 59 anos: adulto; 60 anos ou mais: 
// // // idoso. Ao final, exiba a classificação correspondente.  

// // function fnfaxetaria(idade){
// //     if (idade < 12) {
// //         console.log("Criança")
// //     }else if (idade >= 12 && idade <= 17) {
// //         console.log("Adolescente")
// // } else if (idade >= 18 && idade <= 59) {
// //         console.log("Adulto")
// //     } else{
// //         console.log("Idoso")
// //     }
// //     fnfaxetaria(18)
// // } 

// // 5. Crie uma função que receba a largura e a altura de um retângulo, calcule sua 
// // área e exiba o resultado. (Para calcular a área de um retângulo, utilize a 
// // fórmula Área = base × altura), O resultado deve ser expresso em unidades de 
// // área, como centímetros quadrados (cm²)

// function fnAreaRetangulo(largura, altura) {
    
//     let area = largura * altura

//     console.log("A área do retângulo é: " + area + " cm²")

// }
// fnAreaRetangulo(5, 10) 


// // 6 Crie uma função que receba um número e realize uma contagem regressiva 
// // até chegar a zero, utilizando um laço de repetição. 

// function fnContagem(numero) {
//     for (let i = numero; i >= 0; i--) {
//         console.log(i)
//     }
// }  
// fnContagem(5)

// // 7. Crie uma função que receba o salário de um funcionário e aplique um 
// // aumento de acordo com as seguintes regras: salários menores que R$ 1.000 
// // recebem 20% de aumento, entre R$ 1.000 e R$ 2.000 recebem 15% e acima 
// // de R$ 2.000 recebem 10%. Ao final, exiba o novo salário.  

// function fnSalario(salario){
//     if (salario < 1000) {
//         let novoSalario = salario + 1.2
//         console.log("Novo salário: R$ " + novoSalario.toFixed(2))
//     } else if (salario >= 1000 && salario <= 2000) {
//         let novoSalario = salario * 1.15
//         console.log("Novo salário: R$ " + novoSalario.toFixed(2))
//     } else {
//         let novoSalario = salario * 1.1
//         console.log("Novo salário: R$ " + novoSalario.toFixed(2))
//     }
// }
// fnSalario(1500)

// // .8 Crie uma função que receba um número e verifique se ele é par ou ímpar. Ao 
// // f
// // inal, exiba uma mensagem informando o resultado.  

// function fnParImpar(numero) {
//     if (numero % 2 === 0 )  {
//         console.log("O número " + numero + " é par.")
//     }   
//     else {
//         console.log("O número " + numero + " é ímpar.")
//     }
// }
// fnParImpar(7) 

// // 9. Crie uma função que receba uma temperatura em Celsius e converta para 
// // Fahrenheit. A função também deverá receber uma informação opcional para 
// // definir se deseja realizar a conversão inversa, de Fahrenheit para Celsius. 
// // Caso essa informação não seja fornecida, deverá realizar a conversão 
// // padrão de Celsius para Fahrenheit. 

// function fnTemperatura(celsius, inverso = false) {
//     if (inverso) {
//         let fahrenheit = (celsius - 32) * 5 / 9
//         console.log(celsius + "°F é igual a " + fahrenheit.toFixed(2) + "°C")
//     } else {
//         let fahrenheit = (celsius * 9 / 5) + 32
//         console.log(celsius + "°C é igual a " + fahrenheit.toFixed(2) + "°F")
//     }
// }
// fnTemperatura(25) 
// fnTemperatura(77, true) 

// // 10. Crie uma função que receba três números representando os lados de 
// // um triângulo e verifique se ele é equilátero, isósceles ou escaleno.

// function fnTipoTriangulo(lado1, lado2, lado3) {
//     if (lado1 === lado2 && lado2 === lado3) {
//         console.log("O triângulo é equilátero.")
//     } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
//         console.log("O triângulo é isósceles.")
//     } else {
//         console.log("O triângulo é escaleno.")
//     }
// }
// fnTipoTriangulo(3, 3, 3) 
// fnTipoTriangulo(3, 4, 3) 
// fnTipoTriangulo(3, 4, 5) 


// // 11. Crie uma função que receba um número inteiro positivo e calcule a 
// // soma  de todos os números de 1 até o número informado, utilizando um laço 
// // de repetição. Exemplo: se o número informado for 5, deverá calcular 1 + 2 + 
// // 3 + 4 + 5 e exibir 15.

// function fnSomaNumeros(numero) {
//     let soma = 0  
//     for (let i = 1; i <= numero; i++) {
//         soma += i
//     } 
//     console.log("A soma dos números de 1 até " + numero + " é: " + soma)
// }
// fnSomaNumeros(5)  

// // 12. Crie uma função que receba o valor de um produto e o percentual de 
// // desconto. O percentual de desconto deverá ser opcional, considerando 10% 
// // caso não seja informado. Ao final, exiba o valor do desconto e o preço final 
// // do produto.

// function fnDesconto(valorProduto, percentualDesconto = 10) {
//     let valorDesconto = (valorProduto * percentualDesconto) / 100
//     let precoFinal = valorProduto - valorDesconto
//     console.log("Valor do desconto: R$ " + valorDesconto.toFixed(2))
//     console.log("Preço final do produto: R$ " + precoFinal.toFixed(2))
// } 
// fnDesconto(100)

// // 13. 
// // Crie uma função que receba a altura, a idade e a informação se a 
// // pessoa possui algum problema cardíaco. Para entrar no brinquedo, a pessoa 
// // precisa ter altura maior ou igual a 1,50 m e idade maior ou igual a 12 anos. 
// // Caso possua algum problema cardíaco, não poderá utilizar o brinquedo, 
// // independentemente das demais condições. 

// function fnVerificaEntrada(altura, idade, problemaCardiaco) {
//     if (problemaCardiaco) {
//         console.log("Acesso negado: pessoa com problema cardíaco.")
//     } else if (altura >= 1.5 && idade >= 12) {
//         console.log("Acesso permitido: altura e idade adequadas.")
//     } else {
//         console.log("Acesso negado: altura ou idade insuficientes.")
//     }   
// }
// fnVerificaEntrada(1.6, 14, false)

// 14. 
// // Crie uma função que receba a distância percorrida por um veículo e a 
// // quantidade de combustível consumida. A função deverá calcular e exibir o 
// // consumo médio em quilômetros por litro. (a soma é Km/Litros)

// function fnConsumoMedio(distancia, combustivel) {   
//     let consumoMedio = distancia / combustivel
//     console.log("O consumo médio do veículo é: " + consumoMedio.toFixed(2) + " km/L")
// }
// fnConsumoMedio(500, 25)

// // 15. 
// // Crie uma função que receba um número e exiba todos os números 
// // pares entre 1 e o número informado, utilizando um laço de repetição.

// function fnNumerosPares(numero) {
//     console.log("Números pares entre 1 e " + numero + ":")
//     for (let i = 2; i <= numero; i += 2) {
//         console.log(i)
//     }
// }
// fnNumerosPares(10)