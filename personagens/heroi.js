import { Personagem } from "./personagem.js";
import { Arma } from "./arma.js";
import { Armadura } from "./armadura.js";

export class Heroi extends Personagem {
    constructor(nome, vida, ataque, defesa, nivel = 1, experiencia = 0, inventario = []) {
        super(nome, vida, ataque, defesa);
        this.nivel = nivel;
        this.experiencia = experiencia;
        this.inventario = inventario;
    }

    ganharExperiencia(exp) {
        this.experiencia += exp;
        console.log(`${this.nome} ganhou ${exp} de experiência. Total: ${this.experiencia}`);
        while (this.experiencia >= this.nivel * 100) {
            this.subirNivel();
        }
    }

    subirNivel() {
        // XP necessária para o nível atual (que ele acabou de atingir o limite para subir)
        const xpNecessaria = this.nivel * 100; 

        this.nivel += 1;
        this.vida += 20;
        this.ataque += 5;
        this.defesa += 2;

        // Subtrai a XP necessária para subir de nível
        this.experiencia -= xpNecessaria; 

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