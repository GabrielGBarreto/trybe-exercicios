let a = 10
let b = 20
let c = 30

// 1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. 

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a ** 2)

// 2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

// if (a > b) {
//     console.log('Valor ' + a + ' é o maior número')
// } else {
//     console.log('Valor ' + b + ' é o maior número')
// }

// 3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

// if (a > b && a > c) {
//     console.log('Valor ' + a + ' é o maior número')
// }
// else if (b > a && b > c) {
//     console.log('Valor ' + b + ' é o maior número')
// }
// else if (c > a && c > b) {
//     console.log('Valor ' + c + ' é o maior número')
// }

// 4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

// if (a > 0) {
//     console.log('positive')
// }
// else if (a < 0) {
//     console.log('negative')
// }
// else {
//     console.log('zero')
// }

// 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

let angulo1 = 30
let angulo2 = 60
let angulo3 = 90

let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0

//     if (angulosPositivos) {
//      if (angulo1 + angulo2 + angulo3 === 180) {
//          console.log(true)
//         } else {
//         console.log(false)
//         }
//     } else {
//         console.log('Erro: ângulo inválido')
//     }

// 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

let chessPiece = 'bispo';

// switch (chessPiece.toLowerCase()) {
//   case 'rei':
//     console.log('Rei-> Uma casa apenas para qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('Bispo-> Diagonal.');
//     break;
//   case 'rainha':
//     console.log('Rainha-> Diagonal, horizontal e vertical.');
//     break;
//   case 'cavalo':
//     console.log('Cavalo -> "L" pode pular sobre as peças.');
//     break;
//   case 'torre':
//     console.log('Torre -> Horizontal e vertical.');
//     break;
//   case 'peão':
//     console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//     break;
//   default:
//     console.log('Erro, peça inválida!');
// };

// 8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

let valor4 = 10
let valor5 = 20
let valor6 = 30

// if (valor4 % 2 === 0 || valor5 % 2 === 0 || valor6 % 2 === 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// 9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

// if (valor4 % 2 !== 0 || valor5 % 2 !== 0 || valor6 % 2 !== 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// 10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.

// let custo = 0.2
// let venda = 1

// if (custo >= 0 && venda >= 0) {
//     let lucro = venda - custo;
//     let lucroTotal = lucro * 1000;
//     console.log(lucroTotal);
// } else {
//     console.log("Error, os valores não podem ser negativos!");
// }

// 11 - Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
// A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)

// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)

// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto

// Exemplo: Uma pessoa que possui o salário bruto de R$ 3.000,00 terá o primeiro desconto referente à contribuição do INSS. O cálculo deve ser o demonstrado a seguir.
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00
// Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:
// R$ 2.670,00 - salário com INSS já deduzido.
// 7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25.
// R$ 142,80 - parcela a ser deduzida do imposto de renda.
// Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.
// Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.

let salarioBruto = 3500

if (salarioBruto >= 0) {
    let descInss = 0.89 * 3500
    let descIr = 0.85 * descInss
    let salarioLiquido = descIr + 354.80
    console.log(salarioLiquido)
}
