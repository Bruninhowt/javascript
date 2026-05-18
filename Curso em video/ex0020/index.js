let valores = [5, 2, 4, 8]

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
let proc = valores.indexOf(1)
if (proc == -1){
    console.log('Numero não encontrado')
}else{
    console.log(`O numero procurado esta na posicao ${proc}`)
}
