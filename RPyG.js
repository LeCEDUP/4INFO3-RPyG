// Desenvolva aqui o menu para interagir com o usuário em JS
import * as readline from "readline-sync";

import { espadas, arcos, cajados } from "./itens/arma.js";
import { armadurasCavaleiro, armadurasArqueiro, tunicasMago} from "./itens/armadura.js"

import { Monstro } from "./personagens/monstro.js";
import { Dragao } from "./personagens/monstro.js";
import { Espectro } from "./personagens/monstro.js";
import { Vampiro } from "./personagens/monstro.js";     

import { lista_monstros as monstros_lista } from "./personagens/monstro.js";
import { lista_herois as herois_lista } from "./personagens/heroi.js";

import { Heroi } from "./personagens/heroi.js";
import { Personagem } from "./personagens/personagem.js";
import { Cavaleiro } from "./personagens/heroi.js";
import { Mago } from "./personagens/heroi.js";
import { Arqueiro } from "./personagens/heroi.js";

// //================================================================================
// //NPCs Heróis
// let npcCavaleiro = new Cavaleiro("Cavaleiro Pedro Augusto")
// const armaNpcCavaleiro = espadas[2]
// const armaduraNpcCavaleiro = armadurasCavaleiro[2]
// npcCavaleiro.inventario = [armaNpcCavaleiro, armaduraNpcCavaleiro]
// // npcCavaleiro.equipar_item(armaNpcCavaleiro)
// // npcCavaleiro.equipar_item(armaduraNpcCavaleiro)
// //---------------------------------------------------------------------------------             
// let npcMago = new Mago("Mago Miguel")
// const armaNpcMago = cajados[2]
// const armaduraNpcMago = tunicasMago[2]
// npcMago.inventario = [armaNpcMago, armaduraNpcMago]
// // npcMago.equipar_item(armaNpcMago)
// // npcMago.equipar_item(armaduraNpcMago)
// //---------------------------------------------------------------------------------
// let npcArqueiro = new Arqueiro("Arqueiro Caio")
// const armaNpcArqueiro = arcos[2]
// const armaduraNpcArqueiro = armadurasArqueiro[2]
// npcArqueiro.inventario = [armaNpcArqueiro, armaduraNpcArqueiro]
// // npcArqueiro.equipar_item(armaNpcArqueiro)
// // npcArqueiro.equipar_item(armaduraNpcArqueiro)
// //================================================================================

//================================================================================
//NPCs Monstros
// let npcDragao = new Dragao("Dragão Ancião")
// let npcEspectro = new Espectro("Fantasma da Babilônia")
// let npcVampiro = new Vampiro("Vampiro Nosferatu")
//================================================================================
// export {npcCavaleiro, npcMago, npcArqueiro, npcDragao, npcEspectro, npcVampiro};

