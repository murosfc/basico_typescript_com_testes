import { Jogo } from '../src/jogo'
import { RepoJogos } from '../src/RepoJogos'
import { ListaJogos } from '../src/ListaJogos'

test('Cadastro Jogo', () => {
    const jogo = new Jogo('GTA V', 'PC', 10)
    expect(jogo.titulo).toBe("GTA V")
    expect(jogo.plataforma).toBe("PC")
    expect(jogo.valor).toBe(10)
})

test('Cadastro Jogo com valor negativo', () => {
    expect(() => new Jogo('GTA V', 'PC', -10)).toThrowError("Valor inválido")
})

test('Lista Jogos', () => {
    const jogo = new Jogo('GTA V', 'PC', 10)
    const jogo2 = new Jogo('GTA IV', 'PC', 10)
    const jogo3 = new Jogo('GTA III', 'PC', 10)
    const repo = new RepoJogos()
    repo.addJogo(jogo)
    repo.addJogo(jogo2)
    repo.addJogo(jogo3)
    const linstaJogos = new ListaJogos(repo)
    expect(linstaJogos.devolveJogosDisponíveis()).toEqual([jogo, jogo2, jogo3])
})