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
        this.vida = 200;
        this.ataque = 110;
        this.defesa = 160;
                }
            }



export class Espectro extends Monstro{
    constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0){
        super(nome, vida, ataque, defesa, nivel, experiencia)
        this.nome = nome;
        this.vida = 120;
        this.ataque = 100;
        this.defesa = 70;
    }
}


export class Vampiro extends Monstro{
    constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0){
        super(nome, vida, ataque, defesa, nivel, experiencia)
        this.nome = nome;
        this.vida = 160;
        this.ataque = 105;
        this.defesa = 80;
    }
}

export let npcDragao = new Dragao("Dragão Ancião");
export let npcEspectro = new Espectro("Fantasma da Babilônia");
export let npcVampiro = new Vampiro("Vampiro Nosferatu");

export const lista_monstros = [npcDragao, npcEspectro, npcVampiro];