// console.log("npcCavaleiro:", npcCavaleiro.nome, npcCavaleiro.vida, npcCavaleiro.ataque, npcCavaleiro.defesa);

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
console.log();

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
        console.log("=================================================================================================")
        console.log()
        let classe_heroi = "";
        let personagem_principal = "";

        const escolha_classe_heroi = readline.questionInt("Digite o numero que corresponde a sua escolha de heroi: ");
        
        if (escolha_classe_heroi === 1){
            console.log()
            let classe_cavaleiro = new Cavaleiro(readline.question("Digite o nome do seu heroi: "));
            console.log()
            personagem_principal = classe_cavaleiro

            classe_heroi = "Cavaleiro";

            console.log(`Muito bem, ${classe_cavaleiro.nome}. Você escolheu a classe ${classe_heroi}! Forte, leal e imbatível na espada. Você começará sua jornada com Vida: ${classe_cavaleiro.vida}, Ataque: ${classe_cavaleiro.ataque}, Defesa: ${classe_cavaleiro.defesa}.`);
        }

        else if (escolha_classe_heroi === 2){
            let classe_mago = new Mago(readline.question("Digite o nome do seu heroi: "));
            personagem_principal = classe_mago

            classe_heroi = "Mago";

            console.log(`Muito bem, ${classe_mago.nome}. Você escolheu a classe ${classe_heroi}! Mestre dos elementos e da sabedoria arcana. Você começará sua jornada com Vida: ${classe_mago.vida}, Ataque: ${classe_mago.ataque}, Defesa: ${classe_mago.defesa}.`);
        }

        else if (escolha_classe_heroi === 3){
            let classe_arqueiro = new Arqueiro(readline.question("Digite o nome do seu heroi: "));
            personagem_principal = classe_arqueiro

            classe_heroi = "Arqueiro";

            console.log(`Muito bem, ${classe_arqueiro.nome}. Você escolheu a classe ${classe_heroi}! Silencioso, veloz e mortal à distância. Você começará sua jornada com Vida: ${classe_arqueiro.vida}, Ataque: ${classe_arqueiro.ataque}, Defesa: ${classe_arqueiro.defesa}.`);
        }

        else{
            console.log("Escolha inválida! Por favor, reinicie o jogo e selecione uma opção válida.");
            return;
        }

        console.log();
        console.log("=================================================================================================")
        console.log();




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

        personagem_principal.inventario.push(arma)

        console.log(`Você recebeu uma arma escolhida pelos deuses: ${arma.nome} - ${arma.descricao} (Bônus de Ataque: ${arma.bonus_ataque})`);
        console.log();
        
        // console.log(personagem_principal.inventario)



        function gerarArmadura(classe_heroi) {
            if (classe_heroi === "Cavaleiro") {
                return armadurasCavaleiro[Math.floor(Math.random() * armadurasCavaleiro.length)];
            } else if (classe_heroi === "Arqueiro") {
                return armadurasArqueiro[Math.floor(Math.random() * armadurasArqueiro.length)];
            } else if (classe_heroi === "Mago") {
                return tunicasMago[Math.floor(Math.random() * tunicasMago.length)];
            } else {
                return null;
            }
        }
        const armadura = gerarArmadura(classe_heroi);

        console.log(`Você recebeu uma armadura escolhida pelos deuses: ${armadura.nome} - ${armadura.descricao} (Bônus de Defesa: ${armadura.bonus_defesa})`);
        console.log();

        personagem_principal.inventario.push(armadura)

        console.log(`
                     ========================================================================================
                     |                       SEU INVEVENTÁRIO                                                              
                     ========================================================================================
                     |                                                                                                 
                     |${personagem_principal.nome}, aqui estão os                                                 
                     |itens que você possui:                                                                               
                     |                                                                                                  
                     |1. Arma: ${arma.nome} - ${arma.descricao}                                                          
                     |(Bônus de Ataque: ${arma.bonus_ataque})                                                
                     |2. Armadura: ${armadura.nome} - ${armadura.descricao}                                   
                     |(Bônus de Defesa: ${armadura.bonus_defesa})                                             
                     ========================================================================================     
                     `);

        // console.log(personagem_principal.nome, personagem_principal.vida, personagem_principal.ataque, personagem_principal.defesa);
        console.log();
        personagem_principal.equipar_item(arma)
        console.log();
        personagem_principal.equipar_item(armadura)
        console.log();

        console.log(`
            ===========================================
            Seus atributos atuais são: 
            Vida: ${personagem_principal.vida} 
            Ataque: ${personagem_principal.ataque} 
            Defesa: ${personagem_principal.defesa}.
            ===========================================
        `);
        console.log();

        //================================================================================
        //INICIANDO A AVENTURA DO HERÓI
        console.log(`Sua aventura começa agora, ${personagem_principal.nome} o ${classe_heroi}! Que a sorte esteja ao seu favor!`);
        //================================================================================
        
        function gerarMonstroAleatorio() {
            const indice = Math.floor(Math.random() * monstros_lista.length);
            const monstro_inimigo = monstros_lista[indice];

            console.log(`
        👹 Um ${monstro_inimigo.nome} apareceu!
         -> Vida: ${monstro_inimigo.vida} | Ataque: ${monstro_inimigo.ataque} | Defesa: ${monstro_inimigo.defesa}
            `);

            return monstro_inimigo;
        }
        const monstroInimigo = gerarMonstroAleatorio();

        console.log();
        console.log(`
            -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                        A MISSÃO COMEÇA AGORA!
            -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
            
            Você está em seus aposentos no castelo da rainha Letícia II, apreciando a vista do horizonte quando de repente, um mensageiro ofegante entra correndo.
            "Herói, um ${monstroInimigo.nome} está atacando a vila próxima! Precisamos de sua ajuda!" ele exclama.
            Com determinação, você se levanta, pega sua ${arma.nome} e veste sua ${armadura.nome}, e parte em direção à vila para enfrentar o perigo.
            Chegando lá, você vê o ${monstroInimigo.nome} causando destruição. É hora de agir!
            `);
        
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
        ║ (3) 🦇 Vampiro                               ║
        ║     Vida: 90    Ataque: 105  Defesa: 70      ║
        ║     → Ágil, elegante e sedento por sangue.   ║
        ╚══════════════════════════════════════════════╝
        `;
        console.log(banner_classe_monstro);

        console.log();
        console.log("Você escolheu a classe Monstro! Prepare-se para semear o caos e a destruição.");
        console.log();

        let personagem_principal = "";

        const escolha_classe_monstro = readline.questionInt("Digite o numero que corresponde a sua escolha de monstro: ");

        if (escolha_classe_monstro === 1){
            let classe_dragao = new Dragao(readline.question("Digite o nome do seu monstro: "));

            personagem_principal = classe_dragao

            console.log(`Muito bem, ${classe_dragao.nome}. Você escolheu a classe Dragão! Senhor do fogo e do caos. Você começará sua jornada com Vida: ${classe_dragao.vida}, Ataque: ${classe_dragao.ataque}, Defesa: ${classe_dragao.defesa}.`);
            }
        

        else if (escolha_classe_monstro === 2){
            let classe_espectro = new Espectro(readline.question("Digite o nome do seu monstro: "));

            personagem_principal = classe_espectro

            console.log(`Muito bem, ${classe_espectro.nome}. Você escolheu a classe Espectro! Espírito sombrio que atravessa paredes. Você começará sua jornada com Vida: ${classe_espectro.vida}, Ataque: ${classe_espectro.ataque}, Defesa: ${classe_espectro.defesa}.`);
        }

        else if (escolha_classe_monstro === 3){
            let classe_vampiro = new Vampiro(readline.question("Digite o nome do seu monstro: "));

            personagem_principal = classe_vampiro

            console.log(`Muito bem, ${classe_vampiro.nome}. Você escolheu a classe Vampiro! Ágil, elegante e sedento por sangue. Você começará sua jornada com Vida: ${classe_vampiro.vida}, Ataque: ${classe_vampiro.ataque}, Defesa: ${classe_vampiro.defesa}.`);
        }

        else{
            console.log("Escolha inválida! Por favor, selecione uma opção válida.");
        }

        function gerarHeroiAleatorio() {
    const indice = Math.floor(Math.random() * herois_lista.length);
    const heroi_inimigo = herois_lista[indice];

    console.log(`
    Um herói surgiu no campo de batalha!
    ${heroi_inimigo.nome}
    Vida: ${heroi_inimigo.vida} | ⚔️ Ataque: ${heroi_inimigo.ataque} | 🛡️ Defesa: ${heroi_inimigo.defesa}
    `);

    return heroi_inimigo;
    }

    const heroiInimigo = gerarHeroiAleatorio();
    console.log();
    console.log(`
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                O CONFLITO COMEÇA AGORA!
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
    
    if(escolha_classe_monstro === 1){
        console.log(`Você, ${personagem_principal.nome}, está descansando passificamente em sua caverna. Quando de repente o Imperador Dragão te convoca. Ele diz que os humanos estão perturbando a paz do planeta, e que te escolheu como seu emissário para pôr um fim nessa bagunça.
    Você voa até a vila mais próxima. Em meio ao caos e destruição, você avista ${heroiInimigo.nome}, um herói determinado a te derrotar para proteger os aldeões.
        `);
    }

    else if(escolha_classe_monstro === 2){
        console.log(`Você, ${personagem_principal.nome}, costumava ser um lenhador de um vilarejo afastado, todos os aldeões te conheciam como uma pessoa esforçada e trabalhadora. Porém, um novo rei assumiu o trono e começou a cobrar impostos absurdos dos moradores. Como o vilarejo era pobre e não tinha como pagar, o rei ordenou que todos fossem mortos. A infantaria do castelo incendiou o vilarejo, causando a morte de todos. Você vê sua família perecer diante de seus olhos. Sua alma não encontra paz, e você retorna como um espírito vingativo, determinado a fazer o rei pagar por seus crimes. 
    Ao chegar no castelo, você assombra a todos e começa a trazer pragas e doença ao reino. Durante uma benção feita pelo Bispo, descobriram que a fonte das pragas era você, o espectro vingativo. Então, o rei convoca ${heroiInimigo.nome}, um herói renomado, e abençoado pelo Bispo para ter a capacidade de te derrotar e salvar o reino.
        `);
    }

    else if(escolha_classe_monstro === 3){
        console.log(`Você, ${personagem_principal.nome}, nasceu em uma nobre família de vampiros. Desde jovem, você foi treinado nas artes do combate e da sedução, tornando-se um guerreiro formidável. No entanto, certo dia, um exército de caçadores de vampiros atacaram a sua família. Durante o ataque, você foi gravemente ferido e deixado para morrer. Por um milagre, você foi acolhido por um grupo de vampiros nômades, que cuidaram de suas feridas e o ajudaram a recuperar suas forças.
    Numa época dificil, seu grupo começou a passar fome, você então avista um pequeno vilarejo humano e decide atacar para saciar a fome do seu grupo. Quando você chega ao vilarejo, você é confrontado por ${heroiInimigo.nome}, um herói local, que jurou proteger os aldeões de qualquer ameaça, incluindo você.
        `);
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






