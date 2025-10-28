// Desenvolva aqui a classe Heroi em JS
class Heroi extends Personagem {
    constructor(nome, vida, ataque, defesa, nivel = 1, experiencia = 0, inventario = []) {
        // Chama o construtor da classe pai (Personagem)
        super(nome, vida, ataque, defesa);
        
        this.nivel = nivel;
        this.experiencia = experiencia;
        this.inventario = inventario; 
    }
