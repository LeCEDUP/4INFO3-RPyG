// Desenvolva aqui a classe Personagem em JS

class Personagem {
  constructor(nome, vida, ataque, defesa) {
    this.nome = nome;
    this.vida = vida;
    this.maxVida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
  }

  estaVivo() {
    return this.vida > 0;
  }

  receberDano(dano) {
    this.vida -= dano;
    if (this.vida < 0) this.vida = 0;
  }

  atacar(alvo) {
    const dano = Math.max(0, this.ataque - alvo.defesa);
    alvo.receberDano(dano);
    return dano;
  }
}

export default Personagem;
