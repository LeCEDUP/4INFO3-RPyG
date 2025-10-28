// Desenvolva aqui o menu para interagir com o usuário em JS
import * as readline from "readline-sync";

import { espadas, arcos, cajados } from "./itens/arma.js";

import { Monstro } from "./personagens/monstro.js";
import { Dragao } from "./personagens/monstro.js";
import { Espectro } from "./personagens/monstro.js";
import { Vampiro } from "./personagens/monstro.js";     


import { Heroi } from "./personagens/heroi.js";
import { Personagem } from "./personagens/personagem.js";
import { Cavaleiro } from "./personagens/heroi.js";
import { Mago } from "./personagens/heroi.js";
import { Arqueiro } from "./personagens/heroi.js";


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
║             🌟 Escolha o seu destino, guerreiro! 🌟              ║
╠══════════════════════════════════════════════════════════════════╣
║                          (1) 🏰 Herói                            ║
║                          (2) 👹 Monstro                          ║
║                          (3)  X Sair                             ║
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
        ║------------------------------------------------------------║
        ║ (2) 🧙‍♂️ Mago — Mestre dos elementos e da sabedoria arcana. ║
        ║          Vida: 80    Ataque: 110  Defesa: 60               ║
        ║------------------------------------------------------------║
        ║ (3) 🏹 Arqueiro — Silencioso, veloz e mortal à distância.  ║
        ║          Vida: 90    Ataque: 85   Defesa: 70               ║
        ╚════════════════════════════════════════════════════════════╝
        `; 
        console.log(banner_classe_heroi);

        console.log()
        console.log("Você escolheu a classe Herói! Prepare-se para defender o reino com coragem e honra.");
        console.log();
        let classe_heroi = "";

        const escolha_classe_heroi = readline.questionInt("Digite o numero que corresponde a sua escolha de heroi: ");
        
        if (escolha_classe_heroi === 1){
            let classe_cavaleiro = new Cavaleiro(readline.question("Digite o nome do seu heroi: "));
            classe_heroi = "Cavaleiro";

            console.log(`Muito bem, ${classe_cavaleiro.nome}. Você escolheu a classe ${classe_heroi}! Forte, leal e imbatível na espada. Você começará sua jornada com Vida: ${classe_cavaleiro.vida}, Ataque: ${classe_cavaleiro.ataque}, Defesa: ${classe_cavaleiro.defesa}.`);
        }

        else if (escolha_classe_heroi === 2){
            let classe_mago = new Mago(readline.question("Digite o nome do seu heroi: "));
            classe_heroi = "Mago";

            console.log(`Muito bem, ${classe_mago.nome}. Você escolheu a classe ${classe_heroi}! Mestre dos elementos e da sabedoria arcana. Você começará sua jornada com Vida: ${classe_mago.vida}, Ataque: ${classe_mago.ataque}, Defesa: ${classe_mago.defesa}.`);
        }

        else if (escolha_classe_heroi === 3){
            let classe_arqueiro = new Arqueiro(readline.question("Digite o nome do seu heroi: "));
            classe_heroi = "Arqueiro";

            console.log(`Muito bem, ${classe_arqueiro.nome}. Você escolheu a classe ${classe_heroi}! Silencioso, veloz e mortal à distância. Você começará sua jornada com Vida: ${classe_arqueiro.vida}, Ataque: ${classe_arqueiro.ataque}, Defesa: ${classe_arqueiro.defesa}.`);
        }

        else{
            console.log("Escolha inválida! Por favor, reinicie o jogo e selecione uma opção válida.");
            return;
        }



        function gerarArma(c_h) {
            if (c_h === "Cavaleiro") {
                return espadas[Math.floor(Math.random() * espadas.length)];
            } 
            else if (c_h === "Arqueiro") {
                return arcos[Math.floor(Math.random() * arcos.length)];
            } 
            else if (c_h === "Mago") {
                return cajados[Math.floor(Math.random() * cajados.length)];
            } 
            else {
                return null;
            }
        }
        
        const arma = gerarArma(classe_heroi);

        console.log(`Você recebeu uma arma: ${arma.nome} - ${arma.descricao} (Bônus de Ataque: ${arma.bonus_ataque})`);
        console.log();
    }



    else if (escolha_classe === 2) {
        const banner_classe_monstro = `
        ╔══════════════════════════════════════════════╗
        ║     👹 ESCOLHA SUA CLASSE DE MONSTRO 👹      ║
        ╠══════════════════════════════════════════════╣
        ║ (1) 🐉 Dragão                                ║
        ║     Vida: 150   Ataque: 100  Defesa: 90      ║
        ║     → Senhor do fogo e do caos.              ║
        ║----------------------------------------------║
        ║ (2) 💀 Espectro                              ║
        ║     Vida: 70    Ataque: 95   Defesa: 60      ║
        ║     → Espírito sombrio que atravessa paredes.║
        ║----------------------------------------------║
        ║ (5) 🦇 Vampiro                               ║
        ║     Vida: 90    Ataque: 105  Defesa: 70      ║
        ║     → Ágil, elegante e sedento por sangue.   ║
        ╚══════════════════════════════════════════════╝
        `;
        console.log(banner_classe_monstro);

        console.log();
        console.log("Você escolheu a classe Monstro! Prepare-se para semear o caos e a destruição.");
        console.log();

        const escolha_classe_monstro = readline.questionInt("Digite o numero que corresponde a sua escolha de monstro: ");

        if (escolha_classe_monstro === 1){
            let classe_dragao = new Dragao(readline.question("Digite o nome do seu monstro: "));

            console.log(`Muito bem, ${classe_dragao.nome}. Você escolheu a classe Dragão! Senhor do fogo e do caos. Você começará sua jornada com Vida: ${classe_dragao.vida}, Ataque: ${classe_dragao.ataque}, Defesa: ${classe_dragao.defesa}.`);
            }
        

        else if (escolha_classe_monstro === 2){
            let classe_espectro = new Espectro(readline.question("Digite o nome do seu monstro: "));

            console.log(`Muito bem, ${classe_espectro.nome}. Você escolheu a classe Espectro! Espírito sombrio que atravessa paredes. Você começará sua jornada com Vida: ${classe_espectro.vida}, Ataque: ${classe_espectro.ataque}, Defesa: ${classe_espectro.defesa}.`);
        }

        else if (escolha_classe_monstro === 3){
            let classe_vampiro = new Vampiro(readline.question("Digite o nome do seu monstro: "));

            console.log(`Muito bem, ${classe_vampiro.nome}. Você escolheu a classe Vampiro! Ágil, elegante e sedento por sangue. Você começará sua jornada com Vida: ${classe_vampiro.vida}, Ataque: ${classe_vampiro.ataque}, Defesa: ${classe_vampiro.defesa}.`);
        }

        else{
            console.log("Escolha inválida! Por favor, selecione uma opção válida.");
        }
    
    }

    else if (escolha_classe === 3) {
        console.log("Saindo do jogo. Até a próxima!");
        return;
    }

    else{
        console.log("Escolha inválida! Por favor, reinicie o jogo e selecione uma opção válida.");
        return;
    }
}
escolhaClasse(escolha_classe);







