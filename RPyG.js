import * as rl from 'readline-sync';
import Heroi from "./personagens/heroi.js";
import Monstro from "./personagens/monstro.js";
import Arma from "./itens/arma.js";
import Armadura from "./itens/armadura.js";


let heroi = null;

// === MONSTROS ALEATÓRIOS ===
function gerarMonstro() {
  const tipos = [
    new Monstro("Creeper", "Pequeno", 40, 16, 2),
    new Monstro("Zombie", "Pequeno", 35, 20, 1),
    new Monstro("Enderman", "Médio", 70, 24, 3),
    new Monstro("Herobrine", "Grande", 150, 36, 5)
  ];

  return tipos[Math.floor(Math.random() * tipos.length)];
}

// === COMBATE ===
function batalha(monstro) {
  console.log(`\n🔥 Um ${monstro.nome} apareceu!`);

  let turno = 1;
  let sair = false;
  while (heroi.estaVivo() && monstro.estaVivo() && !sair) {
    sair = rl.question("\nPressione ENTER para continuar a batalha ou digite 'q' para fugir: ") === "q";
    if (sair) {
      console.log(`${heroi.nome} fugiu da batalha!`);
      break;
    }
    console.log(`\n--- Turno ${turno} ---`);

    const resHeroi = heroi.atacar(monstro);
    console.log(`${heroi.nome} causa ${resHeroi.dano} de dano. Vida do monstro: ${monstro.vida}/${monstro.maxVida}`);

    if (!monstro.estaVivo()) {
      console.log(`✅ ${monstro.nome} foi derrotado!`);
      const exp = monstro.experienciaAoDerrotar();
      heroi.ganharExperiencia(exp);
      console.log(`⭐ Experiência: +${exp} | Nível: ${heroi.nivel}\n`);
      return;
    }

    const resMonstro = monstro.atacar(heroi);
    console.log(`${monstro.nome} causa ${resMonstro.dano} de dano! Vida do herói: ${heroi.vida}/${heroi.maxVida}`);

    if (!heroi.estaVivo()) {
      console.log(`💀 ${heroi.nome} foi derrotado...`);
      console.log(`GAME OVER`);
      process.exit();
    }

    turno++;
  }
}

// === FUNÇÕES PARA MENU ===
function mostrarStatus() {
  console.log(`
📋 STATUS DO HERÓI:
Nome: ${heroi.nome}
Vida: ${heroi.vida}/${heroi.maxVida}
Ataque: ${heroi.calcularAtaqueTotal()}
Defesa: ${heroi.calcularDefesaTotal()}
Nível: ${heroi.nivel}
Exp: ${heroi.experiencia}
`);
}

function mostrarInventario() {
  if (heroi.inventario.length === 0) {
    console.log("Inventário vazio!");
    return;
  }

  console.log("\n🎒 INVENTÁRIO:");
  heroi.inventario.forEach((item, i) => {
    console.log(`${i + 1} - ${item.nome}`);
  });
}

function explorar() {
  console.log("\nVocê está explorando...");
  batalha(gerarMonstro());
}


// === MENU PRINCIPAL ===
function menu() {
  console.log(`
=========================
🎮 MENU RPG
1 - Ver Status
2 - Inventário
3 - Explorar
4 - Sair
=========================
`);

  let op = rl.question("Escolha uma opção: ");
  switch (op) {
    case "1":
      mostrarStatus();
      break;

    case "2":
      mostrarInventario();
      break;

    case "3":
      explorar();
      break;

    case "4":
      console.log("Saindo do jogo...");
      process.exit();

    default:
      console.log("Opção inválida!");
  }
  menu();
}

// === INICIALIZAÇÃO DO JOGO ===
function iniciarJogo() {
  let nome = rl.question("Digite o nome do seu herói: ");
  heroi = new Heroi(nome);

  // Itens iniciais
  const espada = new Arma("Espada de Dima", "Avançada, mas útil", 5);
  const couraca = new Armadura("Armadura de Ouro", "Proteção básica", 3);

  heroi.adicionarAoInventario(espada);
  heroi.adicionarAoInventario(couraca);
  heroi.equiparItem(espada);
  heroi.equiparItem(couraca);

  console.log(`\nHerói criado: ${heroi.nome}! A aventura começa...\n`);
  menu();
}

iniciarJogo();