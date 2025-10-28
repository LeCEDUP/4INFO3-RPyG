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



export class Dragao extends Monstro{
    constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0){
        super(nome, vida, ataque, defesa, nivel, experiencia)
        this.nome = nome;
        this.vida = 150;
        this.ataque = 100;
        this.defesa = 90;
                }
            }

export class Espectro extends Monstro{
    constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0){
        super(nome, vida, ataque, defesa, nivel, experiencia)
        this.nome = nome;
        this.vida = 70;
        this.ataque = 95;
        this.defesa = 60;
    }
}

export class Vampiro extends Monstro{
    constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0){
        super(nome, vida, ataque, defesa, nivel, experiencia)
        this.nome = nome;
        this.vida = 90;
        this.ataque = 105;
        this.defesa = 70;
    }
}