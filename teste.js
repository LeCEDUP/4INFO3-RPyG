// Desenvolva aqui o teste das classes em JS

class Item {
  constructor(nome, descricao) {
    this.nome = nome;
    this.descricao = descricao;
  }
}

class Arma extends Item {
  constructor(nome, descricao, dano) {
    super(nome, descricao);
    this.dano = dano;
  }
}

class Armadura extends Item {
  constructor(nome, descricao, defesa) {
    super(nome, descricao);
    this.defesa = defesa;
  }
}

class Personagem {
  constructor(nome, vida, ataque, defesa) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
    this.inventario = [];
  }

  estaVivo() {
    return this.vida > 0;
  }

  receberDano(dano) {
    this.vida -= dano;
    if (this.vida < 0) this.vida = 0;
  }

  atacar(alvo) {
    let danoCausado = Math.max(0, this.ataque - alvo.defesa);
    alvo.receberDano(danoCausado);
    console.log(`${this.nome} atacou ${alvo.nome} e causou ${danoCausado} de dano.`);
  }
}

class Heroi extends Personagem {
  constructor(nome, vida, ataque, defesa) {
    super(nome, vida, ataque, defesa);
  }

  equiparItem(item) {
    if (item instanceof Arma) {
      this.ataque += item.dano;
    } else if (item instanceof Armadura) {
      this.defesa += item.defesa;
    }
  }

  usarItem(item) {
    if (item instanceof Item && this.inventario.includes(item)) {
      if (item.nome === "Poção de Vida") {
        this.vida += 30;
        this.inventario = this.inventario.filter(i => i !== item);
        console.log(`${this.nome} usou ${item.nome}. Vida: ${this.vida}`);
      }
    }
  }
}

class Monstro extends Personagem {
  constructor(nome, vida, ataque, defesa, tamanho) {
    super(nome, vida, ataque, defesa);
    this.tamanho = tamanho;
  }
}


let heroi = new Heroi("Arthur", 100, 15, 5);
let goblin = new Monstro("Goblin", 30, 8, 2, "Pequeno");
let dragao = new Monstro("Dragão", 200, 30, 10, "Grande");

let espada = new Arma("Espada Longa", "Uma espada afiada.", 10);
let escudo = new Armadura("Escudo de Ferro", "Um escudo resistente.", 5);
let pocaoVida = new Item("Poção de Vida", "Restaura 30 de vida.");


console.log("--- Início da Aventura ---");


heroi.inventario.push(espada, escudo, pocaoVida);
console.log(`${heroi.nome} encontrou uma ${espada.nome}, um ${escudo.nome} e uma ${pocaoVida.nome}.`);


heroi.equiparItem(espada);
heroi.equiparItem(escudo);


console.log("--- Batalha contra o Goblin ---");
while (heroi.estaVivo() && goblin.estaVivo()) {
  heroi.atacar(goblin);
  if (goblin.estaVivo()) {
    goblin.atacar(heroi);
  }
}
if (heroi.estaVivo()) {
  console.log(`${heroi.nome} derrotou o ${goblin.nome}!`);
  heroi.ganhoExperiencia = (xp) => console.log(`Ganhou ${xp} de experiência`);
  heroi.ganhoExperiencia(50);
  console.log(`Vida de ${heroi.nome}: ${heroi.vida}`);
  console.log(`Inventário de ${heroi.nome}: ${heroi.inventario.map(i => i.nome)}`);
}


console.log("--- Herói usa poção ---");
heroi.usarItem(pocaoVida);


console.log("--- Batalha contra o Dragão (Desafio Final) ---");
while (heroi.estaVivo() && dragao.estaVivo()) {
  heroi.atacar(dragao);
  if (dragao.estaVivo()) {
    dragao.atacar(heroi);
  }
}

if (heroi.estaVivo()) {
  console.log(`\nParabéns, ${heroi.nome}! Você derrotou o ${dragao.nome} e salvou o reino!`);
  heroi.ganhoExperiencia(200);
} else {
  console.log(`\n${heroi.nome} foi derrotado pelo ${dragao.nome}. Fim de jogo.`);
}
console.log("--- Fim da Aventura ---");
