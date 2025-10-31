import { Personagem } from "./personagem.js";
import { Arma } from "../itens/arma.js";
import { Armadura } from "../itens/armadura.js";
import { Magia } from "../itens/magia.js";




export class Heroi extends Personagem {
    constructor(nome, ataque, vida, defesa, nivel = 1, experiencia = 0, inventario = null) {
        super(nome, ataque, vida, defesa);
        this.nivel = nivel;
        this.experiencia = experiencia;
        this.inventario = inventario != null ? inventario : [];
    }

    ganharExperiencia(exp) {
        this.experiencia += exp;
        console.log(`${this.nome} ganhou ${exp} de experiência. Total: ${this.experiencia}`)
        while (this.experiencia >= this.nivel * 100) {
            this.subirNivel();
        }
    }

    subirNivel() {
        this.nivel += 1;
        this.vida += 20;
        this.ataque += 20;
        this.defesa += 20;
        this.experiencia -= (this.nivel - 1) * 100;
        console.log(`${this.nome} subiu para o nível ${this.nivel}! Seus atributos aumentaram.`)
    }
    
    equiparItem(item) {
        if (this.inventario.includes(item)) {
            if (item instanceof Arma) {
                this.ataque += item.bonusAtaque;
                console.log(`${this.nome} equipou ${item.nome}.
                    Ataque atual: ${this.ataque}`);
            } else if (item instanceof Armadura) {
                this.defesa += item.bonusDefesa;
                console.log(`${this.nome} equipou ${item.nome}.
                    Defesa atual: ${this.defesa}`);
            } else if (item instanceof Magia) {
                this.magia += item.bonusMagia;
                console.log(`${this.nome} equipou ${item.nome}.
                    Magia atual: ${this.magia}`);
            }
        } else {
            console.log(`${this.nome} não possui ${item.nome} no inventário.`)
        }
    }
}