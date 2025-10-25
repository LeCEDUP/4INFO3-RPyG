// Desenvolva aqui a classe Monstro em JS

import {Personagem} from './personagem.js';

// class Monstro(Personagem):
//     def __init__(self, nome, vida, ataque, defesa, tipo):
//         super().__init__(nome, vida, ataque, defesa)
//         self.tipo = tipo



export class Monstro extends Personagem{
    constructor(nome, vida, ataque, defesa, tipo){
        super(nome, vida, ataque, defesa)
        this.tipo = tipo
    }
}

// let caio = new Monstro('Caio', 5000, 300, 2000, 'Lesma')
