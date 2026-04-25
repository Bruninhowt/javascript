function clicar(){
    var dia = new Date()
    var ano_atual = dia.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('.res')
    
    if (fano.value.length < 4 || fano.value > ano_atual){
        alert('Tente novamente')

    }else{
        var fsex = document.getElementsByName('txtsex')
        var idade = ano_atual - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', 'imagens/crianca-masculina.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/homem-24-anos.jpg')
            }else if (idade < 60){
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            }else{
                img.setAttribute('src', 'imagens/homem-60-anos.jpg')
            }
        }else{
            genero = 'Feminino'
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', 'imagens/crianca-feminina.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/mulher-24-anos.jpg')
            }else if (idade < 60){
                img.setAttribute('src', 'imagens/mulher-adulto.jpg')
            }else{
                img.setAttribute('src', 'imagens/mulher-60-anos.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) 
        
    }
}