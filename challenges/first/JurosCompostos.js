//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
const prompt = require('prompt-sync')();

const valorInicial = parseFloat(prompt());
const taxaJuros = parseFloat(prompt());
const periodo = parseInt(prompt());

let valorFinal = valorInicial;

//TODO: Iterar, baseado no período em anos, para calculo do valorFinal com os juros.
const valorInvestimento = (valorInicial, taxaJuros, periodo) => {
    for(let i = 0; i < periodo; i++) {
        valorFinal *= (1+taxaJuros)
    }
    
    return `Valor final do investimento: R$${valorFinal.toFixed(2)}`
}

console.log(valorInvestimento(valorInicial, taxaJuros, periodo))