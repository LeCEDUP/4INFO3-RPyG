// Desenvolva aqui a classe Armadura em JS
import {Item} from './item.js';

export class Armadura extends Item{
    constructor(nome, descricao, bonus_defesa){
        super(nome, descricao);
        this.bonus_defesa = bonus_defesa;
    }
};

export class ArmaduraCavaleiro extends Armadura {}
export class ArmaduraArqueiro extends Armadura {}
export class TunicaMago extends Armadura {}

// Armaduras
export const armadurasCavaleiro = [
    new ArmaduraCavaleiro("Armadura de Ferro", "Pesada e confiável. Ideal para combates diretos.", 80),
    new ArmaduraCavaleiro("Armadura Real", "Forjada com aço refinado e brasões do reino.", 150),
    new ArmaduraCavaleiro("Armadura do Destino", "Relíquia ancestral que protege contra o mal.", 300)
];

export const armadurasArqueiro = [
    new ArmaduraArqueiro("Couro Leve", "Flexível e ideal para movimentos rápidos.", 30),
    new ArmaduraArqueiro("Traje da Floresta", "Camuflagem perfeita e resistência moderada.", 75),
    new ArmaduraArqueiro("Cota do Caçador", "Feita com escamas e tecidos reforçados.", 120)
];

export const tunicasMago = [
    new TunicaMago("Túnica do Aprendiz", "Simples, mas amplifica o foco mágico.", 15),
    new TunicaMago("Túnica Arcana", "Tecida com fios encantados e runas antigas.", 40),
    new TunicaMago("Túnica do Sábio", "Rara e poderosa, protege contra energias sombrias.", 60)
];
