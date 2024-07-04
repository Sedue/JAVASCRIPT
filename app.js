const usuarios = require('./usuarios.json')

function usuariosSelectOptions() {
  return usuarios.map((usuario) => {
    return {
      label: `${usuario.id} ${usuario.nome}`,
      value: usuario.id
    }
  })
}

const options = usuariosSelectOptions()
console.log(options)
