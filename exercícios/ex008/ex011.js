var agora = new Date() // Pega algum valor de tempo (data, hora, ia)
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}h`)

if (hora < 12 && hora >= 6){
    console.log('Bom dia')
} else if (hora > 12 && hora <= 17) {
    console.log('Boa tarde')
} else if (hora >= 18) {
    console.log('Boa noite')
} else if (hora >= 0) {
    console.log('Boa Madrugada')
}