// Desenvolva aqui a classe Personagem em JS

export class Personagem {
    constructor(nome, ataque, defesa, vida) {
        this.nome = nome;
        this.ataque = ataque;
        this.defesa = defesa;
        this.vida = vida;
    };

    atacar(alvo) {
        let dano = Math.max(0, this.ataque - alvo.defesa);
        alvo.receberDano(dano);
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano.`);
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

    estaVivo() {
        return this.vida > 0;
    };
}

// exports = module.exports = Personagem;