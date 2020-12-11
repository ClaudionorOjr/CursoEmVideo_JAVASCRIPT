let num = [5,8,2,9,3]
num.push(7) // push() acrescenta valores a um array
num.sort() // Ordena os elementos em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // retorna o número de elementos
console.log(`O primeiro valor do vetor é ${num[0]}`)
let posicao = num.indexOf(8)
if (posicao == -1){
    console.log('O valor não foi encontrado!')
}else {
    console.log(`O valor está na posição ${posicao}`)
}
