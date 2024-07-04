const frutas = ["Maça", "Uva", "Laranja"] //usar esta forma 

const numeros = new Array(1, 2, 3, 4, 5) //recomendado não usar

console.log(frutas, numeros)

//Para pegar itens que esta no array
console.log(frutas[0])

//Modificando o array trocando a Maça pela Manga
frutas[0] = "Manga"

//Para adicionar um novo item no array
frutas.push("Maça")
console.log(frutas)

//Para remover um novo item no array
frutas.pop("Maça")
console.log(frutas)

console.log('------')

//Interação do array
frutas.forEach((fruta) => {
  console.log(fruta)
})

//Interação do array utilizando a erofunction
frutas.forEach(fruta => console.log(fruta))

console.log('------')

//encontrar numeros no array - find vai retornar o primeiro elemento da arrya maio que 5
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numeroMaiorQue5 = numeros2.find(numero => numero > 5)
console.log(numeroMaiorQue5)

console.log('------')

//encontrar numeros no array - filter vai retornar um array com todos os elemntos maior que 5
const numerosMaiorQue5 = numeros2.filter(numero => numero > 5)
console.log(numerosMaiorQue5)

console.log('------')

//Como transformar os dados utilizando o map
const frutasMensagem = frutas.map(fruta => `Coma a fruta ${fruta}`)
console.log(frutasMensagem)

console.log('------')

//Ordenação com sort(em ordem alfabética ou numeros em ordem numerica)
frutas.sort()
console.log(frutas)

console.log('------')
const numeros3 = [10, 2, 3, 6, 5, 4, 7, 8, 9, 1]
numeros3.sort((num1, num2) => num1 - num2)
console.log(numeros3)
