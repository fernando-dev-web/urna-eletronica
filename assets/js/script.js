let votopara = document.querySelector('.Vpara > p')
let cargo = document.querySelector('.cargo > p')
let numero = document.querySelectorAll('.numeroIdentificador')
let DadosPessoa = document.querySelectorAll('.dadosPessoa > p')
let imgCandidato = document.querySelectorAll('img')

function tecladoNum(n){
    alert(n)
}



// função para o teclado de ações

let branco = document.querySelector('.branco').addEventListener('click', white)
let corrige = document.querySelector('.corrige').addEventListener('click', corrects)
let confirma = document.querySelector('.confirma').addEventListener('click', confirm)


function white(){
    alert('branco')
}

function corrects(){
    alert('corrige')
}
function confirm(){
    alert('confirma')
}
