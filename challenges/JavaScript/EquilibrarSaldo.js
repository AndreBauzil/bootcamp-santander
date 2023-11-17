//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
const prompt = require('prompt-sync')();

const saldoAtual = parseFloat(prompt("Digite o saldo atual: "));
const valorDeposito = parseFloat(prompt("Digite o valor de depósito: "));
const valorRetirada = parseFloat(prompt("Digite o valor de retirada: "));

//TODO: Calcular o saldo atualizado de acordo com a descrição deste desafio.
const equilibrarSaldo = (saldoAtual, valorDeposito, valorRetirada) => "Saldo atualizado na conta: "+(saldoAtual + valorDeposito - valorRetirada)+".0"

//TODO: Imprimir o a saída de conforme a tabela de exemplos (uma casa decimal).
console.log(equilibrarSaldo(saldoAtual, valorDeposito, valorRetirada))