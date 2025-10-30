// Desenvolva aqui o menu para interagir com o usuário em JS
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { Heroi } from './personagens/heroi.js';
import { Monstro } from './personagens/monstro.js';
import { Arma } from './itens/arma.js';
import { Armadura } from './itens/armadura.js';
import { Item } from './itens/item.js';

const rl = readline.createInterface({ input, output });

let heroi = null;


const PRANCHA_INICIAL = new Arma("Prancha de Iniciação", "Uma prancha estável, ideal para começar.", 5);
const BERMUDA_FLORIDA = new Armadura("Bermuda Florida", "Leve e estilosa. Armadura padrão.", 3);
const POCAO = new Item("Água de Coco", "Restaura 30 de Vigor.", 30);


function limparTela() {
    console.log('\n'.repeat(50));
}


async function iniciarBatalha() {
    if (!heroi) {
        console.log("Você precisa criar seu Surfista, Escolha a opção 1.");
        return;
    }


    const monstro = Monstro.criarMonstroAleatorio(heroi.nivel);
    
    console.log(`\n🌊🌊🌊 A onda está quebrando! 🌊🌊🌊`);
    console.log(`Seu desafio: ${heroi.nome} (Vigor: ${heroi.vida}) vs ${monstro.nome} (Vigor: ${monstro.vida})`);

    while (heroi.estaVivo() && monstro.estaVivo()) {
        console.log(`\n--- Manobra de ${heroi.nome} ---`);
        heroi.atacar(monstro);
        
        if (!monstro.estaVivo()) {
            console.log(`\n🎉 ${monstro.nome} foi derrotado! Você dominou essa onda! 🎉`);
            heroi.ganharExperiencia(50 * heroi.nivel);
            break;
        }

        console.log(`\n--- Ataque de ${monstro.nome} ---`);
        monstro.atacar(heroi);
        
        if (!heroi.estaVivo()) {
            console.log(`\n💀 ${heroi.nome} foi nocauteado pela correnteza, Não vai mais surfar seu bot. 💀`);
            break;
        }
    }
}

async function exibirMenu() {
    limparTela();
    console.log("===================================");
    console.log("       🏄‍♂️ Bem-vindo ao RPG DE SURF 🏄‍♂️        ");
    console.log("===================================");
    if (heroi) {
        console.log(`Surfista Atual: ${heroi.nome}`);
        console.log(`Nível: ${heroi.nivel} | Vigor: ${heroi.vida} | Habilidade de Surf: ${heroi.ataque} | Resistência à Correnteza: ${heroi.defesa}`);
    } else {
        console.log("Surfista: Não Criado");
    }
    console.log("-----------------------------------");
    console.log("1. Criar/Renomear Surfista");
    console.log("2. Pegar a Próxima Onda (Iniciar Batalha)");
    console.log("3. Sair da Praia");
    console.log("-----------------------------------");

    const escolha = await rl.question('Escolha sua manobra (opção): ');
    
    switch (escolha.trim()) {
        case '1':
            await criarHeroi();
            break;
        case '2':
            await iniciarBatalha();
            await rl.question('\nPressione Enter para voltar ao menu...');
            break;
        case '3':
            rl.close();
            console.log("Obrigado por surfar, vlw ae 🏄‍♂️🌊");
            return;
        default:
            console.log("Manobra inválida. Tente dnv.");
            await rl.question('\nPressione Enter para voltar ao menu...'); 
    }
    

    await exibirMenu();
}


async function criarHeroi() {
    const nome = await rl.question('Qual o nome do seu Surfista Lendário?: ');
    

    heroi = new Heroi(nome, 120, 12, 6);
    heroi.inventario.push(PRANCHA_INICIAL, BERMUDA_FLORIDA, POCAO);
    heroi.equiparItem(PRANCHA_INICIAL);
    heroi.equiparItem(BERMUDA_FLORIDA);

    console.log(`\nO Surfista ${heroi.nome} está pronto para o mar!`);
    console.log(`Prancha: ${PRANCHA_INICIAL.nome} | Roupa: ${BERMUDA_FLORIDA.nome}`);
    await rl.question('\nPressione Enter para voltar ao menu...'); 
}

exibirMenu();
