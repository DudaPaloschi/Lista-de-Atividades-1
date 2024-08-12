var leitor = require("readline-sync");
var Aluno = /** @class */ (function () {
    function Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    Aluno.prototype.media = function () {
        return (this.notaProva1 + this.notaProva2) / 2;
    };
    Aluno.prototype.final = function () {
        return (this.media() * 0.7) + (this.notaTrabalho * 0.3);
    };
    return Aluno;
}());
