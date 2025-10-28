// Desenvolva aqui a classe Monstro em JS

import Personagem from "./personagem.js";

class Monstro extends Personagem {
  constructor(nome, vida, ataque, defesa, exp) {
    super(nome, vida, ataque, defesa);
    this.exp = exp;
  }
}

export default Monstro;
