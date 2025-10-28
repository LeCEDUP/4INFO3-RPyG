# itens/item.py
class Item:
    def __init__(self, nome: str, descricao: str = ''):
        self.nome = nome
        self.descricao = descricao

    def __repr__(self):
        return f"<Item {self.nome}>"
