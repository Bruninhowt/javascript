let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n){
    if (Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adcionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor invalido ou ja encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('Por favor adcione valores a lista')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0

        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            } 
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `O total de valores na lista é de ${tot} numeros.<br>`
        res.innerHTML += `O numero maior encontrado foi ${maior}.<br>`
        res.innerHTML += `O numero menor encontrado foi ${menor}.<br>`
        res.innerHTML += `A soma dos numeros da lista é ${soma}.<br>`
        res.innerHTML += `A media entre os valores é ${media}.<br>`
    }
}