//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
const prompt = require('prompt-sync')();

// Entrada de dados
let saldoTotal = parseInt(prompt("Digite o saldo da conta: "));
let valorSaque = parseInt(prompt("Digite o valor do saque: "));

//TODO: Criar as condições necessárias para impressão da saída, vide tabela de exemplos.
const saque = (saldoTotal, valorSaque) => {
    const saldo = saldoTotal>=valorSaque ? saldoTotal - valorSaque : saldoTotal

    return `${(saldo!=saldoTotal) ? `Saque realizado com sucesso. Novo saldo: ${saldo}` : `Saldo insuficiente. Saque nao realizado!`}`
}

console.log(saque(saldoTotal, valorSaque))