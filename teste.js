import { Personagem } from "./personagem.js";
import { Heroi } from "./heroi.js";
import { Monstro } from "./monstro.js";
import { Arma } from "./arma.js";
import { Armadura } from "./armadura.js";

function testarClasses() {
    console.log("--- Teste de Classes RPyG ---");

    // 1. Testar Personagem
    const p1 = new Personagem("Guerreiro Genérico", 100, 15, 5);
    const p2 = new Personagem("Goblin", 50, 8, 2);
    console.log(`\nPersonagem 1: ${p1.nome}, Vida: ${p1.vida}, Ataque: ${p1.ataque}, Defesa: ${p1.defesa}`);
    console.log(`Personagem 2: ${p2.nome}, Vida: ${p2.vida}, Ataque: ${p2.ataque}, Defesa: ${p2.defesa}`);

    p1.atacar(p2);
    p2.atacar(p1);
    console.log(`P2 está vivo? ${p2.estaVivo()}`);

    // 2. Testar Item, Arma e Armadura
    const espada = new Arma("Espada Longa", "Uma espada de aço.", 10);
    const escudo = new Armadura("Escudo de Madeira", "Um escudo simples.", 5);
    
    // 3. Testar Heroi
    const heroi = new Heroi("Aragorn", 150, 20, 10);
    heroi.inventario.push(espada);
    heroi.inventario.push(escudo);
    console.log(`\nHerói: ${heroi.nome}, Nível: ${heroi.nivel}, XP: ${heroi.experiencia}, Ataque: ${heroi.ataque}, Defesa: ${heroi.defesa}`);
    
    heroi.equiparItem(espada);
    heroi.equiparItem(escudo);
    console.log(`Herói após equipar: Ataque: ${heroi.ataque}, Defesa: ${heroi.defesa}`);

    // 4. Testar Monstro
    const monstro = new Monstro("Dragão", 500, 40, 20, "Chefe");
    console.log(`\nMonstro: ${monstro.nome}, Tipo: ${monstro.tipo}`);

    // 5. Testar Batalha e XP
    console.log("\n--- Início da Batalha ---");
    while (heroi.estaVivo() && monstro.estaVivo()) {
        heroi.atacar(monstro);
        if (monstro.estaVivo()) {
            monstro.atacar(heroi);
        }
    }

    if (heroi.estaVivo()) {
        console.log(`\n${heroi.nome} venceu!`);
        heroi.ganharExperiencia(250); // Deve subir de nível (Nível 1 -> Nível 2)
        heroi.ganharExperiencia(100); // Deve subir de nível (Nível 2 -> Nível 3)
        console.log(`Herói após XP: Nível: ${heroi.nivel}, XP: ${heroi.experiencia}, Vida: ${heroi.vida}`);
    } else {
        console.log(`\n${monstro.nome} venceu!`);
    }
}

testarClasses();