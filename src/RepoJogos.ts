import { Jogo } from './Jogo'
import { IRepoJogos } from './IRepoJogos'

export class RepoJogos implements IRepoJogos{
    jogosDisponiveis: Jogo[] = []

    constructor(){
    }

    addJogo(jogo: Jogo){
        this.jogosDisponiveis.push(jogo)
    }

    removeJogo(jogo: Jogo){
        this.jogosDisponiveis.splice(this.jogosDisponiveis.indexOf(jogo), 1)
    }

    getJogos(){
        return this.jogosDisponiveis
    }
}