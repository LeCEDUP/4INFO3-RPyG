import {Personagem} from './personagem.js';
import {Arma} from './itens/arma.js';
import {Armadura} from './itens/armadura.js';

export class Heroi extends Personagem {
    constructor(nome, vida, ataque, defesa, nivel = 1, experiencia = 0, inventario = 0){
       super(nome, vida, ataque, defesa);
       this.nivel = nivel;
       this.experiencia = experiencia;
       this.inventario = inventario;
    };
    ganharExperiencia(exp){
        this.experiencia += exp;
        console.log(${this.nome} ganhou ${exp} de experiencia. total: ${this.experiencia});
        if (this.experiencia >= this.nivel*100)
            this.subirNivel();
    };

    subirNivel(){
        this.nivel += 1;
        this.vida += 20;
        this.ataque += 5;
        this.defsa += 5;
        this.experiencia -= (this.nivel -1)*100;
        
        console.log(${this.nome} subiu para o nivel ${this.nivel}!); 
    };
    equiparItem(item){
        this.inventario.push(item);
        console.log(${this.nome} equipou ${item.nome || 'um item'});
    };

};