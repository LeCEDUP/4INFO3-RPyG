export class Personagem {
  constructor(nome, vida, forca) {
    this.nome = nome;
    this.vida = vida;
    this.forca = forca;
  }

  atacar(alvo) {
    console.log(`${this.nome} ataca ${alvo.nome}!`);
    alvo.receberDano(this.forca);
  }

  receberDano(dano) {
    this.vida -= dano;
    if (this.vida <= 0) {
      this.vida = 0;
      console.log(`${this.nome} foi derrotado!`);
    } else {
      console.log(`${this.nome} recebeu ${dano} de dano e agora tem ${this.vida} de vida.`);
    }
  }

  estaVivo() {
    return this.vida > 0;
  }
}

const heroi = new Personagem("Herói", 100);

console.log(`${heroi.nome} tem ${heroi.vida} de vida.`); 
heroi.receberDano(30);
console.log(`${heroi.nome} agora tem ${heroi.vida} de vida.`); 
heroi.receberDano(100);