
/*
var subtitle = document.querySelector('.subtitle');
subtitle.textContent = 'texto alterado';
*/
var novoParagrafo = document.createElement("p");
var texto = document.createTextNode('conteudo do paragrafo');
novoParagrafo.appendChild(texto);

var body = document.createElement("body");
body.appendChild(novoParagrafo);

var conteiner = document.createElement("conteiner");
var elem = document.createElement("span");
elem.textContent = 'texto do span';
conteiner.appendChild(elem);
body.appendChild(conteiner);

console.log(body);