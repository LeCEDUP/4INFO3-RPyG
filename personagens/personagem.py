# personagens/personagem.py
class Personagem:
    def __init__(self, nome: str, vida: int = 100, ataque: int = 10, defesa: int = 5):
        self.nome = nome
        self.max_vida = vida
        self.vida = vida
        self.ataque = ataque
        self.defesa = defesa

    def esta_vivo(self) -> bool:
        return self.vida > 0

    def receber_dano(self, dano: int) -> int:
        dano_recebido = max(0, dano)
        self.vida = max(0, self.vida - dano_recebido)
        return dano_recebido

    def atacar(self, alvo):
        if not self.esta_vivo():
            return {'sucesso': False, 'motivo': f'{self.nome} está derrotado.'}
        dano_bruto = self.ataque
        defesa_alvo = getattr(alvo, 'defesa', 0)
        dano_final = max(0, dano_bruto - defesa_alvo)
        aplicado = alvo.receber_dano(dano_final)
        return {'sucesso': True, 'dano': aplicado}
