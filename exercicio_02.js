/*
  Todos os atributos necessários. Assim, usando Try e Catch, trate os erros e apresente uma mensagem quando houve atributos vazios.
*/

class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }

  mostrarAtributos() {
    try {
      return this.atributos()
    } catch (erro) {
      console.log(erro.message)
    }
  }

  atributos() {
    if (this.nome != "" && this.idade != "" && this.turma != "") {
      return this.nome + this.idade + this.turma
    } else {
      throw new Error("Erro: Atributo(s) vázio(s). :)")
    }
  }
}

const estudante = new Estudante("João", 16, "");

const atributos = estudante.mostrarAtributos();

console.log(atributos.nome);
console.log(atributos.idade);
console.log(atributos.turma);

