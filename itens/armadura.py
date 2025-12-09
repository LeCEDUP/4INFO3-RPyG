from .item import Item

class Armadura(Item):
    def __init__(self, nome, descricao, bonusDefesa):
        super().__init__(nome, descricao)
        self.bonusDefesa = bonusDefesa