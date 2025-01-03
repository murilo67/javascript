function verificar() {
    var ano_atual = new Date().getFullYear()
    var ano_usuario = window.document.getElementById('iano')

    var sexo = window.document.getElementsByName('sexo')

    var idade = ano_atual - Number(ano_usuario.value)

    var resultado = window.document.getElementById('resposta')

    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    var texto = window.document.getElementById('genero')
    var genero = ''

    if (idade < 0 || ano_usuario.value.length === 0) {
        window.alert('[ERROR] Verifique seus dados e tente novamente')
    } else if (sexo[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 13) {
            // Criança
            img.setAttribute('src', 'imagens/crianca-m.png')
        } else if (idade >= 13 && idade < 22) {
            // Jovem
            img.setAttribute('src', 'imagens/jovem-m.png')
        } else if (idade >= 22 && idade < 60) {
            // Adulto
            img.setAttribute('src', 'imagens/adulto-m.png')
        } else if (idade >= 60) {
            // Idoso
            img.setAttribute('src', 'imagens/idoso-m.png')            
        }
    } else if (sexo[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 13) {
            // Criança
            img.setAttribute('src', 'imagens/crianca-f.png')
        } else if (idade >= 13 && idade < 22) {
            // Jovem
            img.setAttribute('src', 'imagens/jovem-f.jpg')
        } else if (idade >= 22 && idade < 60) {
            // Adulto
            img.setAttribute('src', 'imagens/adulto-f.jpg')
        } else if (idade >= 60) {
            // Idoso
            img.setAttribute('src', 'imagens/idoso-f.jpg')
        }
    }
    
    texto.style.textAlign = 'center'
    texto.innerHTML = `Detectamos ${genero} de ${idade} anos`
    texto.style.marginBottom = '15px' 
    resultado.appendChild(img) // Cria um parâmetro filho (Elemento -> img)
}

