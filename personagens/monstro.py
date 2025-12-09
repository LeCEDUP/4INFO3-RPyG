# personagens/monstro.py
from .personagem import Personagem

class Monstro(Personagem):
    def __init__(self, nome: str, tipo: str = 'Pequeno', vida: int = 50, ataque: int = 8, defesa: int = 2):
        super().__init__(nome, vida, ataque, defesa)
        self.tipo = tipo

    def experiencia_ao_derrotar(self) -> int:
        base = 20
        if self.tipo == 'Grande':
            return base * 3
        if self.tipo == 'Médio' or self.tipo == 'Medio':
            return base * 2
        return base

    def calcular_defesa_total(self):
        return self.defesa
