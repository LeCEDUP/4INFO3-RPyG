// Desenvolva aqui o menu para interagir com o usuário em JS
import * as readline from "readline-sync";

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
║                          (1) 🏰 Herói                             ║
║                          (2) 👹 Monstro                          ║
╚══════════════════════════════════════════════════════════════════╝
`;
console.log(banner_escolha);
let escolha_classe = readline.questionInt("Digite o número que corresponde à sua escolha: ")

if (escolha_classe === 1) {
    console.log("Você escolheu a classe Herói! Prepare-se para defender o reino com coragem e honra.");
    const heroiModule = await import('./heroi.js');
    heroiModule.iniciarHeroi();
}
else if (escolha_classe === 2) {
    console.log("Você escolheu a classe Monstro! Prepare-se para semear o caos e dominar o reino.");
    const monstroModule = await import('./monstro.js');
    monstroModule.iniciarMonstro();
}
else {
    console.log("Escolha inválida! Por favor, reinicie o jogo e selecione uma opção válida.");
}       
