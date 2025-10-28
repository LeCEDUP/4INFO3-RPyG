# itens/arma.py
from .item import Item

class Arma(Item):
    def __init__(self, nome: str, descricao: str = '', bonus_ataque: int = 0):
        super().__init__(nome, descricao)
        self.bonus_ataque = bonus_ataque

    def __repr__(self):
        return f"<Arma {self.nome} (+{self.bonus_ataque})>"
