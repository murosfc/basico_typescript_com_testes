import { IRepoJogos } from "./IRepoJogos";
import { Jogo } from './Jogo';

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