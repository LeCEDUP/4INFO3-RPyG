import Personagem from './personagem.js';

export default class Heroi extends Personagem {
  constructor(nome) {
    super(nome, 30, 2, 1);
    this.xp = 0;
  }

  ganharXP(xp) {
    this.xp += xp;
    const xpParaProx = this.nivel * 10;
    if (this.xp >= xpParaProx) {
      this.xp -= xpParaProx;
      this.nivelUp();
    }
  }

  nivelUp() {
    this.nivel++;
    this.hpMax += 10;
    this.forca += 1;
    this.defesa += 1;
    this.hp = this.hpMax;
    console.log(`${this.nome} subiu para o nível ${this.nivel}!`);
  }
}