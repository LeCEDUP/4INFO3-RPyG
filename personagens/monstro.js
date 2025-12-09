// Desenvolva aqui a classe Monstro em JS

import Personagem from './personagem.js';

export default class Monstro extends Personagem {
  constructor(nome, tipo = 'Pequeno', vida = 50, ataque = 8, defesa = 2) {
    super(nome, vida, ataque, defesa);
    this.tipo = tipo;
  }

  // exp de recompensa simples
  experienciaAoDerrotar() {
    const base = 20;
    if (this.tipo === 'Grande') return base * 3;
    if (this.tipo === 'Médio') return base * 2;
    return base;
  }

  calcularDefesaTotal() {
    return this.defesa;
  }
}
