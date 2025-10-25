// Desenvolva aqui a classe Heroi em JS
import { Personagem } from "./personagem.js";

export class Heroi extends Personagem{
    constructor(nome, vida, ataque, defesa, taxaCritica=0, danoCritico=1){
        super(nome, vida, ataque, defesa);
        this.taxaCritica = taxaCritica;
        this.danoCritico = danoCritico;
    }

    usarPocaoDeTaxa(pocao){
        if (this.taxa + pocao.taxa > 100){
            this.taxaCritica = 100
        } else {
            this.taxaCritica += pocao.taxa
        }
        this.danoCritico += pocao.dano
    }

    atacar(alvo) {
        let dano = Math.max(0, this.ataque - alvo.defesa);
        let aleatorio = Math.random() * 100;
        if (aleatorio <= this.taxaCritica) {
            dano *= this.danoCritico
        }
        alvo.receberDano(dano);
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano.`);
    }
}