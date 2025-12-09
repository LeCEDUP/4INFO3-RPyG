import { Personagem } from './personagem.js';

export class Monstro extends Personagem {
  atacar(alvo) {
    console.log(`${this.nome} ruge antes de atacar!`);
    super.atacar(alvo); 
  }
}

const heroi = new Personagem("Herói", 100, 20);
const dragao = new Monstro("Dragão", 150, 25);

console.log(" Início da batalha! \n");

while (heroi.estaVivo() && dragao.estaVivo()) {
  heroi.atacar(dragao);
  if (!dragao.estaVivo()) break;

  dragao.atacar(heroi);
  console.log("");
}

console.log(" Fim da batalha! ");
if (heroi.estaVivo()) {
  console.log(`${heroi.nome} venceu!`);
} else {
  console.log(`${dragao.nome} venceu!`);
}