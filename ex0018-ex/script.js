

function clicar(){
    var inicio = document.querySelector('#inicio')
    var pulo = document.querySelector('#pulo')
    var fim = document.querySelector('#fim')
    var res = document.querySelector('.res')
    if (inicio.value.length == 0 || pulo.value.length == 0 || fim.value.length == 0){
        alert('Preencha todos os dados')
    }else{
        var i = Number(inicio.value)
        var p = Number(pulo.value)
        var f = Number(fim.value)

        res.innerHTML = ''

        for (var c = i; c <= f ; c += p){
            res.innerHTML += `${c},  `
        }
    }
}



    
