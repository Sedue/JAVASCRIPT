const pessoa = {
  nome: "Eudes",
  idade: 54,
  profissao: "Desenvolvedor"
};

console.log(pessoa.nome);
console.log(pessoa["idade"]);

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)

pessoa.nome = "Rafael"
console.log(pessoa)


const pessoal = {
  nome: "Bruno",
  idade: 45,
  profissao: "Engenheiro",
  saudar: function () {
    console.log(`Olá, ${this.nome}`)
  }
}

pessoal.saudar()

console.log('-----')

const pessoaJSON = JSON.stringify(pessoa)
console.log(typeof pessoaJSON)
console.log(pessoaJSON)

const pessoaObj = JSON.parse(pessoaJSON)
console.log(typeof pessoaObj)
console.log(pessoaObj)