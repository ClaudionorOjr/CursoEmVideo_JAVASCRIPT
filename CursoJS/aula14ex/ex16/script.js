function contar() {
    // Necessário converter para Number, pois está como String
    // Inicialização de variáveis
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.querySelector('div#res')

    //Verifica se os dados estão corretos
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Não foi possível fazer a contagem'
        // window.alert('[ERR0] Faltam dados!') 
    } else {
        res.innerHTML = 'Contando: '
        if (passo <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        if (inicio < fim) {
            //Contagem crescente
            for (var i = inicio; i <= fim; i += passo) {
                res.innerHTML += `${i} \u{1F449} ` //Código para emoji
            }
        } else {
            //Contagem decrescente
            for (var i = inicio; i >= fim; i -= passo) {
                res.innerHTML += `${i} \u{1F449} ` //Código para emoji
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }


}