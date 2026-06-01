let conteiner = document.getElementsByClassName('conteiner');
let titulo = document.getElementById('titulo');
let nome_musica = document.getElementById('nome-musica');
let nome_banda = document.getElementById('nome-banda');
let emoj_heart = document.getElementsByClassName('heart');
let song = document.getElementById('audio');
let progresso = document.getElementsByClassName('progresso');
let inicio = document.getElementsByClassName('inicio');
let fim = document.getElementsByClassName('fim');
let btnPlay = document.getElementById('play');

function songplay(){
    btnPlayplay.querySelector('.fa-solid').classList.remove('fa-circle-play');
    btnPlayplay.querySelector('.fa-solid').classList.add('fa-circle-pause');
    song.play();
}
play.addEventListener('click', songplay);