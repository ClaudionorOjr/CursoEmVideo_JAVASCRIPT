// Código de resolução da questão do prof. Gustavo Guanabara

let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#numeros')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else {
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){ // !inLista = não está inLista
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('[ERRO] Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // Para não ficar o número digitado no campo "Número"
    num.focus() // O foco volta para o campo de "Número"
}

function finalizar(){
    if(valores.length == 0){
        window.alert('[ERRO] Adicione valores antes de finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(var i=0;i<total;i++){ // for(let posicao in valores){...}
            soma += valores[i]
            if(valores[i] > maior){
                maior = valores[i]
            }
            if(valores[i] < menor){
                menor = valores[i]
            }
        }
        media = soma/total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
