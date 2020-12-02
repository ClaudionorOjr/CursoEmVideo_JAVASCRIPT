function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (f_ano.value.length == 0 || f_ano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - f_ano.value
        var genero = ''
        var img = document.createElement('img') // Criação de uma tag img
        img.setAttribute('id', 'foto') // Atribui um id='foto' a tag img

        if (fsex[0].checked) {  //Se o que tiver marcado for o fsex na posição 0
            genero = 'Homem'
            if (idade >=0 && idade < 12){
                // Criança
                img.setAttribute('src','foto-bebe-m.png')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade < 60){
                // Adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else {
                // Idoso
                img.setAttribute('src','foto-idoso-m.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 12){
                // Criança
                img.setAttribute('src','foto-bebe-f.png')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src','foto-jovem-f.png')
            }else if(idade < 60){
                // Adulta
                img.setAttribute('src','foto-adulto-f.png')
            }else {
                // Idosa
                img.setAttribute('src','foto-idoso-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
        res.appendChild(img) // Adicionar um elemento, no caso, o img
    }
}