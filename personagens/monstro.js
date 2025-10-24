// Desenvolva aqui a classe Monstro em JS

// from .personagem import Personagem

// class Monstro(Personagem):
//     def __init__(self, nome, vida, ataque, defesa, tipo):
//         super().__init__(nome, vida, ataque, defesa)
//         self.tipo = tipo

import { Personagem } from './personagem.js';

export class Monstro extends Personagem {
    constructor(nome, vida, ataque, defesa, tipo) {
        super(nome, vida, ataque, defesa);
        this.tipo = tipo;
    }
}

// class Monstro(Personagem):
//     def __init__(self, nome, vida, ataque, defesa, tipo):
//         super().__init__(nome, vida, ataque, defesa)
//         self.tipo = tipo