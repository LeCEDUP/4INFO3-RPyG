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
║       🌙 Bem-vindo à era das lendas! 🌙           ║
╚═════════════════════════════════════════════════╝
`;
console.log(banner_inicial);

const banner_escolha = `
╔══════════════════════════════════════════════════════════════════╗
║                  ⚔️ BKR: Battle Knights Reborn ⚔️                  ║
╠══════════════════════════════════════════════════════════════════╣
║             🌟 Escolha o seu destino, guerreiro! 🌟                ║
╠══════════════════════════════════════════════════════════════════╣
║                          (1) 🏰 Herói                             ║
║                          (2) 👹 Monstro                           ║
╚══════════════════════════════════════════════════════════════════╝
`;
console.log(banner_escolha);
let escolha_classe = readline.questionInt("Digite o numero que corresponde a sua escolha: ")

function escolhaClasse(escolha_classe){
    if (escolha_classe === 1) { //criar tipos de heroi diferentes usando if dentro desse if
        console.log("Você escolheu a classe Herói! Prepare-se para defender o reino com coragem e honra.");
        let heroiModule = new Heroi(readline.question("Digite o nome do seu heroi: "), 100, 20, 10);
        let hero = heroiModule.nome;
    }

    else if (escolha_classe === 2) { //criar tipos de monstro diferentes usando if dentro desse else if
        console.log("Você escolheu a classe Monstro! Prepare-se para semear o caos e dominar o reino.");
        let monstroModule = new Monstro(readline.question("Digite o nome do seu monstro: "), 300, 25, 5, readline.question("Digite o tipo do seu monstro: "));
        let monster = monstroModule.nome;
    }

    else {
        console.log("Escolha inválida! Por favor, reinicie o jogo e selecione uma opção válida.");
    }       
}
escolhaClasse(escolha_classe);


