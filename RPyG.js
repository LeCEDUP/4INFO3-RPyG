import * as readline from 'readline-sync';

import { Heroi } from './personagens/heroi.js';
import { Monstro } from './personagens/monstro.js';
import { Magia } from './itens/magia.js';
import { Armadura } from './itens/armadura.js';
import { Arma } from './itens/arma.js';

function linha(caractere = '-') {
    console.log(caractere.repeat(80));
}

function box(texto) {
    linha('=');
    const linhasTexto = texto.split('\n');
    linhasTexto.forEach(linhaTexto => {
        const espacosAntes = Math.floor((80 - 2 - linhaTexto.length) / 2);
        const espacosDepois = 80 - 2 - linhaTexto.length - espacosAntes;
        console.log(`|${' '.repeat(espacosAntes)}${linhaTexto}${' '.repeat(espacosDepois)}|`);
    });
    linha('=');
}

function boxEsquerda(texto) {
    linha('-');
    const linhasTexto = texto.split('\n');
    linhasTexto.forEach(linhaTexto => {
        const espacosDepois = 80 - 2 - linhaTexto.length;
        console.log(`| ${linhaTexto}${' '.repeat(Math.max(0, espacosDepois - 1))}|`);
    });
    linha('-');
}

function perguntar(msg) {
    let resposta = readline.question(msg);
    if (resposta === "sair") {
        console.log("\nJogo encerrado. Até a próxima!");
        process.exit();
    }
    return resposta;
}

box('Bem vindo ao RPyG do Caio!!');
boxEsquerda("Para sair digite sair a qualquer momento!");
boxEsquerda('Classes | Atributos iniciais \n \n 1- Cavaleiro | Ataque: 10 | Vida: 10 | Magia: 0 (Itens : Espada(5 bonus de ataque) e Armadura do reino(9 bonus de defesa) ) \n 2- Arqueira | Ataque: 13 | Vida: 10 | Magia: 0 (Itens: Arco(4 bonus de ataque) e Manta do arqueiro(5 bonus de defesa))\n 3- Assassino | Ataque: 15 | Vida: 10 | Magia: 5 (Itens: Faca almaldiçoada(10 bonus de ataque) e Amuleto da Sombra(5 bonus de magia))');

let escolhaDeClasse = parseInt(perguntar('Faça a escolha da sua classe [1 | 2 | 3]: '));
while (escolhaDeClasse < 1 || escolhaDeClasse > 3) {
    console.log('Numero inválido, escolha apenas um numero entre essses [1 | 2 | 3]')
    escolhaDeClasse = parseInt(perguntar('Faca a escolha da sua classe [1 | 2 | 3]: '));
}

let nome = perguntar('Insira o nome do seu personagem: ');
let personPrincipal;
let armaInicial;
let armaduraInicial;


if (escolhaDeClasse === 1) {
    personPrincipal = new Heroi(nome, 10, 10, 0);
    armaInicial = new Arma("Espada", "Espada dada para todos os cavaleiros guardiões do rei", 5, "Comum");
    armaduraInicial = new Armadura("Armadura do reino", "Armadura dos cavaleiros guardiões", 8);
} else if (escolhaDeClasse === 2) {
    personPrincipal = new Heroi(nome, 13, 10, 0);
    armaInicial = new Arma("Arco", "Arco dado para a tropa de infantaria do reino", 4, "Comum");
    armaduraInicial = new Armadura("Manta do arqueiro", "Manta para diferenciar a tropa de infantaria da tropa de combate", 5)
} else if (escolhaDeClasse === 3) {
    personPrincipal = new Heroi(nome, 16, 15, 0, 5);
    armaInicial = new Arma("Faca Almaldiçoada", "Faca dos assassinos da organização secreta do reino", 10, "Comum");
    const magiaInicial = new Magia("Amuleto da Sombra", "Amuleto que aumenta o poder das sombras", 5);
    personPrincipal.inventario.push(magiaInicial);
    personPrincipal.equiparItem(magiaInicial);
}
personPrincipal.inventario.push(armaInicial);
personPrincipal.inventario.push(armaduraInicial);

personPrincipal.equiparItem(armaInicial);
personPrincipal.equiparItem(armaduraInicial);


boxEsquerda(`Parabéns seu personagem inicial está pronto! \n Nome: ${personPrincipal.nome} \n Ataque: ${personPrincipal.ataque} \n Vida: ${personPrincipal.vida} \n Defesa: ${personPrincipal.defesa} \n Magia: ${personPrincipal.magia}`);


boxEsquerda(`Bem vindo ${personPrincipal.nome}, está preparado para a primeira luta? \nEu não ligo se você não estiver então vamos começar!`);

const margit = new Monstro('Margit, o Agouro Caído', 15, 15, 5, "Demigod");
margit.exibirInformacoes();
perguntar('Aperte enter para iniciar: ');

box(`Primeira Batalha! ${personPrincipal.nome} X ${margit.nome}`);
linha();
console.log("Quem atacará primeiro? [0-49 Herói | 50-100 Monstro]");
linha();
perguntar("Aperte enter para girar: ");

