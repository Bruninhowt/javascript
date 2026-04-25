function carregar(){
    var titulo = document.getElementById('titulo')
    var img = document.getElementById('foto')
    var dia = new Date()
    var hora = dia.getHours()
    titulo.innerHTML = `Agora sao ${hora} horas`

    if (hora >= 0 && hora <= 12){
        img.src = 'imagens/foto-dia.jpg'
        document.body.style.background = '#f3d915';
    }else if (hora >= 13 && hora <=18) {
        img.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = '#fdefb0'
    }else{
        img.src = 'imagens/foto-noite.jpg'
        document.body.style.background = '#4b4b4b'
    }
}

