// Desenvolva aqui a classe Personagem em JS
export default class Personagem {
  constructor(nome, hpMax, forca = 1, defesa = 0) {
    this.nome = nome;
    this.hpMax = hpMax;
    this.hp = hpMax;
    this.forca = forca;
    this.defesa = defesa;
    this.nivel = 1;
    this.inventario = [];
    this.arma = null;
  }

  estaVivo() {
    return this.hp > 0;
  }

  receberDano(valor) {
    const dano = Math.max(0, valor - this.defesa);
    this.hp = Math.max(0, this.hp - dano);
    return dano;
  }

  atacar(alvo) {
    const base = this.arma ? this.arma.dano() : Math.floor(Math.random() * (4 + this.forca));
    return alvo.receberDano(base + this.forca);
  }

  adicionarItem(item) {
    this.inventario.push(item);
  }
}