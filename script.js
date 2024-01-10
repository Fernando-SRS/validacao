
let carregando = document.querySelector('.carregando')
let button = document.querySelector('.button')

function teste() {
carregando.classList.remove('efeito');
carregando.classList.add('check')
};

setTimeout(teste, 4000);