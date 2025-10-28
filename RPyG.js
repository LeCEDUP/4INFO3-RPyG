// Desenvolva aqui o menu para interagir com o usuário em JS
import * as readline from "readline-sync";

import { Monstro } from "./personagens/monstro.js";
import { Heroi } from "./personagens/heroi.js";
import { Personagem } from "./personagens/personagem.js";

// const banner = `
// ╔══════════════════════════════════════════════════════╗
// ║                                                      ║
// ║   ░░░░░░░░░░░░░░░░░ BEM-VINDO AO ░░░░░░░░░░░░░░░░░   ║
// ║                                                      ║
// ║            ███╗   ███╗ ██████╗ ███████╗              ║
// ║            ████╗ ████║██╔═══██╗██╔════╝              ║
// ║            ██╔████╔██║██║   ██║█████╗                ║
// ║            ██║╚██╔╝██║██║   ██║██╔══╝                ║
// ║            ██║ ╚═╝ ██║╚██████╔╝███████╗              ║
// ║            ╚═╝     ╚═╝ ╚═════╝ ╚══════╝              ║
// ║                                                      ║
// ║             ------- MONSTER HELL -------             ║
// ║                                                      ║
// ╚══════════════════════════════════════════════════════╝
// `;

const banner_inicial = `
╔═════════════════════════════════════════════════╗
║        ⚔️  BKR: Battle Knights Reborn ⚔️          ║ 
╠═════════════════════════════════════════════════╣
║       🌙 Bem-vindo à era das lendas! 🌙         ║
╚═════════════════════════════════════════════════╝
`;
console.log(banner_inicial);

const banner_escolha = `
╔══════════════════════════════════════════════════════════════════╗
║                  ⚔️ BKR: Battle Knights Reborn ⚔️                  ║
╠══════════════════════════════════════════════════════════════════╣
║             🌟 Escolha o seu destino, guerreiro! 🌟              ║
╠══════════════════════════════════════════════════════════════════╣
║                          (1) 🏰 Herói                            ║
║                          (2) 👹 Monstro                          ║
╚══════════════════════════════════════════════════════════════════╝
`;
console.log(banner_escolha);
let escolha_classe = readline.questionInt("Digite o numero que corresponde a sua escolha: ");

function escolhaClasse(escolha_classe){
    if (escolha_classe === 1) {
        const banner_classe_heroi = `
        ╔════════════════════════════════════════════════════════════╗
        ║        Você escolheu a classe Herói! Prepare-se para       ║
        ║        defender o reino com coragem e honra.               ║
        ╠════════════════════════════════════════════════════════════╣
        ║              🛡️ ESCOLHA SUA CLASSE DE HERÓI 🛡️               ║
        ╠════════════════════════════════════════════════════════════╣
        ║ (1) ⚔️ Cavaleiro — Forte, leal e imbatível na espada.       ║
        ║          Vida: 120   Ataque: 70   Defesa: 100              ║
        ║                                                            ║
        ║ (2) 🧙‍♂️ Mago — Mestre dos elementos e da sabedoria arcana. ║
        ║          Vida: 80    Ataque: 110  Defesa: 60               ║
        ║                                                            ║
        ║ (3) 🏹 Arqueiro — Silencioso, veloz e mortal à distância.  ║
        ║          Vida: 90    Ataque: 85   Defesa: 70               ║
        ╚════════════════════════════════════════════════════════════╝
        `; 
        console.log(banner_classe_heroi);

        console.log()
        console.log("Você escolheu a classe Herói! Prepare-se para defender o reino com coragem e honra.");
        console.log();


        const escolha_classe_heroi = readline.questionInt("Digite o numero que corresponde a sua escolha de heroi: ");
        
        if (escolha_classe_heroi === 1){
            let heroiModule = new Heroi(readline.question("Digite o nome do seu heroi: "), 120, 70, 100);
            let hero = heroiModule.nome;
            console.log(`Muito bem, ${hero}. Você escolheu a classe Cavaleiro! Forte, leal e imbatível na espada. Você começará sua jornada com Vida: ${this.vida}, Ataque: ${this.ataque}, Defesa: ${this.defesa}.`);
        }
        else if (escolha_classe_heroi === 2){
            this.vida = 80;
            this.ataque = 110;
            this.defesa = 60;
            console.log(`Você escolheu a classe Mago! Mestre dos elementos e da sabedoria arcana. Você começará sua jornada com Vida: ${this.vida}, Ataque: ${this.ataque}, Defesa: ${this.defesa}.`);
        }
        else if (escolha_classe_heroi === 3){
            this.vida = 90;
            this.ataque = 85;
            this.defesa = 70;
            console.log(`Você escolheu a classe Arqueiro! Silencioso, veloz e mortal à distância. Você começará sua jornada com Vida: ${this.vida}, Ataque: ${this.ataque}, Defesa: ${this.defesa}.`);
        }
        else{
            console.log("Escolha inválida! Por favor, reinicie o jogo e selecione uma opção válida.");
            return;
        }
            


        


        console.log(`O nome do seu herói é: ${hero}`);
        console.log();
    }



    else if (escolha_classe === 2) { //criar tipos de monstro diferentes usando if dentro desse else if
        console.log("Você escolheu a classe Monstro! Prepare-se para semear o caos e dominar o reino.");
        let monstroModule = new Monstro(readline.question("Digite o nome do seu monstro: "), 300, 25, 5, readline.question("Digite o tipo do seu monstro: "));
        let monster = monstroModule.nome;
        console.log(`O nome do seu monstro é: ${monster}`);
        console.log(`O seu monstro é do tipo: ${monstroModule.tipo}`);
        console.log();
    }

    else {
        console.log("Escolha inválida! Por favor, reinicie o jogo e selecione uma opção válida.");
    }       
}
escolhaClasse(escolha_classe);


