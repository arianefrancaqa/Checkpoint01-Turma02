var readlineSync = require("readline-sync");

let padraoPipoca = 10;
let padraoMacarrao = 8;
let padraoCarne = 15;
let padraoFeijao = 12;
let padraoBrigadeiro = 8;
let tempoTotal = 0;

function tempoTotalFunction(opcao, numeroDeVezes) {
  let segundos;
  if (opcao == 1) {
    console.log(`
        ---Você escolheu Pipoca🍿---
        `);
    segundos = 10;
  } else if (opcao == 2) {
    console.log(`
        ---Você escolheu Macarrão🍲---
        `);
    segundos = 8;
    return segundos;
  } else if (opcao == 3) {
    console.log(`
        ---Você escolheu Carne🍖---
        `);
    segundos = 15;
  } else if (opcao == 4) {
    console.log(`
        ---Você escolheu Feijão🥫---
        `);
    segundos = 12;
  } else if (opcao == 5) {
    console.log(`
        ---Brigadeiro🍫---
        `);
    segundos = 8;
  } else {
    console.log("Prato inexistente");
  }

  return segundos * numeroDeVezes;
}

function descobreTempoPadrao(opcao) {
  let tempoPadrao;
  switch (opcao) {
    case '1':
      tempoPadrao = padraoPipoca;
      break;
    case '2':
      tempoPadrao = padraoMacarrao;
      break;
    case '3':
      tempoPadrao = padraoCarne;
      break;
    case '4':
      tempoPadrao = padraoFeijao;
      break;
    case '5':
      tempoPadrao = padraoBrigadeiro;
      break;
  }
  return tempoPadrao;
}

function selecionaOpcao(opcao, numeroDeVezes) {
  let tempoPadrao = descobreTempoPadrao(opcao);
  tempoTotal = tempoTotalFunction(opcao, numeroDeVezes);
  if (opcao == 0 || opcao > 5) {
    console.log("Operação cancelada, opção inválida");
  } else {
    if (tempoTotal == tempoPadrao) {
      console.log("No ponto!");
      console.log("Prato pronto, bom apetite!!!");
    } else if (tempoTotal < tempoPadrao) {
      console.log("Prato cru.");
      console.log("Tempo insuficiente...");
    } else if (tempoTotal >= tempoPadrao * 3) {
      console.log("💣Kabum💣");
      console.log("Tempo demais...");
    } else {
      console.log("O prato queimou!🔥");
      console.log("Tempo demais...");
    }
  }
  tempoTotal = 0;
  return tempoTotal;
}

let opcaoResposta = readlineSync.question(`

BEM VINDO AO MICRONDAS TURBINADO

Por favor seleciona uma opcoes de preparo abaixo:

-------------------------------//--------------------------
Digite 1 para Pipoca:
Digite 2 para Macarrao:
Digite 3 para Carne;
Digite 4 para Feijao;
Digite 5 para Brigadeiro;

`);

let numeroDeVezesResposta = readlineSync.question(`
Quantas vezes voce deseja executar esta opcao? 
`);

selecionaOpcao(opcaoResposta, numeroDeVezesResposta);
