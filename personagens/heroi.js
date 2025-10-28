// Desenvolva aqui a classe Heroi em JS
import { Personagem } from "./personagem.js";
import { Arma } from "../itens/arma.js";
import { Armadura } from "../itens/armadura.js";

class Heroi extends Personagem {
    constructor(nome, vida, ataque, defesa, nivel = 1, experiencia = 0, inventario = []) {
        // Chama o construtor da classe pai (Personagem)
        super(nome, vida, ataque, defesa);
        
        this.nivel = nivel;
        this.experiencia = experiencia;
        this.inventario = inventario; 
    }
