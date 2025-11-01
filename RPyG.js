import readline from 'readline-sync';
import { Heroi } from './personagens/heroi.js';
import { magia } from './itens/item.js';
import Arma from './itens/arma.js';
import { curaMaior, curaMenor } from './magias.js';
import { espadaLonga, arcoCurto } from './itens/arma.js';

// História introdutória geral (exibida antes do menu principal)
console.clear();
console.log("=== AS CRÔNICAS DE ELDOR — O CHAMADO DA LUZ ===\n");
console.log("Quando as estrelas de Eldor se apagaram, o equilíbrio entre luz e trevas foi quebrado.");
console.log("Reinos outrora prósperos se tornaram ruínas, e criaturas esquecidas despertaram das sombras...");
console.log("Há mil anos, o Reino de Eldor foi selado em um ciclo eterno de guerra.");
console.log("Antigas magias, forjadas por deuses e mortais, agora fluem livres, corrompendo tudo o que tocam.");
console.log("Os vilarejos estão em cinzas, os rios correm vermelhos, e o povo clama por um novo herói.");
console.log("Três lendas ressurgem das cinzas para tentar restaurar o equilíbrio perdido...\n");
readline.question("Pressione ENTER para continuar...");

function criarInimigo(classe) {
    if (classe === 1) return { nome: 'Azog', vida: 8, ataque: 6, defesa: 2 };
    if (classe === 2) return { nome: 'Sauron', vida: 15, ataque: 8, defesa: 3 };
    if (classe === 3) return { nome: 'Smaug', vida: 12, ataque: 8, defesa: 2 };
    return { nome: 'Orc Selvagem', vida: 6, ataque: 9, defesa: 1 };
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
    console.log(' 1- Gandalf | Ataque: 10 | Vida: 10 | Defesa: 10');
    console.log(' 2- Bilbo   | Ataque: 13 | Vida: 10 | Defesa: 5');
    console.log(' 3- Thorin Escudo de carvalho  | Ataque: 20 | Vida: 6  | Defesa: 0');
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

    const nome = readline.question('Insira o seu Username: ');
    let personPrincipal = null;


    console.clear();

    if (escolhaDeClasse === 1) {
        console.log("=== História de Gandalf ===\n");
        console.log("Das brumas cinzentas do norte, surge Gandalf, o sábio errante de Eldor.");
        console.log("Durante séculos, vagou pelos reinos em busca de equilíbrio entre a luz e a treva.");
        console.log("Com sua sabedoria ancestral e domínio do fogo arcano, jurou proteger o mundo das forças do esquecimento.\n");
        personPrincipal = new Heroi(nome, 10, 10, 10);
    }
    else if (escolhaDeClasse === 2) {
        console.log("=== História de Bilbo — O Mago ===\n");
        console.log("Bilbo, outrora um estudioso das runas proibidas, foi consumido pela curiosidade do poder.");
        console.log("Ao tentar manipular o véu do tempo, libertou forças que não compreendia.");
        console.log("Agora, busca redenção nas ruínas de Eldor, enfrentando o caos que ajudou a despertar.\n");
        personPrincipal = new Heroi(nome, 10, 13, 5);
    }
    else if (escolhaDeClasse === 3) {
        console.log("=== História de Thorin Escudo de Carvalho ===\n");
        console.log("Antigo rei das Montanhas Rochosas, Thorin viu seu império ruir sob as chamas da guerra.");
        console.log("Armado apenas com seu escudo partido e sua fúria, ele marcha contra o destino,");
        console.log("disposto a tombar com honra ou renascer como a lenda que Eldor tanto aguarda.\n");
        personPrincipal = new Heroi(nome, 6, 20, 0);
    }

    readline.question("Pressione ENTER para iniciar sua jornada...");

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

    while (personPrincipal.vida > 0) {
        const querLutar = (readline.question('Deseja enfrentar um inimigo agora? (s/n): ') || '').trim().toLowerCase();
        if (querLutar !== 's') break;

        const classeAleatoria = Math.floor(Math.random() * 3) + 1;
        const inimigo = criarInimigo(classeAleatoria);
        console.log(`\nUm ${inimigo.nome} aparece para lutar!\n`);
        const resultado = lutar(personPrincipal, inimigo);

        if (resultado === 'derrota') {
            console.log('\nSeu herói caiu em batalha...');
            break;
        } else if (resultado === 'vitoria') {
            const cura = Math.floor(vidaMaxima * 0.2);
            personPrincipal.vida = Math.min(personPrincipal.vida + cura, vidaMaxima);
            console.log(`\nVocê recupera ${cura} de vida! Vida atual: ${personPrincipal.vida}\n`);
        }

        const resposta = (readline.question('Deseja usar uma magia de cura Maior ou Menor? (s/n): ') || '').trim().toLowerCase();
        if (resposta === 's') {
            const tipoCura = (readline.question('Qual magia deseja usar? (maior/menor): ') || '').trim().toLowerCase();
            if (tipoCura === 'maior') {
                personPrincipal.curar(personPrincipal, curaMaior);
                console.log(`Vida após cura: ${personPrincipal.vida}`);
            } else if (tipoCura === 'menor') {
                personPrincipal.curar(personPrincipal, curaMenor);
                console.log(`Vida após cura: ${personPrincipal.vida}`);
            } else {
                console.log('Opção de cura inválida.');
            }
        }



        const usarArma = (readline.question('Deseja equipar uma arma? (s/n): ') || '').trim().toLowerCase();
        if (usarArma === 's') {
            console.log('Armas disponíveis:');
            console.log('1) Espada Longa');
            console.log('2) Arco Curto');
            const escolhaArma = readline.questionInt('Escolha a arma para equipar (1 ou 2): ');
            if (escolhaArma === 1) {
                personPrincipal.equiparItem(espadaLonga);
            } else if (escolhaArma === 2) {
                personPrincipal.equiparItem(arcoCurto);
            } else {
                console.log('Escolha inválida de arma.');
            }
        }

        console.clear();
        console.log("=== O DESFECHO DO HERÓI ===\n");


        if (escolhaDeClasse === 1) {
            console.log("Com as trevas dissipadas, Gandalf repousa seu cajado no solo de Eldor.");
            console.log("Ele observa o nascer do sol e sabe que o ciclo da luz e da sombra continuará — mas agora, há paz.");
            console.log("Sua jornada não termina aqui; ela apenas muda de forma. O guardião da sabedoria segue seu caminho entre os ventos.\n");
        }
        else if (escolhaDeClasse === 2) {
            console.log("Bilbo retorna ao Condado, com novas histórias e velhas cicatrizes.");
            console.log("Ele escreve sobre suas aventuras, rindo sozinho ao relembrar os perigos que enfrentou.");
            console.log("No fim, percebe que o maior tesouro que encontrou foi a coragem que sempre existiu dentro de si.\n");
        }
        else if (escolhaDeClasse === 3) {
            console.log("Thorin Escudo de Carvalho encara o campo silencioso e fincado no solo está seu machado sagrado.");
            console.log("Ele cumpriu sua promessa, lavando a honra dos anões com suor e sangue.");
            console.log("Agora, pode repousar em paz, sabendo que seu nome jamais será esquecido nos salões de Erebor.\n");
        }
        else {
            console.log("O herói desconhecido caminha para o horizonte, deixando para trás as ruínas de Eldor.");
            console.log("Sua lenda será contada em sussurros e canções, inspirando futuras gerações a enfrentar as sombras com bravura.");
            console.log("Pois em cada coração valente, a chama da esperança nunca se apaga.\n");
        }

        readline.question("Pressione ENTER para o epílogo final...\n");



        console.clear();
        console.log("=== O DESTINO DE ELDOR ===\n");
        console.log("Após incontáveis batalhas e jornadas pelas ruínas esquecidas, o nome do herói ecoa em cada canto de Eldor.");
        console.log("As sombras se dissipam, e uma nova aurora surge sobre as montanhas distantes.");
        console.log("Os povos livres se erguem novamente — e a esperança, outrora perdida, renasce.\n");
        console.log("Mas a paz é frágil, e o tempo é um ciclo. Um sussurro percorre o vento:");
        console.log("\"A paz é apenas o início... o ciclo sempre retorna.\"");
        console.log("Talvez um novo herói surja quando a sombra despertar novamente.");
        console.log("Por agora, Eldor respira em paz.\n");


        const jogarNovamente = (readline.question('\nDeseja criar outro personagem e jogar novamente? (s/n): ') || '').trim().toLowerCase();
        if (jogarNovamente !== 's') {
            console.log('\nEncerrando o jogo... Obrigado por jogar!\n');
            break;
        }
    }
}

