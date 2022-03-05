//DECLARAR AS VARIAVEIS
const entrar_btn = document.querySelector('.entrar_btn');
const registrar_btn = document.querySelector('.registrar_btn');
const formBox = document.querySelector('.formBox');
const body = document.querySelector('body');

//FUNÇÕES
registrar_btn.onclick = function () {
    formBox.classList.add('active');
    body.classList.add('active');
};

entrar_btn.onclick = function () {
    formBox.classList.remove('active');
    body.classList.remove('active');
};