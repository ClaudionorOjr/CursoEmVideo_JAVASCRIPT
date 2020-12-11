function tabuada() {
    var valor = document.getElementById('txtvalor').value
    var tab = document.getElementById('seltab')

    if (valor.length == 0) {
        window.alert('[ERRO] Por favor digite um número!') // O alert so aparece se o tipo da variável 'valor' for string, por isso so posso converter depois
    } else {
        var num = Number(valor)
        tab.innerHTML = `` // Para zerar a tabuada sempre que for iniciada
        for (var i = 1; i <= 10; i++) {
            var item = document.createElement('option') // cria um elemento option no HTML
            item.text = `${num} x ${i} = ${i * num}` // adiciona ao option
            item.value = `tab${i}`
            tab.appendChild(item) // Adiciona o item a variável tab
        }
    }

}