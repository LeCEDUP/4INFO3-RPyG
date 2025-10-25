// Desenvolva aqui a classe Armadura em JS

class Armadura extends Item{
    constructor(self, nome, descricao, bonus_defesa){
        super().__init__(nome, descricao)
        self.bonus_defesa = bonus_defesa
    }
}