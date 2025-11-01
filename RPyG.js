import * as readline from 'readline-sync';

import { Heroi } from './personagens/heroi.js';
import { Monstro } from './personagens/monstro.js';
import { Magia } from './itens/magia.js';
import { Armadura } from './itens/armadura.js';
import { Arma } from './itens/arma.js';

function linhaTopo(comprimento = 80) {
  return '┌' + '─'.repeat(comprimento - 2) + '┐';
}

function linhaBaixo(comprimento = 80) {
  return '└' + '─'.repeat(comprimento - 2) + '┘';
}

function quebrarTexto(texto, largura) {
  const palavras = texto.split(' ');
  let linhaAtual = '';
  const linhas = [];

  palavras.forEach(palavra => {
    if ((linhaAtual + palavra).length + (linhaAtual ? 1 : 0) <= largura) {
      linhaAtual += (linhaAtual ? ' ' : '') + palavra;
    } else {
      linhas.push(linhaAtual);
      linhaAtual = palavra;
    }
  });

  if (linhaAtual) linhas.push(linhaAtual);
  return linhas;
}

function box(texto, largura = 80) {
  const linhasSeparadas = texto.split('\n');
  let linhasTexto = [];
  linhasSeparadas.forEach(linha => {
    const linhasQuebradas = quebrarTexto(linha, largura - 4);
    linhasTexto = linhasTexto.concat(linhasQuebradas);
  });

  console.log(linhaTopo(largura));
  linhasTexto.forEach(linhaTexto => {
    const textoLimpo = linhaTexto.trim();
    const espacosAntes = Math.floor((largura - 2 - textoLimpo.length) / 2);
    const espacosDepois = largura - 2 - textoLimpo.length - espacosAntes;
    console.log('│' + ' '.repeat(espacosAntes) + textoLimpo + ' '.repeat(espacosDepois) + '│');
  });
  console.log(linhaBaixo(largura));
  console.log();
}

function boxEsquerda(texto, largura = 80) {
  const linhasSeparadas = texto.split('\n');
  let linhasTexto = [];
  linhasSeparadas.forEach(linha => {
    const linhasQuebradas = quebrarTexto(linha, largura - 4);
    linhasTexto = linhasTexto.concat(linhasQuebradas);
  });

  console.log(linhaTopo(largura));
  linhasTexto.forEach(linhaTexto => {
    const textoLimpo = linhaTexto.trim();
    const espacosDepois = largura - 2 - textoLimpo.length;
    console.log('│ ' + textoLimpo + ' '.repeat(Math.max(0, espacosDepois - 1)) + '│');
  });
  console.log(linhaBaixo(largura));
  console.log();
}

function perguntar(msg) {
  const resposta = readline.question(msg);
  if (resposta.toLowerCase() === "sair") {
    console.log("\nJogo encerrado. Ate a proxima!");
    process.exit();
  }
  return resposta;
}

function escolherClasse() {
  box('Bem vindo ao RPyG do Caio!!');
  boxEsquerda("Para sair digite sair a qualquer momento!");
  boxEsquerda(
    'Classes | Atributos iniciais \n' +
    '\n 1- Cavaleiro | Ataque: 10 | Vida: 10 | Magia: 0 (Itens: Espada(5 de ataque) e Armadura do reino(9 de defesa))' +
    '\n 2- Arqueira | Ataque: 13 | Vida: 10 | Magia: 0 (Itens: Arco(4 de ataque) e Manta do arqueiro(5 de defesa))' +
    '\n 3- Assassino | Ataque: 16 | Vida: 15 | Magia: 5 (Itens: Faca amaldiçoada(10 de ataque) e Amuleto da Sombra(5 de magia))'
  );

  let escolha = parseInt(perguntar('Escolha sua classe [1 | 2 | 3]: '));
  while (![1, 2, 3].includes(escolha)) {
    boxEsquerda('Numero invalido, escolha apenas 1, 2 ou 3.');
    escolha = parseInt(perguntar('Escolha sua classe [1 | 2 | 3]: '));
  }
  return escolha;
}

function criarPersonagem(escolha, nome) {
  let personagem, arma, armadura;

  if (escolha === 1) {
    personagem = new Heroi(nome, 10, 10, 8, 0);
    arma = new Arma("Espada", "Espada dos cavaleiros guardiões do rei", 5, "Comum");
    armadura = new Armadura("Armadura do reino", "Armadura dos cavaleiros guardiões", 8);
  } else if (escolha === 2) {
    personagem = new Heroi(nome, 13, 10, 5, 0);
    arma = new Arma("Arco", "Arco da tropa de infantaria do reino", 4, "Comum");
    armadura = new Armadura("Manta do arqueiro", "Manta da tropa de infantaria", 5);
  } else {
    personagem = new Heroi(nome, 16, 15, 10, 5);
    arma = new Arma("Faca amaldiçoada", "Faca dos assassinos da organização secreta", 10, "Comum");
    const magia = new Magia("Amuleto da Sombra", "Amuleto que aumenta o poder das sombras", 5);
    personagem.inventario.push(magia);
    personagem.equiparItem(magia);
  }

  personagem.inventario.push(arma);
  personagem.inventario.push(armadura);

  personagem.equiparItem(arma);
  personagem.equiparItem(armadura);

  return personagem;
}

function exibirStatusPersonagem(personagem) {
  boxEsquerda(
    `Parabens, seu personagem inicial esta pronto!\n` +
    `Nome: ${personagem.nome}\n` +
    `Ataque: ${personagem.ataque}\n` +
    `Vida: ${personagem.vida}\n` +
    `Defesa: ${personagem.defesa}\n` +
    `Magia: ${personagem.magia}`
  );
}

