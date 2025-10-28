# itens/armadura.py
from .item import Item

class Armadura(Item):
    def __init__(self, nome: str, descricao: str = '', bonus_defesa: int = 0):
        super().__init__(nome, descricao)
        self.bonus_defesa = bonus_defesa

    def __repr__(self):
        return f"<Armadura {self.nome} (+{self.bonus_defesa})>"