let aleatorio = Math.round(Math.random() * 100);
if (aleatorio < 50) {
    boxEsquerda(`O numero escolhido foi ${aleatorio}, quem começa atacando é o herói: ${personPrincipal.nome}!`);
    perguntar("Aperte enter para atacar: \n")
    personPrincipal.atacar(margit);
} else if (aleatorio >= 50) {
    boxEsquerda(`O numero escolhido foi ${aleatorio}, quem começa atacando é o Montro: ${margit.nome}!`);
    perguntar("Aperte enter para receber ataque: \n")
    margit.atacar(personPrincipal);
}

while (personPrincipal.estaVivo() === true && margit.estaVivo() === true) {
    perguntar("\nAperte enter para jogar mais uma rodada: ")
    if (aleatorio >= 50 && personPrincipal.estaVivo() === true && margit.estaVivo() === true) {
        boxEsquerda(`Vez do herói ${personPrincipal.nome}!`);
        perguntar("Aperte enter para atacar: ")
        personPrincipal.atacar(margit);
        aleatorio = 1;

    } else if (aleatorio < 50 && personPrincipal.estaVivo() === true && margit.estaVivo() === true) {
        boxEsquerda(`Vez do monstro ${margit.nome}`);
        perguntar("Aperte enter para receber ataque: ")
        margit.atacar(personPrincipal);
        aleatorio = 50;
    }
}


if (!margit.estaVivo()) {
    box('VITÓRIA!');
    perguntar("\nAperte enter para receber niveis: \n")
    personPrincipal.ganharExperiencia(1000);
    personPrincipal.exibirInformacoes();
} else {
    box('You loose, Wasted!');
    console.log("\nJogue novamente para vencer!");
    process.exit();
}

perguntar("\nAperte enter para iniciar a próxima batalha: \n")

const godrick = new Monstro("Godrick, o Enxertado", 25, 90, 15, "Demigod");


box(`Segunda Batalha! ${personPrincipal.nome} X ${godrick.nome}`);
godrick.exibirInformacoes();
linha();
console.log("Quem atacará primeiro? [0-49 Herói | 50-100 Monstro]");
linha();
perguntar("Aperte enter para girar: ");

aleatorio = Math.round(Math.random() * 100);
if (aleatorio < 50) {
    boxEsquerda(`O numero escolhido foi ${aleatorio}, quem começa atacando é o herói: ${personPrincipal.nome}!`);
    perguntar("Aperte enter para atacar: \n");
    personPrincipal.atacar(godrick);
} else if (aleatorio >= 50) {
    boxEsquerda(`O numero escolhido foi ${aleatorio}, quem começa atacando é o Montro: ${godrick.nome}!`);
    perguntar("Aperte enter para receber ataque: \n");
    godrick.atacar(personPrincipal);
}

