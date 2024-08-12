let leitor = require("readline-sync")

export interface Aluno {
    matricula: number
    nome: string
    notaProva1: number
    notaProva2: number
    notaTrabalho: number

}

export class Aluno implements Aluno{
    matricula: number
    nome: string
    notaProva1: number
    notaProva2: number
    notaTrabalho: number   

    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1
        this.notaProva2 = notaProva2
        this.notaTrabalho = notaTrabalho

    }

    public getAluno(): void{
        console.log(`Nome: ${this.nome}, Matricula: ${this.matricula}, Notas: P1: ${this.notaProva1}, P2: ${this.notaProva2}, Trabalho: ${this.notaTrabalho}`) 
    }

    public media(): number {
       let mediaProva = (this.notaProva1 + this.notaProva2) / 2
       return
    }

    public final(): number {
        let mediaFinal = (this.media() * 0.7) + (this.notaTrabalho * 0.3)
        return
    }

}