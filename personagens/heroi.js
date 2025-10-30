// Desenvolva aqui a classe Heroi em JS
// from .personagem import Personagem
// from itens.arma import Arma
// from itens.armadura import Armadura

import { Personagem } from './personagem.js';
import { Arma } from '../itens/arma.js';
import { Armadura } from '../itens/armadura.js';

// class Heroi(Personagem):
//     def __init__(self, nome, vida, ataque, defesa, nivel=1, experiencia=0, inventario=None):
//         super().__init__(nome, vida, ataque, defesa)
//         self.nivel = nivel
//         self.experiencia = experiencia
//         self.inventario = inventario if inventario is not None else []
// RPyG/personagens/heroi.js


export class Heroi extends Personagem {
    constructor(nome, vida, ataque, defesa, nivel = 1, experiencia = 0, inventario = []) {
        super(nome, vida, ataque, defesa);
        this.nivel = nivel;
        this.experiencia = experiencia;
        this.inventario = inventario;
    }

    ganharExperiencia(exp) {
        this.experiencia += exp;
        console.log(`${this.nome} ganhou ${exp} de Experiência de Onda. Total: ${this.experiencia}`);
        
        while (this.experiencia >= this.experienciaParaProximoNivel()) {
            this.subirNivel();
        }
    }

    experienciaParaProximoNivel() {
        return this.nivel * 100;
    }

    subirNivel() {
        const expNecessaria = this.experienciaParaProximoNivel();
        
        this.nivel++;
        this.vida += 25;
        this.ataque += 7;
        this.defesa += 3;
        
        this.experiencia -= expNecessaria; 
        
        console.log(`\n🌊 ${this.nome} surfou uma onda lendária e subiu para o Nível ${this.nivel}! Seus atributos de surfista aumentaram.`);
    }

    equiparItem(item) {
        if (this.inventario.includes(item)) {
            if (item instanceof Arma) {
                this.ataque += item.bonus_ataque;
                console.log(`🏄 ${this.nome} pegou a prancha ${item.nome}. Habilidade de Surf atual: ${this.ataque}`);
            } else if (item instanceof Armadura) {
                this.defesa += item.bonus_defesa;
                console.log(`👕 ${this.nome} vestiu ${item.nome}. Resistência à Correnteza atual: ${this.defesa}`);
            } else {
                console.log(`${item.nome} não pode equipar pae.`);
            }
        } else {
            console.log(`${this.nome} não possui ${item.nome} na bag ecológica.`);
        }
    }
}