while (personPrincipal.estaVivo() === true && godrick.estaVivo() === true) {
    perguntar("\nAperte enter para jogar mais uma rodada: ");
    if (aleatorio >= 50 && personPrincipal.estaVivo() === true && godrick.estaVivo() === true) {
        boxEsquerda(`Vez do herói ${personPrincipal.nome}!`);
        perguntar("Aperte enter para atacar: ")
        personPrincipal.atacar(godrick);
        aleatorio = 1;

    } else if (aleatorio < 50 && personPrincipal.estaVivo() === true && godrick.estaVivo() === true) {
        boxEsquerda(`Vez do monstro ${godrick.nome}`);
        perguntar("Aperte enter para receber ataque: ");
        godrick.atacar(personPrincipal);
        aleatorio = 50;
    }
}
if (!godrick.estaVivo()) {
    const armaduraGodrick = new Armadura("Armadura de Godrick", "Armadura lendária do Godrick, alta defesa", 20);
    const armaGodrick = new Arma("Espada de Godrick", "Espada lendária de Godrick com grande poder de ataque", 15, "Lendária");
    box('VITÓRIA!');
    perguntar("\nAperte enter para receber níveis: \n");
    personPrincipal.ganharExperiencia(1500);
    personPrincipal.exibirInformacoes();

    personPrincipal.inventario.push(armaduraGodrick);
    personPrincipal.equiparItem(armaduraGodrick);
    personPrincipal.inventario.push(armaGodrick);
    personPrincipal.equiparItem(armaGodrick);
    console.log("Você recebeu a Armadura de Godrick e a equipou!");

    perguntar("\nAperte enter para iniciar a Terceira Batalha: \n")

    const rennala = new Monstro("Rennala, Rainha da Lua Cheia", 10, 100, 5, "Demigod");

    box(`Terceira Batalha! ${personPrincipal.nome} X ${rennala.nome}`);
    rennala.exibirInformacoes();
    linha();
    console.log("Quem atacará primeiro? [0-49 Herói | 50-100 Monstro]");
    linha();
    perguntar("Aperte enter para girar: ");

    aleatorio = Math.round(Math.random() * 100);
    if (aleatorio < 50) {
        boxEsquerda(`O numero escolhido foi ${aleatorio}, quem começa atacando é o herói: ${personPrincipal.nome}!`);
        perguntar("Aperte enter para atacar: \n");
        personPrincipal.atacar(rennala);
    } else if (aleatorio >= 50) {
        boxEsquerda(`O numero escolhido foi ${aleatorio}, quem começa atacando é o Montro: ${rennala.nome}!`);
        perguntar("Aperte enter para receber ataque: \n");
        rennala.atacar(personPrincipal);
    }

    while (personPrincipal.estaVivo() === true && rennala.estaVivo() === true) {
        perguntar("\nAperte enter para jogar mais uma rodada: ");
        if (aleatorio >= 50 && personPrincipal.estaVivo() === true && rennala.estaVivo() === true) {
            boxEsquerda(`Vez do herói ${personPrincipal.nome}!`);
            perguntar("Aperte enter para atacar: ")
            personPrincipal.atacar(rennala);
            aleatorio = 1;

        } else if (aleatorio < 50 && personPrincipal.estaVivo() === true && rennala.estaVivo() === true) {
            boxEsquerda(`Vez do monstro ${rennala.nome}`);
            perguntar("Aperte enter para receber ataque: ");
            rennala.atacar(personPrincipal);
            aleatorio = 50;
        }
    }

    if (!rennala.estaVivo()) {
        const armaduraRennala = new Armadura("Armadura da Rainha", "Armadura poderosa da Rainha da Lua Cheia", 25);
        const armaRennala = new Arma("Cajado de Rennala", "Cajado poderoso da Rainha da Lua Cheia", 12, "Lendária");

        box('VITÓRIA!');
        perguntar("\nAperte enter para receber níveis: \n");
        personPrincipal.ganharExperiencia(2500);
        personPrincipal.exibirInformacoes();

        personPrincipal.inventario.push(armaduraRennala);        
        personPrincipal.inventario.push(armaRennala);        
        personPrincipal.equiparItem(armaduraRennala);
        personPrincipal.equiparItem(armaRennala);
        console.log("Você recebeu a Armadura da Rainha e a equipou!");

        const radahn = new Monstro("Radahn, Flagelo Estelar", 40, 200, 25, "Demigod");

        box(`Batalha Final! ${personPrincipal.nome} X ${radahn.nome}`);
        radahn.exibirInformacoes();
        linha();
        console.log("Quem atacará primeiro? [0-49 Herói | 50-100 Monstro]");
        linha();
        perguntar("Aperte enter para girar: ");

        aleatorio = Math.round(Math.random() * 100);
        if (aleatorio < 50) {
            boxEsquerda(`O numero escolhido foi ${aleatorio}, quem começa atacando é o herói: ${personPrincipal.nome}!`);
            perguntar("Aperte enter para atacar: \n");
            personPrincipal.atacar(radahn);
        } else if (aleatorio >= 50) {
            boxEsquerda(`O numero escolhido foi ${aleatorio}, quem começa atacando é o Montro: ${radahn.nome}!`);
            perguntar("Aperte enter para receber ataque: \n");
            radahn.atacar(personPrincipal);
        }

        while (personPrincipal.estaVivo() === true && radahn.estaVivo() === true) {
            perguntar("\nAperte enter para jogar mais uma rodada: ");
            if (aleatorio >= 50 && personPrincipal.estaVivo() === true && radahn.estaVivo() === true) {
                boxEsquerda(`Vez do herói ${personPrincipal.nome}!`);
                perguntar("Aperte enter para atacar: ")
                personPrincipal.atacar(radahn);
                aleatorio = 1;

            } else if (aleatorio < 50 && personPrincipal.estaVivo() === true && radahn.estaVivo() === true) {
                boxEsquerda(`Vez do monstro ${radahn.nome}`);
                perguntar("Aperte enter para receber ataque: ");
                radahn.atacar(personPrincipal);
                aleatorio = 50;
            }
        }

        if (!radahn.estaVivo()) {
            const armaduraRadahn = new Armadura("Armadura Estelar", "Armadura suprema do Flagelo Estelar", 30);
            const armaRadahn = new Arma("Arco Estelar", "Arco supremo do Flagelo Estelar, dano massivo a distância", 20, "Lendária");
            box('Parabéns você zerou o game');
            perguntar("\nAperte enter para receber níveis: \n");
            personPrincipal.ganharExperiencia(5000);
            personPrincipal.exibirInformacoes();

            personPrincipal.inventario.push(armaduraRadahn);
            personPrincipal.inventario.push(armaRadahn);
            personPrincipal.equiparItem(armaduraRadahn);
            personPrincipal.equiparItem(armaRadahn);
            console.log("Você recebeu a Armadura Estelar e a equipou!");
        } else {
            box('You loose, Wasted!');
            console.log("\nJogue novamente para vencer!");
            process.exit();
        }

    } else {
        box('You loose, Wasted!');
        console.log("\nJogue novamente para vencer!");
        process.exit();
    }
} else {
    box('You loose, Wasted!');
    console.log("\nJogue novamente para vencer!");
    process.exit();
}

box('Fim de game!\nObrigado por Jogar!');









