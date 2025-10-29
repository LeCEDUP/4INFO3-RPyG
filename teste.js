// import * as readline from "readline-sync";

// Desenvolva aqui o teste das classes em JS
import { Personagem } from "./personagens/personagem.js";
import { Monstro } from "./personagens/monstro.js";
import { Heroi } from "./personagens/heroi.js";
import { Espada } from "./itens/arma.js";

// os monstros continuam sempre sendo derrotados.

// Esses sao os atributos dos monstros são:

// export class Dragao extends Monstro{
//     constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0){
//         super(nome, vida, ataque, defesa, nivel, experiencia)
//         this.nome = nome;
//         this.vida = 200;
//         this.ataque = 100;
//         this.defesa = 160;
//                 }
//             }



// export class Espectro extends Monstro{
//     constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0){
//         super(nome, vida, ataque, defesa, nivel, experiencia)
//         this.nome = nome;
//         this.vida = 110;
//         this.ataque = 95;


//         this.defesa = 60;
//     }
// }


// export class Vampiro extends Monstro{
//     constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0){
//         super(nome, vida, ataque, defesa, nivel, experiencia)
//         this.nome = nome;
//         this.vida = 160;
//         this.ataque = 105;
//         this.defesa = 70;
//     }
// }

// E dos herois são:

// export class Cavaleiro extends Heroi{
//                 constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0, inventario=null){
//                     super(nome, vida, ataque, defesa, nivel, experiencia, inventario)
//                     this.nome = nome;
//                     this.vida = 100;
//                     this.ataque = 70;
//                     this.defesa = 120;
//                 }
//             }

// export class Mago extends Heroi{
//                 constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0, inventario=null){
//                     super(nome, vida, ataque, defesa, nivel, experiencia, inventario)
//                     this.nome = nome;
//                     this.vida = 100;
//                     this.ataque = 110;
//                     this.defesa = 60;
//                 }
//             }

// export class Arqueiro extends Heroi{
//                 constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0, inventario=null){
//                     super(nome, vida, ataque, defesa, nivel, experiencia, inventario)
//                     this.nome = nome;
//                     this.vida = 100;
//                     this.ataque = 85;
//                     this.defesa = 80;
//                 }
//             }

// Porém, os quando vc é heroi, pode surgir com armas e armaduras aleatorias:

// export class Arma extends Item{
//     constructor(nome, descricao, bonus_ataque){
//         super(nome, descricao);
//         this.bonus_ataque = bonus_ataque;
//     }
// }


// //Tipos de armas
// export class Espada extends Arma {}
// export class Arco extends Arma {}
// export class Cajado extends Arma {}

// // Armas 
// export const espadas = [
//     new Espada("Espada de Ferro", "Uma lâmina simples e confiável.", 25),
//     new Espada("Espada Flamejante", "Forjada nas chamas de um vulcão.", 50),
//     new Espada("Lâmina do Rei Caído", "Espada amaldiçoada, envolta em trevas.", 80)
// ];

// export const arcos = [
//     new Arco("Arco de Carvalho", "Arco rústico e resistente.", 30),
//     new Arco("Arco Élfico", "Leve, preciso e silencioso.", 50),
//     new Arco("Arco das Sombras", "Arma sombria que dispara flechas negras.", 65)
// ];

// export const cajados = [
//     new Cajado("Cajado de Carvalho Antigo", "Canaliza magia natural.", 20),
//     new Cajado("Cajado Arcano", "Amplifica poder elemental.", 35),
//     new Cajado("Cajado do Vazio", "Concentra energia proibida.", 50)
// ];



// export class Armadura extends Item{
//     constructor(nome, descricao, bonus_defesa){
//         super(nome, descricao);
//         this.bonus_defesa = bonus_defesa;
//     }
// };

// export class ArmaduraCavaleiro extends Armadura {}
// export class ArmaduraArqueiro extends Armadura {}
// export class TunicaMago extends Armadura {}

// // Armaduras
// export const armadurasCavaleiro = [
//     new ArmaduraCavaleiro("Armadura de Ferro", "Pesada e confiável. Ideal para combates diretos.", 80),
//     new ArmaduraCavaleiro("Armadura Real", "Forjada com aço refinado e brasões do reino.", 150),
//     new ArmaduraCavaleiro("Armadura do Destino", "Relíquia ancestral que protege contra o mal.", 300)
// ];

// export const armadurasArqueiro = [
//     new ArmaduraArqueiro("Couro Leve", "Flexível e ideal para movimentos rápidos.", 30),
//     new ArmaduraArqueiro("Traje da Floresta", "Camuflagem perfeita e resistência moderada.", 75),
//     new ArmaduraArqueiro("Cota do Caçador", "Feita com escamas e tecidos reforçados.", 120)
// ];

// export const tunicasMago = [
//     new TunicaMago("Túnica do Aprendiz", "Simples, mas amplifica o foco mágico.", 15),
//     new TunicaMago("Túnica Arcana", "Tecida com fios encantados e runas antigas.", 40),
//     new TunicaMago("Túnica do Sábio", "Rara e poderosa, protege contra energias sombrias.", 60)
// ];

// E quando voce é monstro, os herois aleatorios sempre usam arma e armadura mediana(de numero 2 das listas acima):