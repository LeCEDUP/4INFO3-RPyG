// Classe base Personagem
class Personagem {
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

// Classe derivada Monstro
class Monstro extends Personagem {
  atacar(alvo) {
    console.log(`${this.nome} ruge antes de atacar!`);
    super.atacar(alvo);
  }
}

// --- Exemplo de combate ---
const heroi = new Personagem("Herói", 100, 20);
const dragao = new Monstro("Dragão", 150, 25);

console.log(" Início da batalha! \n");

while (heroi.estaVivo() && dragao.estaVivo()) {
  heroi.atacar(dragao);
  if (!dragao.estaVivo()) break;

  dragao.atacar(heroi);
  console.log(""); // linha em branco entre turnos
}

console.log("⚔️ Fim da batalha! ⚔️");
if (heroi.estaVivo()) {
  console.log(`${heroi.nome} venceu!`);
} else {
  console.log(`${dragao.nome} venceu!`);
}
