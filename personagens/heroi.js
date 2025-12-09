// Desenvolva aqui a classe Heroi em JS

import Personagem from "./personagem.js";

class Heroi extends Personagem {
  constructor(nome) {
    super(nome, 100, 12, 5);
    this.nivel = 1;
    this.experiencia = 0;
    this.inventario = [];
  }

  ganharExperiencia(exp) {
    this.experiencia += exp;
    if (this.experiencia >= this.nivel * 20) {
      this.experiencia = 0;
      this.nivel++;
      this.vida = this.maxVida;
      this.ataque += 2;
      this.defesa += 1;
      console.log(`🎉 ${this.nome} subiu para o nível ${this.nivel}!`);
    }
  }

  adicionarAoInventario(item) {
    this.inventario.push(item);
  }
}

export default Heroi;
