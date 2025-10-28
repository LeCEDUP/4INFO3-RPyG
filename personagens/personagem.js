class Personagem {
#vida;

  constructor(nome, vida) {
    this.nome = nome;
    this.#vida = vida; 
  }

  
  get vida() {
    return this.#vida;
  }

 
  receberDano(dano) {
    this.#vida = Math.max(0, this.#vida - dano);
  }
}


const heroi = new Personagem("Herói", 100);

console.log(`${heroi.nome} tem ${heroi.vida} de vida.`); // Herói tem 100 de vida.
heroi.receberDano(30);
console.log(`${heroi.nome} agora tem ${heroi.vida} de vida.`); // Herói agora tem 70 de vida.
heroi.receberDano(100);
console.log(`${heroi.nome} agora tem ${heroi.vida} de vida.`); // Herói agora tem 0 de vida.
