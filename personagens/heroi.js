import { Personagem} from "./personagem.js";
import { Arma } from "../itens/arma.js";
import { Armadura } from "../itens/armadura.js";

// let status = idade >= 18 ? "Adulto" : "Menor de idade";
// condição ? valorSeVerdadeiro : valorSeFalso;

class Heroi extends Personagem {
    constructor(nome, vida, ataque, defesa, nivel=1, experiencia=0, inventario=null) {
        super(nome, vida, ataque, defesa);
        this.nivel = nivel;
        this.experiencia = experiencia;
        this.inventario = inventario != null ? inventario : [];
    }

    ganharExperiencia(exp) {
        this.experiencia += exp;
        console.log(`${this.nome} ganhou ${exp} de experiência. Total: ${this.experiencia}`)
        while (this.experiencia >= this.nivel * 100) {
            this.subirNivel();
        }
    }

    subirNivel() {
        this.nivel += 1;
        this.vida += 20;
        this.ataque += 5;
        this.defesa += 2;
        self.experiencia -= (this.nivel - 1) * 100;
        console.log(`${this.nome} subiu para o nível ${this.nivel}! Seus atributos aumentaram.`)
    }

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

    equiparItem(item) {
        if(item in this.inventario) {
            if (item instanceof Arma) {
                
            }
        }
    }
}