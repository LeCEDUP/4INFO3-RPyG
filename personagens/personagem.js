class Personagem {
  constructor(nome, vida, ataque, defesa) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
  }

  atacar(alvo) {
    const dano = Math.max(0, this.ataque - alvo.defesa);
    alvo.receberDano(dano);
    console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano.`);
  }

  receberDano(dano) {
    this.vida -= dano;
    if (this.vida <= 0) {
      this.vida = 0;
      console.log(`${this.nome} foi derrotado!`);
    } else {
      console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
    }
  }

  estaVivo() {
    return this.vida > 0;
  }
};

