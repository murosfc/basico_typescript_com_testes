export class Jogo{
    titulo: String
    plataforma: String
    valor: number
    constructor(titulo: String, plataforma: String, valor: number){
        this.titulo = titulo
        this.plataforma = plataforma

        if (valor > 0){
            this.valor = valor
        }
        else{
            throw new Error("Valor inválido")
        }            
    }

    getJogo(){
        return this
    }

}