function iniciarBatalha(jogador, inimigo) {
  box(`Batalha! ${jogador.nome} X ${inimigo.nome}`);
  inimigo.exibirInformacoes();
  boxEsquerda("Quem atacara primeiro? [0-49 Heroi | 50-100 Monstro]");
  perguntar("Aperte enter para girar: ");

  let vez = Math.round(Math.random() * 100);
  if (vez < 50) {
    boxEsquerda(`Numero sorteado: ${vez}, começa atacando o heroi: ${jogador.nome}!`);
    perguntar("Aperte enter para atacar: ");
    jogador.atacar(inimigo);
  } else {
    boxEsquerda(`Numero sorteado: ${vez}, começa atacando o monstro: ${inimigo.nome}!`);
    perguntar("Aperte enter para receber ataque: ");
    inimigo.atacar(jogador);
  }

  while (jogador.estaVivo() && inimigo.estaVivo()) {
    perguntar("\nAperte enter para a proxima rodada: ");
    if (vez >= 50) {
      boxEsquerda(`Vez do heroi ${jogador.nome}!`);
      perguntar("Aperte enter para atacar: ");
      jogador.atacar(inimigo);
      vez = 1;
    } else {
      boxEsquerda(`Vez do monstro ${inimigo.nome}`);
      perguntar("Aperte enter para receber ataque: ");
      inimigo.atacar(jogador);
      vez = 50;
    }
  }

  if (!inimigo.estaVivo()) {
    return 'vitoria';
  } else {
    return 'derrota';
  }
}

const margit = new Monstro('Margit, o Agouro Caído', 12, 20, 8, "Demigod", 5);
const godrick = new Monstro("Godrick, o Enxertado", 50, 40, 25, "Demigod", 12);
const rennala = new Monstro("Rennala, Rainha da Lua Cheia", 15, 70, 20, "Demigod", 8);
const radahn = new Monstro("Radahn, Flagelo Estelar", 22, 100, 25, "Demigod", 15);

async function main() {
  const escolha = escolherClasse();
  const nome = perguntar('Insira o nome do seu personagem: ');
  const personagem = criarPersonagem(escolha, nome);

  exibirStatusPersonagem(personagem);

  boxEsquerda(`Bem vindo ${personagem.nome}, esta preparado para a primeira luta? \nEu não ligo se não estiver, vamos começar!`);

  if (iniciarBatalha(personagem, margit) === 'vitoria') {
    box('VIToRIA!');
    perguntar("Aperte enter para receber experiencia:\n");
    personagem.ganharExperiencia(750);
    personagem.exibirInformacoes();

    if (iniciarBatalha(personagem, godrick) === 'vitoria') {
      personagem.inventario.push(new Armadura("Armadura de Godrick", "Armadura lendaria do Godrick, alta defesa", 20));
      personagem.inventario.push(new Arma("Espada de Godrick", "Espada lendaria de Godrick com grande poder de ataque", 15, "Lendaria"));
      personagem.equiparItem(personagem.inventario[personagem.inventario.length-2]);
      personagem.equiparItem(personagem.inventario[personagem.inventario.length-1]);
      console.log("Voce recebeu a Armadura e Espada de Godrick e as equipou!");

      box('VIToRIA!');
      perguntar("Aperte enter para receber experiencia:\n");
      personagem.ganharExperiencia(1000);
      personagem.exibirInformacoes();

      if (iniciarBatalha(personagem, rennala) === 'vitoria') {
        personagem.inventario.push(new Armadura("Armadura da Rainha", "Armadura poderosa da Rainha da Lua Cheia", 25));
        personagem.inventario.push(new Arma("Cajado de Rennala", "Cajado poderoso da Rainha da Lua Cheia", 12, "Lendaria"));
        personagem.equiparItem(personagem.inventario[personagem.inventario.length-2]);
        personagem.equiparItem(personagem.inventario[personagem.inventario.length-1]);
        console.log("Voce recebeu a Armadura e Cajado da Rainha e os equipou!");

        box('VIToRIA!');
        perguntar("Aperte enter para receber experiencia:\n");
        personagem.ganharExperiencia(1500);
        personagem.exibirInformacoes();

        if (iniciarBatalha(personagem, radahn) === 'vitoria') {
          personagem.inventario.push(new Armadura("Armadura Estelar", "Armadura suprema do Flagelo Estelar", 30));
          personagem.inventario.push(new Arma("Arco Estelar", "Arco supremo do Flagelo Estelar, dano massivo a distância", 20, "Lendaria"));
          personagem.equiparItem(personagem.inventario[personagem.inventario.length-2]);
          personagem.equiparItem(personagem.inventario[personagem.inventario.length-1]);
          console.log("Voce recebeu a Armadura e Arco Estelar e os equipou!");

          box('Parabens, voce zerou o game!');
          perguntar("Aperte enter para receber experiencia:\n");
          personagem.ganharExperiencia(5000);
          personagem.exibirInformacoes();
          box('Fim de game!\nObrigado por jogar!');
        } else {
          box('Voce perdeu! Wasted!');
          console.log("\nJogue novamente para vencer!");
          process.exit();
        }
      } else {
        box('Voce perdeu! Wasted!');
        console.log("\nJogue novamente para vencer!");
        process.exit();
      }
    } else {
      box('Voce perdeu! Wasted!');
      console.log("\nJogue novamente para vencer!");
      process.exit();
    }
  } else {
    box('Voce perdeu! Wasted!');
    console.log("\nJogue novamente para vencer!");
    process.exit();
  }
}

main();
