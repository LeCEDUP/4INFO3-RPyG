// Desenvolva aqui a classe Heroi em JS 
import {personagem} from "./personagem.js";
import {Arma} from "../itens/arma.js";
import {Armadura} from "../itens/armadura.js";


class Heroi extends Personagem {
    constructor(nome, vida, ataque, defesa, nivel = 1, experiencia = 0, inventario = null) {
        super(nome, ataque, defesa, vida);
        this.nivel = nivel;
        this.experiencia = experiencia;
        this.inventario = inventario !== null ? inventario : [];
    }

    ganharExperiencia(exp) {
        this.experiencia += exp;
        console.log(`${this.nome} ganhou ${exp} de experiência. Total: ${this.experiencia}`);
        while (this.experiencia >= this.nivel * 100) {
            this.subirNivel();
        }
    }

    subirNivel() {
        this.nivel += 1;
        this.vida += 20;
        this.ataque += 5;
        this.defesa += 2;
        this.experiencia -= (this.nivel - 1) * 100;
        console.log(`${this.nome} subiu para o nível ${this.nivel}! Seus atributos aumentaram.`);
    }

    equiparItem(item) {
        if (this.inventario.includes(item)) {
            if (item instanceof Arma) {
                this.ataque += item.bonus_ataque;
                console.log(`${this.nome} equipou ${item.nome}. Ataque atual: ${this.ataque}`);
            } else if (item instanceof Armadura) {
                this.defesa += item.bonus_defesa;
                console.log(`${this.nome} equipou ${item.nome}. Defesa atual: ${this.defesa}`);
            } else {
                console.log(`${item.nome} não pode ser equipado.`);
            }
        } else {
            console.log(`${this.nome} não possui ${item.nome} no inventário.`);
        }
    }
}

module.exports = Heroi;

