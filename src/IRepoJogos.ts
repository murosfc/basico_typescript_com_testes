import { Jogo } from './Jogo'

export interface IRepoJogos {
    getJogos(): Jogo[];
    addJogo(jogo: Jogo): void;
}