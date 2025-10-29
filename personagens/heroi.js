// Desenvolva aqui a classe Heroi em JS
// class Heroi(Personagem):
//     def __init__(self, nome, vida, ataque, defesa, nivel=1, experiencia=0, inventario=None):
//         super().__init__(nome, vida, ataque, defesa)
//         self.nivel = nivel
//         self.experiencia = experiencia
//         self.inventario = inventario if inventario is not None else []

//     def ganhar_experiencia(self, exp):
//         self.experiencia += exp
//         print(f"{self.nome} ganhou {exp} de experiência. Total: {self.experiencia}")
//         while self.experiencia >= self.nivel * 100:
//             self.subir_nivel()

    // def subir_nivel(self):
    //     self.nivel += 1
    //     self.vida += 20
    //     self.ataque += 5
    //     self.defesa += 2
    //     self.experiencia -= (self.nivel - 1) * 100
    //     print(f"{self.nome} subiu para o nível {self.nivel}! Seus atributos aumentaram.")

    // def equipar_item(self, item):
    //     if item in self.inventario:
    //         if isinstance(item, Arma):
    //             self.ataque += item.bonus_ataque
    //             print(f"{self.nome} equipou {item.nome}. Ataque atual: {self.ataque}")
    //         elif isinstance(item, Armadura):
    //             self.defesa += item.bonus_defesa
    //             print(f"{self.nome} equipou {item.nome}. Defesa atual: {self.defesa}")
    //         else:
    //             print(f"{item.nome} não pode ser equipado.")
    //     else:
    //         print(f"{self.nome} não possui {item.nome} no inventário.")
import { Personagem } from "./personagem.js";
import { Arma } from "../itens/arma.js";
import { Armadura } from "../itens/armadura.js";


export class Heroi extends Personagem{
    constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0){
        super(nome, vida, ataque, defesa)
        this.nivel = nivel
        this.experiencia = experiencia
        this.inventario = []
    }

    ganhar_experiencia(exp){
        this.experiencia += exp
        console.log(`${this.nome} ganhou ${exp} de experiência. Total: ${this.experiencia}`)
        while (this.experiencia >= this.nivel * 100){
        this.subir_nivel()
        }
    }

    subir_nivel(){
        this.nivel += 1
        this.vida += 20
        this.ataque += 10
        this.defesa += 
        this.experiencia -= (this.nivel - 1) * 100
        console.log(`${this.nome} subiu para o nível ${this.nivel}! Seus atributos aumentaram.`)}

    equipar_item(item){
        if(this.inventario.includes(item)){
            if(item instanceof Arma){
                this.ataque += item.bonus_ataque
                console.log(`${this.nome} equipou ${item.nome}. Ataque atual: ${this.ataque}`)}
                
            else if(item instanceof Armadura){
                this.defesa += item.bonus_defesa
                console.log(`${this.nome} equipou ${item.nome}. Defesa atual: ${this.defesa}`)}

            else{console.log(`${item.nome} não pode ser equipado.`)}
            
        }
        else{
            console.log(`${this.nome} não possui ${item.nome} no inventário.`)}
    }
}



export class Cavaleiro extends Heroi{
                constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0, inventario=null){
                    super(nome, vida, ataque, defesa, nivel, experiencia, inventario)
                    this.nome = nome;
                    this.vida = 140;
                    this.ataque = 90;
                    this.defesa = 130;
                }
            }

export class Mago extends Heroi{
                constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0, inventario=null){
                    super(nome, vida, ataque, defesa, nivel, experiencia, inventario)
                    this.nome = nome;
                    this.vida = 100;
                    this.ataque = 125;
                    this.defesa = 70;
                }
            }

export class Arqueiro extends Heroi{
                constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0, inventario=null){
                    super(nome, vida, ataque, defesa, nivel, experiencia, inventario)
                    this.nome = nome;
                    this.vida = 110;
                    this.ataque = 105;
                    this.defesa = 90;
                }
            }



//================================================================================
//NPCs Heróis
import { espadas } from "../itens/arma.js";
import { armadurasCavaleiro } from "../itens/armadura.js";

let npcCavaleiro = new Cavaleiro("Cavaleiro Pedro Augusto")
const armaNpcCavaleiro = espadas[1]
const armaduraNpcCavaleiro = armadurasCavaleiro[1]
npcCavaleiro.inventario = [armaNpcCavaleiro, armaduraNpcCavaleiro]
npcCavaleiro.equipar_item(armaNpcCavaleiro)
npcCavaleiro.equipar_item(armaduraNpcCavaleiro)
//--------------------------------------------------------------------------------- 
import { cajados } from "../itens/arma.js";
import { tunicasMago } from "../itens/armadura.js";

let npcMago = new Mago("Mago Miguel")
const armaNpcMago = cajados[1]
const armaduraNpcMago = tunicasMago[1]
npcMago.inventario = [armaNpcMago, armaduraNpcMago]
npcMago.equipar_item(armaNpcMago)
npcMago.equipar_item(armaduraNpcMago)
//---------------------------------------------------------------------------------
import { arcos } from "../itens/arma.js";
import { armadurasArqueiro } from "../itens/armadura.js";

let npcArqueiro = new Arqueiro("Arqueiro Caio")
const armaNpcArqueiro = arcos[1]
const armaduraNpcArqueiro = armadurasArqueiro[1]
npcArqueiro.inventario = [armaNpcArqueiro, armaduraNpcArqueiro]
npcArqueiro.equipar_item(armaNpcArqueiro)
npcArqueiro.equipar_item(armaduraNpcArqueiro)
//================================================================================

export const lista_herois = [npcCavaleiro, npcMago, npcArqueiro];