function tabuada() {
    var num_usuario = window.document.getElementById('inum')
    var resultado = window.document.getElementById('itabuada')
    var inicio_tabuada = 1
    
    for (num_usuario ; tabuada <= 10 ; tabuada++) {
        var conta = num_usuario * tabuada
        resultado.opti = `${num_usuario} x ${tabuada} = ${conta}`
    }
}


