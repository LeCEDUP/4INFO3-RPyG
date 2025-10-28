from itens.arma import Arma
from itens.armadura import Armadura
from .personagem import Personagem

class Heroi(Personagem):
    def __init__(self, nome: str, vida: int = 120, ataque: int = 12, defesa: int = 6):
        super().__init__(nome, vida, ataque, defesa)
        self.nivel = 1
        self.experiencia = 0
        self.inventario = []
        self.equipado = {'arma': None, 'armadura': None}

    def ganhar_experiencia(self, exp: int):
        self.experiencia += exp
        threshold = self.nivel * 100
        while self.experiencia >= threshold:
            self.experiencia -= threshold
            self.subir_nivel()

    def subir_nivel(self):
        self.nivel += 1
        bonus_vida = 20
        bonus_ataque = 3
        bonus_defesa = 2
        self.max_vida += bonus_vida
        self.vida = min(self.max_vida, self.vida + bonus_vida)
        self.ataque += bonus_ataque
        self.defesa += bonus_defesa
        return {'nivel': self.nivel, 'max_vida': self.max_vida, 'ataque': self.ataque, 'defesa': self.defesa}

    def equipar_item(self, item):
        if item is None:
            return False
        if hasattr(item, 'bonus_ataque'):
            self.equipado['arma'] = item
            return True
        if hasattr(item, 'bonus_defesa'):
            self.equipado['armadura'] = item
            return True
        return False

    def calcular_ataque_total(self):
        bonus = 0
        if self.equipado['arma'] is not None:
            bonus += getattr(self.equipado['arma'], 'bonus_ataque', 0)
        return self.ataque + bonus

    def calcular_defesa_total(self):
        bonus = 0
        if self.equipado['armadura'] is not None:
            bonus += getattr(self.equipado['armadura'], 'bonus_defesa', 0)
        return self.defesa + bonus

    def atacar(self, alvo):
        if not self.esta_vivo():
            return {'sucesso': False, 'motivo': f'{self.nome} está derrotado.'}
        dano_bruto = self.calcular_ataque_total()
        defesa_alvo = alvo.calcular_defesa_total() if hasattr(alvo, 'calcular_defesa_total') else getattr(alvo, 'defesa', 0)
        dano_final = max(0, dano_bruto - defesa_alvo)
        aplicado = alvo.receber_dano(dano_final)
        return {'sucesso': True, 'dano': aplicado}

    def receber_dano(self, dano: int) -> int:
        defesa_total = self.calcular_defesa_total()
        dano_final = max(0, dano - defesa_total)
        return super().receber_dano(dano_final)

    def adicionar_ao_inventario(self, item):
        self.inventario.append(item)


class Heroi(Personagem):
    def __init__(self, nome, vida, ataque, defesa, nivel=1, experiencia=0, inventario=None):
        super().__init__(nome, vida, ataque, defesa)
        self.nivel = nivel
        self.experiencia = experiencia
        self.inventario = inventario if inventario is not None else []

    def ganhar_experiencia(self, exp):
        self.experiencia += exp
        print(f"{self.nome} ganhou {exp} de experiência. Total: {self.experiencia}")
        while self.experiencia >= self.nivel * 100:
            self.subir_nivel()

    def subir_nivel(self):
        
        self.nivel += 1
        self.vida += 20
        self.ataque += 5
        self.defesa += 2
        self.experiencia -= (self.nivel - 1) * 100
        print(f"{self.nome} subiu para o nível {self.nivel}! Seus atributos aumentaram.")

    def equipar_item(self, item):
        if item in self.inventario:
            if isinstance(item, Arma):
                self.ataque += item.bonus_ataque
                print(f"{self.nome} equipou {item.nome}. Ataque atual: {self.ataque}")
            elif isinstance(item, Armadura):
                self.defesa += item.bonus_defesa
                print(f"{self.nome} equipou {item.nome}. Defesa atual: {self.defesa}")
            else:
                print(f"{item.nome} não pode ser equipado.")
        else:
            print(f"{self.nome} não possui {item.nome} no inventário.")