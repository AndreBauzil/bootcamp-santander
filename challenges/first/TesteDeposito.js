//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
const prompt = require('prompt-sync')();

const valor = parseFloat(prompt("Digite o valor para depositar: ")).toFixed(2);

const test = (valor) => {
    if (valor > 0) {
        //TODO: Imprimir a mensagem de sucesso, formatando o saldo atual (vide Exemplos).
        return `Deposito realizado com sucesso! \nSaldo atual: R$ ${valor}`
    } else if (valor < 0) {
        //TODO: Imprimir a mensagem de valor inválido.
        return `Valor invalido! Digite um valor maior que zero.`
    } else {
        //TODO: Imprimir a mensagem de encerrar o programa.
        return `Encerrando o programa...`
    }
}

console.log(test(valor))