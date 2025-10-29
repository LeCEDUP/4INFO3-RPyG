import readline from 'readline-sync';
import { Heroi } from './personagens/heroi.js';
import { magia } from './itens/item.js';
import Arma from './itens/arma.js';

function criarInimigo(classe) {
    if (classe === 1) return { nome: 'Goblin', vida: 8, ataque: 6, defesa: 2 };
    if (classe === 2) return { nome: 'Mago Errante', vida: 15, ataque: 8, defesa: 3 };
    if (classe === 3) return { nome: 'Orc Selvagem', vida: 12, ataque: 8, defesa: 2 };
    return { nome: 'Ladrão', vida: 6, ataque: 9, defesa: 1 };
}

function danoBase(atk, def) {
    return Math.max(1, atk - def);
}

function lutar(jogador, inimigo) {
    console.log(`\nVocê encontra um ${inimigo.nome}! Início da luta...\n`);
    while (jogador.vida > 0 && inimigo.vida > 0) {
        console.log(`${jogador.nome}: ${jogador.vida} HP  |  ${inimigo.nome}: ${inimigo.vida} HP`);
        console.log('1) Atacar    2) Fugir');
        const acao = (readline.question('Escolha: ') || '').trim();

        if (acao === '1') {
            const danoJog = danoBase(jogador.ataque, inimigo.defesa);
            inimigo.vida -= danoJog;
            console.log(`Você causa ${danoJog} de dano ao ${inimigo.nome}.`);
        } else if (acao === '2') {
            if (Math.random() < 0.5) {
                console.log('Fuga bem-sucedida!');
                return 'fugiu';
            } else {
                console.log('Fuga falhou! O inimigo aproveita e ataca.');
            }
        } else {
            console.log('Opção inválida — você hesita e perde o turno.');
        }

        if (inimigo.vida <= 0) break;

        const danoInim = danoBase(inimigo.ataque, jogador.defesa);
        jogador.vida -= danoInim;
        console.log(`${inimigo.nome} causa ${danoInim} de dano em você.\n`);
    }

    if (jogador.vida <= 0) {
        console.log('\nVocê foi derrotado.');
        return 'derrota';
    } else {
        console.log(`\nVocê venceu o ${inimigo.nome}!`);
        return 'vitoria';
    }
}


while (true) {
    console.clear();
    console.log('Bem vindo ao RPyG - Role Playing Game!\n');
    console.log('    Classes   | Atributos iniciais\n');
    console.log(' 1- Valquíria | Ataque: 10 | Vida: 10 | Defesa: 10');
    console.log(' 2- Rei Mago  | Ataque: 13 | Vida: 10 | Defesa: 5');
    console.log(' 3- Bandida   | Ataque: 20 | Vida: 6  | Defesa: 0');
    console.log(' 4- Sair do jogo\n');

    let escolhaDeClasse = readline.questionInt('Faca a escolha do seu cla [1 | 2 | 3 | 4]: ');

    while (!Number.isInteger(escolhaDeClasse) || escolhaDeClasse < 1 || escolhaDeClasse > 4) {
        console.log('\nNúmero inválido — escolha apenas 1, 2, 3 ou 4.');
        escolhaDeClasse = readline.questionInt('Faca a escolha do seu cla [1 | 2 | 3 | 4]: ');
    }

    if (escolhaDeClasse === 4) {
        console.log('\nVocê escolheu sair do jogo. Até a próxima aventureiro!\n');
        break; 
    }
    
    const nome = readline.question('Insira o nome do seu personagem: ');
    let personPrincipal = null;

    if (escolhaDeClasse === 1) {
        personPrincipal = new Heroi(nome, 10, 10, 10);
    } else if (escolhaDeClasse === 2) {
        personPrincipal = new Heroi(nome, 10, 13, 5);
    } else if (escolhaDeClasse === 3) {
        personPrincipal = new Heroi(nome, 6, 20, 0);
    }
    let vidaMaxima = personPrincipal.vida;

    console.clear();
    console.log('Parabéns — seu personagem inicial está pronto!\n');
    console.log(` Nome:   ${personPrincipal.nome}`);
    console.log(` Ataque: ${personPrincipal.ataque}`);
    console.log(` Vida:   ${personPrincipal.vida}`);
    console.log(` Defesa: ${personPrincipal.defesa}\n`);

    const querLutar = (readline.question('Deseja enfrentar um inimigo agora? (s/n): ') || '').trim().toLowerCase().startsWith('s');

  
while (personPrincipal.vida > 0) {
    const querLutar = (readline.question('Deseja enfrentar um inimigo agora? (s/n): ') || '').trim().toLowerCase();
    if (querLutar !== 's') break;

   
    const classeAleatoria = Math.floor(Math.random() * 3) + 1;
    const inimigo = criarInimigo(classeAleatoria);

    console.log(`\n Um ${inimigo.nome} aparece para lutar!\n`);
    const resultado = lutar(personPrincipal, inimigo);

    if (resultado === 'derrota') {
        console.log('\n Seu herói caiu em batalha...');
        break;
    } else if (resultado === 'vitoria') {
      
        const cura = Math.floor(vidaMaxima * 0.2);
        personPrincipal.vida = Math.min(personPrincipal.vida + cura, vidaMaxima);
        console.log(`\n Você recupera ${cura} de vida! Vida atual: ${personPrincipal.vida}\n`);
    }
}
const usarmagia = (readline.question('Deseja usar uma magia de cura antes de encerrar? (s/n): ') || '').trim().toLowerCase();
if (usarmagia === 's') {
    if (personPrincipal.inventario.includes(magia)) {
        personPrincipal.vida += magia.dano;
        console.log(`${personPrincipal.nome} usou ${magia.nome}. Vida atual: ${personPrincipal.vida}`);
    } else {
        console.log(`${personPrincipal.nome} não possui a magia ${magia.nome} no inventário.`);
    }
}
const espada = new Arma('Espada Longa', 'Uma espada afiada.', 10);
 const usararma = (readline.question('Deseja equipar uma arma antes de encerrar? (s/n): ') || '').trim().toLowerCase();
 if (usararma === 's') {
     
        personPrincipal.inventario.push(espada);
        personPrincipal.equiparItem(espada);
    }


    const jogarNovamente = (readline.question('\nDeseja criar outro personagem e jogar novamente? (s/n): ') || '').trim().toLowerCase();
    if (jogarNovamente !== 's') {
        console.log('\nEncerrando o jogo... Obrigado por jogar!\n');
        break;
    }
}

