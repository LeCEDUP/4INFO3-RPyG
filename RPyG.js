import Heroi from './personagens/heroi.js';
import Monstro from './personagens/monstro.js';
import Arma from './itens/arma.js';

const heroi = new Heroi('João');
const espada = new Arma('Espada de Ferro', 3, 7);
heroi.arma = espada;

function criarMonstroAleatorio() {
  const m = new Monstro('Goblin', 15, 2, 0, 8);
  m.arma = new Arma('Garfo oxidado', 1, 4);
  return m;
}

async function batalha(heroi, monstro) {
  console.log(`Começa a batalha: ${heroi.nome} vs ${monstro.nome}`);
  let turno = 0;
  while (heroi.estaVivo() && monstro.estaVivo()) {
    turno++;
    // vez do herói
    const danoHeroi = heroi.atacar(monstro);
    console.log(`${heroi.nome} causa ${danoHeroi} de dano. ${monstro.nome} HP=${monstro.hp}/${monstro.hpMax}`);
    if (!monstro.estaVivo()) break;

    // vez do monstro
    const danoMonstro = monstro.atacar(heroi);
    console.log(`${monstro.nome} causa ${danoMonstro} de dano. ${heroi.nome} HP=${heroi.hp}/${heroi.hpMax}`);

    // pausa curta para ler (se quiser)
    await new Promise(r => setTimeout(r, 300)); // apenas se rodando em ambiente que suporta
  }

  if (heroi.estaVivo()) {
    console.log(`${heroi.nome} venceu! Ganha ${monstro.xpDrop} XP.`);
    heroi.ganharXP(monstro.xpDrop);
    // loot simples
    heroi.adicionarItem(new Arma('Adaga pequena', 1, 3));
  } else {
    console.log(`${heroi.nome} foi derrotado...`);
  }
}

// Exemplo de execução (em navegador, chame de um botão)
const mob = criarMonstroAleatorio();
batalha(heroi, mob);