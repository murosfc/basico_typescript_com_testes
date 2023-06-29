import { Jogo } from '../src/jogo'

export interface IRepoJogos {
    getJogos(): Jogo[];
}