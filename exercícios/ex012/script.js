function contar() {
    var contagem_inicio = window.document.getElementById('inum1')
    var contagem_fim = window.document.getElementById('inum2')
    var contagem_passo = window.document.getElementById('ipasso')
    var resultado = window.document.getElementById('contagem')
    var num_inicio = Number(contagem_inicio.value)
    var num_fim = Number(contagem_fim.value)
    var num_passo = Number(contagem_passo.value)

    if (contagem_inicio.value.length === 0 || contagem_fim.value.length === 0) {
        resultado.innerHTML = 'Impossivel contar...'
    } else if (contagem_passo.value.length === 0 || num_passo < 0) {
        window.alert('Passo inválido! Considerando passo 1')
        contagem_passo.value = '1'
        resultado.innerHTML = '<p>Contando...</p>'
        for (num_inicio ; num_inicio <= num_fim ; num_inicio ++) {
            resultado.innerHTML += `${num_inicio} &#x1F449; `
    }

        resultado.innerHTML  += '&#x1F6A9;'
    } else {
        resultado.innerHTML = '<p>Contando...</p>'
        for (num_inicio ; num_inicio <= num_fim ; num_inicio += num_passo) {
            resultado.innerHTML += `${num_inicio} &#x1F449; `
    }

        resultado.innerHTML  += '&#x1F6A9;'
    }

    
}
