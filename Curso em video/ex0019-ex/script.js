function clicar(){
    var num = document.getElementById('num')
    var tabuada = document.getElementById('tabuada')
    if (num.value == ''){
        alert('Preencha os dados')
    }else{
        var n = Number(num.value)
        var c = 1
        tabuada.innerHTML = ''

        while(c <= 10){
            tabuada.innerHTML += `${n} X ${c} = ${n*c}<br>`
            c++
        }
    }
}