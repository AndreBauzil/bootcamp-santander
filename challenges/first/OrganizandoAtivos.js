//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.const ativos = [];
const prompt = require('prompt-sync')();

// Entrada da quantidade de ativos
const quantidadeAtivos = parseInt(prompt());

//Entrada dos tipos de ativos
const ativos = [ ];
for (let i = 0; i < quantidadeAtivos; i++) {
  const codigoAtivo = prompt();
  ativos.push(codigoAtivo);
}

//TODO: Ordenar os ativos em ordem alfabética.
const ordendos = ativos.map(ativo => ativo).sort().join("\n")

//TODO: Imprimir a lista de ativos ordenada, conforme a tabela de exemplos.
console.log(ordendos)