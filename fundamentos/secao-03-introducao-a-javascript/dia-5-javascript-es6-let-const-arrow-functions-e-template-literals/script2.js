// 1 – Crie uma função que ligue e desligue o motor de um carro

const ligaDesliga = (motor) => {
    if (motor === 'Ligado') {
        motor = 'Desligado';
    } else {
        motor = 'Ligado';
    }
    console.log(`O motor está ${motor}`)
    return motor;
} 

// 2 – Crie uma função que calcule a área de um círculo

const areaCirculo = (raio) => (3.1415 * raio**2);
console.log(areaCirculo(2));

// 3 – Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase

const contaMaiorPalavra = (frase) => {
    const fraseDividida = frase.split(' ');
    let maiorPalavra = '';
    for (palavra of fraseDividida) {
        if (palavra.trim().length > maiorPalavra) {
            maiorPalavra = palavra.trim();
        }
    }  
    console.log(maiorPalavra);
}
contaMaiorPalavra('Frase teste para exercício de funções');
