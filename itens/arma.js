// Desenvolva aqui a classe Arma em JS
import {Item} from './item.js';

export class Arma extends Item{
    constructor(nome, descricao, bonus_ataque){
        super(nome, descricao);
        this.bonus_ataque = bonus_ataque;
    }
}


//Tipos de armas
export class Espada extends Arma {}
export class Arco extends Arma {}
export class Cajado extends Arma {}

// Armas 
export const espadas = [
    new Espada("Espada de Ferro", "Uma lâmina simples e confiável.", 25),
    new Espada("Espada Flamejante", "Forjada nas chamas de um vulcão.", 50),
    new Espada("Lâmina do Rei Caído", "Espada amaldiçoada, envolta em trevas.", 80)
];

export const arcos = [
    new Arco("Arco de Carvalho", "Arco rústico e resistente.", 30),
    new Arco("Arco Élfico", "Leve, preciso e silencioso.", 50),
    new Arco("Arco das Sombras", "Arma sombria que dispara flechas negras.", 65)
];

export const cajados = [
    new Cajado("Cajado de Carvalho Antigo", "Canaliza magia natural.", 20),
    new Cajado("Cajado Arcano", "Amplifica poder elemental.", 35),
    new Cajado("Cajado do Vazio", "Concentra energia proibida.", 50)
];

