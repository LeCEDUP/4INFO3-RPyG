// Desenvolva aqui a classe Personagem em JS
import { Heroi } from './heroi.js';
import { Magia } from '../magias.js';
import { Cura } from '../magias.js';

export class Personagem {
    constructor(nome, ataque, defesa, vida) {
        this.nome = nome;
        this.ataque = ataque;
        this.defesa = defesa;
        this.vida = vida;
    };

    
    receberDano(dano) {
        this.vida -= dano;
        if (this.vida <= 0) {
            this.vida = 0;
            console.log(`${this.nome} foi derrotado!`);
        } else {
            console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
        }
    };
    
    atacar(alvo) {
        let dano = Math.max(0, this.ataque - alvo.defesa);
        alvo.receberDano(dano);
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano.`);
    };

    curar(alvo, magia){
        let usaCura = this.vida + magia.poder;
        alvo.vida = usaCura;
        console.log(`${this.nome} usou ${magia.nome} em ${alvo.nome}, recuperando ${magia.poder} de vida.`);

    }

    estaVivo() {
        return this.vida > 0;
    };
}



// exports = module.exports = Personagem;