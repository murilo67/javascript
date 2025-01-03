/*
Tipos de condição:
Condições simples
if (condição) {
    true
}

Condições compostas:
if (condição) {
        
}else {
        
}

Condições aninhadas:
if (condição) {

}else {

    if (condição) {
    
    } else {

    }

}

Condições múltiplas:
switch(expressão) {
    case valor1: -> caso o valor dá expressão for igual a esse
        
        break -> obrigatório
    case valor2:
        
        break -> obrigatório
    case valor3: 
        
        break -> obrigatório
    default: -> Caso nenhuma dessas condições for aceita
        
        break -> opcional
}
*/

var velocidade = 78.5
console.log(`A velocidade do seu carro é de ${velocidade}km/h`)

if (velocidade >= 60) {
    console.log('Você ultrapassou a velocidade permitida. MULTADO')
} 

console.log(`Dirija sempre! Usando cinto de segurança`)
