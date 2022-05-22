// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido
// do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com
// seus respectivos tempos pré-definidos.
// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão);

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.
//   Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

/*
qual a opcao? 
retona opcao

essa opcao retona quantos segundos?
retorna segundos

quantas vezes a opcao foi acionada 
retorna segundos * vezes


*/
let padraoPipoca = 10;
let padraoMacarrao = 8;
let padraoCarne = 15;
let padraoFeijao = 12;
let padraoBrigadeiro = 8;
let tempoTotal = 0;

function tempoTotalFunction(opcao, numeroDeVezes) {
    let segundos;
    if (opcao == 1) {
        console.log("Pipoca🍿");
        segundos = 10;
    } else if (opcao == 2) {
        console.log(`
        ---Você escolheu Macarrão🍲---
        `);
        segundos = 8;
        return segundos;
    } else if (opcao == 3) {
        console.log(`
        ---Carne🍖---
        `);
        segundos = 15;
    } else if (opcao == 4) {
        console.log(`
        ---Feijão---
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

function selecionaOpcao({ opcao, numeroDeVezes }) {
    tempoTotal = tempoTotalFunction(opcao, numeroDeVezes);
    if (
        tempoTotal == padraoPipoca ||
        tempoTotal == padraoMacarrao ||
        tempoTotal == padraoFeijao ||
        tempoTotal == padraoCarne ||
        tempoTotal == padraoBrigadeiro
    ) {
        console.log("No ponto!");
    }
    else if (
        tempoTotal < padraoPipoca ||
        tempoTotal < padraoMacarrao ||
        tempoTotal < padraoFeijao ||
        tempoTotal < padraoCarne ||
        tempoTotal < padraoBrigadeiro
    ) {
        console.log("Prato cru.");
        console.log("Tempo insuficiente...");
    } else if (
        tempoTotal >= padraoPipoca * 3 ||
        tempoTotal >= padraoMacarrao * 3 ||
        tempoTotal >= padraoFeijao * 3 ||
        tempoTotal >= padraoCarne * 3 ||
        tempoTotal >= padraoBrigadeiro * 3
    ) {
        console.log("💣Kabum💣");
        console.log("Tempo demais...");
    }
    else {
    console.log("O prato queimou!🔥");
        console.log("Tempo demais...");
    } 
    console.log("Prato pronto, bom apetite!!!");
    tempoTotal = 0;
    return tempoTotal
}

// console.log(`BEM VINDO AO MICRONDAS TURBINADO
// Por favor seleciona uma opcoes de preparo abaixo:

// -------------------------------//--------------------------
// Clique 1 para Pipoca:
// Clique 2 para Macarrão:
// Clique 3 para Carne;
// Clique 4 para Feijão;
// Clique 5 para Brigadeiro;
// `)

selecionaOpcao({ opcao: 1, numeroDeVezes: 0.4 });
