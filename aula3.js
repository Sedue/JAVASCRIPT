function cadastrarIdade(idade) {
  if (!idade || idade < 1) {
    return { error: "Forneça uma idade acima de 1" }
  }

  //Realiza o cadastro da idade
  return { message: "Idade cadastrada com sucesso" }
}

const resultado = cadastrarIdade(0)
console.log(resultado)