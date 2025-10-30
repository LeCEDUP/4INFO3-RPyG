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

    static criarMonstroAleatorio(nivelHeroi) {
        const monstrosBase = [
            { nome: "Onda Normal", vida: 20, ataque: 10, defesa: 2, tipo: "Onda" },
            { nome: "Onda Média", vida: 25, ataque: 15, defesa: 5, tipo: "onda" },
            { nome: "Onda Grande", vida: 30, ataque: 20, defesa: 8, tipo: "onda" },
            { nome: "TSUNAMI ", vida: 50, ataque: 25, defesa: 11, tipo: "Onda" },
            { nome: "KRAKEN", vida: 70, ataque: 30, defesa: 5, tipo: "Monstro Marinho" }
        ];

        const base = monstrosBase[Math.floor(Math.random() * monstrosBase.length)];

       
        const multiplicador = nivelHeroi * 0.5 + 0.5;
        
        const vida = Math.floor(base.vida * multiplicador);
        const ataque = Math.floor(base.ataque * multiplicador);
        const defesa = Math.floor(base.defesa * multiplicador);

        return new Monstro(base.nome, vida, ataque, defesa, base.tipo);
    }
}


// class Monstro(Personagem):
//     def __init__(self, nome, vida, ataque, defesa, tipo):
//         super().__init__(nome, vida, ataque, defesa)
//         self.tipo = tipo