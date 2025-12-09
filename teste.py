# teste.py
from personagens.heroi import Heroi
from personagens.monstro import Monstro
from itens.arma import Arma
from itens.armadura import Armadura

def main():
    heroi = Heroi('Arthos')
    espada = Arma('Espada Curta', 'Uma espada simples', bonus_ataque=6)
    couraca = Armadura('Couraça de Couro', 'Proteção básica', bonus_defesa=3)

    heroi.adicionar_ao_inventario(espada)
    heroi.adicionar_ao_inventario(couraca)
    heroi.equipar_item(espada)
    heroi.equipar_item(couraca)

    goblin = Monstro('Goblin', tipo='Pequeno', vida=40, ataque=9, defesa=2)

    print(f'Começa o combate: {heroi.nome} vs {goblin.nome}')
    turno = 1
    while heroi.esta_vivo() and goblin.esta_vivo():
        print(f'--- Turno {turno} ---')
        # heroi ataca
        res_h = heroi.atacar(goblin)
        print(f'{heroi.nome} ataca e causa {res_h["dano"]} de dano. Vida do {goblin.nome}: {goblin.vida}/{goblin.max_vida}')
        if not goblin.esta_vivo():
            print(f'{goblin.nome} derrotado!')
            exp = goblin.experiencia_ao_derrotar()
            heroi.ganhar_experiencia(exp)
            print(f'{heroi.nome} ganha {exp} de EXP. Nível: {heroi.nivel}, EXP atual: {heroi.experiencia}')
            break

        # monstro ataca
        res_m = goblin.atacar(heroi)
        print(f'{goblin.nome} ataca e causa {res_m["dano"]} de dano. Vida do {heroi.nome}: {heroi.vida}/{heroi.max_vida}')
        if not heroi.esta_vivo():
            print(f'{heroi.nome} foi derrotado...')
            break
        turno += 1

    print('Fim do combate.')

if __name__ == "__main__":
    main()
