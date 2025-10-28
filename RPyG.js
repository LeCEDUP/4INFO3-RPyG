<<<<<<< HEAD
=======
// Desenvolva aqui o menu para interagir com o usuário em JS

>>>>>>> 63c23c6144b4c16e2364372577d9f234c7388b0f
import { Heroi } from "./heroi.js";
import { Monstro } from "./monstro.js";
import { Arma } from "./arma.js";
import { Armadura } from "./armadura.js";

// Função para simular a batalha
function iniciarBatalha(heroi, monstro) {
    console.log(`\n--- Batalha: ${heroi.nome} vs ${monstro.nome} ---`);
    let rodada = 1;

    while (heroi.estaVivo() && monstro.estaVivo()) {
        console.log(`\n--- Rodada ${rodada++} ---`);
<<<<<<< HEAD

=======
        
>>>>>>> 63c23c6144b4c16e2364372577d9f234c7388b0f
        // Herói ataca
        heroi.atacar(monstro);
        if (!monstro.estaVivo()) break;

        // Monstro ataca
        monstro.atacar(heroi);
    }

    if (heroi.estaVivo()) {
        console.log(`\n*** VITÓRIA! ${heroi.nome} derrotou o ${monstro.nome}! ***`);
        // Herói ganha uma quantidade fixa de XP
        heroi.ganharExperiencia(150); 
    } else {
        console.log(`\n*** DERROTA! ${heroi.nome} foi derrotado pelo ${monstro.nome}. ***`);
    }
}

// Função principal do jogo
function main() {
    console.log("===================================");
    console.log("        Bem-vindo ao RPyG!         ");
    console.log("===================================");

    // Criação do Herói
    const heroi = new Heroi("Conan", 100, 15, 5);
<<<<<<< HEAD

=======
    
>>>>>>> 63c23c6144b4c16e2364372577d9f234c7388b0f
    // Criação de Itens e Inventário
    const espada = new Arma("Espada do Poder", "Uma espada que brilha.", 10);
    const armadura = new Armadura("Armadura de Placas", "Proteção pesada.", 8);
    heroi.inventario.push(espada, armadura);
<<<<<<< HEAD

=======
    
>>>>>>> 63c23c6144b4c16e2364372577d9f234c7388b0f
    // Equipa itens iniciais
    heroi.equiparItem(espada);
    heroi.equiparItem(armadura);

    // Criação do Monstro
    const monstro = new Monstro("Lobo Gigante", 60, 12, 3, "Animal");

    let opcao = 0;
    while (opcao !== 3) {
        console.log("\n--- Menu Principal ---");
        console.log(`Herói: ${heroi.nome} (Nível ${heroi.nivel}, Vida: ${heroi.vida})`);
        console.log("1. Iniciar Batalha (Contra Lobo Gigante)");
        console.log("2. Ver Status do Herói");
        console.log("3. Sair");

        // Simulação de entrada do usuário (em um ambiente real, usaria 'prompt' ou 'readline')
        // Para o propósito deste exercício, vamos simular a sequência de ações.
        if (opcao === 0) {
            opcao = 1; // Primeira ação: Iniciar Batalha
        } else if (opcao === 1) {
            opcao = 2; // Segunda ação: Ver Status
        } else if (opcao === 2) {
            opcao = 3; // Terceira ação: Sair
        }

        switch (opcao) {
            case 1:
                // Recria o monstro para uma nova batalha
                const novoMonstro = new Monstro(monstro.nome, monstro.vida, monstro.ataque, monstro.defesa, monstro.tipo);
                iniciarBatalha(heroi, novoMonstro);
                break;
            case 2:
                console.log("\n--- Status do Herói ---");
                console.log(`Nome: ${heroi.nome}`);
                console.log(`Nível: ${heroi.nivel}`);
                console.log(`Experiência: ${heroi.experiencia}`);
                console.log(`Vida: ${heroi.vida}`);
                console.log(`Ataque: ${heroi.ataque}`);
                console.log(`Defesa: ${heroi.defesa}`);
                console.log(`Inventário: ${heroi.inventario.map(item => item.nome).join(", ")}`);
                break;
            case 3:
                console.log("\nObrigado por jogar RPyG! Até a próxima.");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

main();