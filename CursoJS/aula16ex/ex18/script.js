var array = []

function adicionar() {
    var numero = document.querySelector('input#txtnum').value
    var tabnum = document.querySelector('select#numeros')

    if (numero == 0 || numero > 100) {
        window.alert('[ERR0] Valor inválido! Digite outro.')
    } else {
        // tabnum.innerHTML = ``
        var num = Number(numero)
        var item = document.createElement('option')
        if (array.indexOf(num) > -1) {
            window.alert('[ERRO] Valor inválido ou já encontrado na lista')
        } else {
            item.text = `Valor ${num} foi adicionado.`
            tabnum.appendChild(item)
            array.push(num)
            array.sort()
        }

    }
}

function finalizar() {
    var res = document.querySelector('div#res')
    // var get_num = document.querySelector('option').value
    var soma = 0
    var tamanho = array.length

    for(var i=0;i<array.length;i++){
        soma += array[i]
    }
    var media = soma/tamanho
    
    res.innerHTML = `Ao todo temos ${tamanho} números cadastrados.`
    res.innerHTML += `</br>O maior valor informado foi ${array[tamanho-1]}`
    res.innerHTML += `</br>O menor valor informado foi ${array[0]}`
    res.innerHTML += `</br>Somando todos os valores temos ${soma}`
    res.innerHTML += `</br>A média dos valores digitados é ${media}`

}