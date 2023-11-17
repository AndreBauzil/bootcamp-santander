//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
const prompt = require('prompt-sync')();

const saldoAtual = parseFloat(prompt());
const valorDeposito = parseFloat(prompt());
const valorRetirada = parseFloat(prompt());

//TODO: Calcular o saldo atualizado de acordo com a descrição deste desafio.
const equilibrarSaldo = (saldoAtual, valorDeposito, valorRetirada) => "Saldo atualizado na conta: "+(saldoAtual + valorDeposito - valorRetirada)+".0"

//TODO: Imprimir o a saída de conforme a tabela de exemplos (uma casa decimal).
const chamarFunc = () => console.log(equilibrarSaldo(saldoAtual, valorDeposito, valorRetirada))

module.exports.chamarFunc = chamarFunc;