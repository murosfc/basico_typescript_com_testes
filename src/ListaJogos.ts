import { IRepoJogos } from "../src/IRepoJogos";
import { Jogo } from '../src/jogo';

export class ListaJogos {    
    private repo: IRepoJogos;

    constructor(repo: IRepoJogos) {
    this.repo = repo; 
    } 

    devolveJogosDisponíveis(): Jogo[] {   
        const listaJogos: Jogo[] = this.repo.getJogos();
        listaJogos.forEach(jogo => {
            console.log(jogo.getJogo().titulo)
        });
        return listaJogos;
    }
}