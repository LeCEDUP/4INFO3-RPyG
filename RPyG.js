import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import Item from './itens/item.js';
import Arma from './itens/arma.js';
import Armadura from './itens/armadura.js';
import Heroi from './personagens/heroi.js';
import Monstro from './personagens/monstro.js';

const rl = readline.createInterface({ input, output });
// Estado do jogo
let gameState = {
    playerName: '',
    chapter: 1,
    progress: null
};

// Função para simular salvamento
function saveGame() {
    gameState.progress = {
        chapter: gameState.chapter,
        time: Date.now()
    };
    console.log('\nJogo salvo com sucesso!');
}

// Função para carregar jogo
function loadGame() {
    if (gameState.progress) {
        console.log(`\nCarregando capítulo ${gameState.progress.chapter}...`);
        return true;
    }
    console.log('\nNenhum save encontrado.');
    return false;
}

// Função para escrever log
function writeLog(msg) {
    console.log(`[${new Date().toLocaleTimeString()}] — ${msg}`);
}

async function mainMenu() {
    while (true) {
        console.clear();
        console.log('\n=== Uma Aventura Inesperada ===');
        console.log('1. Novo Jogo');
        console.log('2. Continuar');
        console.log('3. Configurações');
        console.log('4. Créditos');
        console.log('5. Sair');

        const choice = await rl.question('\nEscolha uma opção (1-5): ');

        switch (choice) {
            case '1':
                console.clear();
                gameState.playerName = await rl.question('\nQual o nome do seu Hobbit? ');
                gameState.chapter = 1;
                writeLog(`Novo jogo iniciado: ${gameState.playerName} deixa o Bolsão.`);
                await startGame();
                break;

            case '2':
                if (loadGame()) {
                    await startGame();
                }
                await pressEnterToContinue();
                break;

            case '3':
                console.clear();
                console.log('\n=== Configurações ===');
                console.log('Dificuldade: Normal');
                console.log('Som: Ligado');
                console.log('Música: Ligada');
                writeLog('Configurações abertas.');
                await pressEnterToContinue();
                break;

            case '4':
                console.clear();
                console.log('\n=== Créditos ===');
                console.log('Inspirado em "O Hobbit" de J.R.R. Tolkien');
                console.log('Desenvolvido como projeto educacional');
                writeLog('Mostrando créditos.');
                await pressEnterToContinue();
                break;

            case '5':
                console.clear();
                writeLog('Até a próxima aventura!');
                rl.close();
                return;
        }
    }
}

async function startGame() {
    // Aqui você pode integrar com o sistema de combate existente
    console.clear();
    console.log(`\nBem-vindo à sua aventura, ${gameState.playerName}!`);
    console.log('Capítulo 1: Uma Jornada Inesperada');
    await pressEnterToContinue();
}

async function pressEnterToContinue() {
    await rl.question('\nPressione ENTER para continuar...');
}

await mainMenu();




