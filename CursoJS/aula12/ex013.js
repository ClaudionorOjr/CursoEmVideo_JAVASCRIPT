var agora = new Date()
var diaSem = agora.getDay()
var hora = agora.getHours()

switch(diaSem) {
    case 0:
        console.log('Domingo')
        console.log(`${hora} horas`)
        break
    case 1:
        console.log('Segunda-feira')
        console.log(`${hora} horas`)
        break
    case 2:
        console.log('Terça-feira')
        console.log(`${hora} horas`)
        break
    case 3:
        console.log('Quarta-feira')
        console.log(`${hora} horas`)
        break
    case 4:
        console.log('Quinta-feira')
        console.log(`${hora} horas`)
        break
    case 5:
        console.log('Sexta-feira')
        console.log(`${hora} horas`)
        break
    case 6:
        console.log('Sábado')
        console.log(`${hora} horas`)
        break
    default:
        console.log('[ERRO] Dia inválido!')
}