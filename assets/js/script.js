// elementos da tela
let votoPara = document.querySelector('.Vpara > p')
let cargo = document.querySelector('.cargo > p')
let nomePessoa = document.querySelectorAll('.infAdd > p')
let numeros = document.querySelectorAll('.numeroIdentificador')
let img = document.querySelectorAll('img')

// elementos teclado
let n1 = document.querySelectorAll('.teclado button')
n1[0].addEventListener('click' ,()=>{
    tecladoNumerico(1)
})
let n2 = document.querySelectorAll('.teclado button')
n1[1].addEventListener('click' ,()=>{
    tecladoNumerico(2)
})
let n3 = document.querySelectorAll('.teclado button')
n1[2].addEventListener('click' ,()=>{
    tecladoNumerico(3)
})
let n4 = document.querySelectorAll('.teclado button')
n1[3].addEventListener('click' ,()=>{
    tecladoNumerico(4)
})
let n5 = document.querySelectorAll('.teclado button')
n1[4].addEventListener('click' ,()=>{
    tecladoNumerico(5)
})
let n6 = document.querySelectorAll('.teclado button')
n1[5].addEventListener('click' ,()=>{
    tecladoNumerico(6)
})
let n7 = document.querySelectorAll('.teclado button')
n1[6].addEventListener('click' ,()=>{
    tecladoNumerico(7)
})
let n8 = document.querySelectorAll('.teclado button')
n1[7].addEventListener('click' ,()=>{
    tecladoNumerico(8)
})
let n9 = document.querySelectorAll('.teclado button')
n1[8].addEventListener('click' ,()=>{
    tecladoNumerico(9)
})
let n0 = document.querySelectorAll('.teclado button')
n1[9].addEventListener('click' ,()=>{
    tecladoNumerico(0)

})
// função para o teclado numérico
function tecladoNumerico(n){
    alert(`clicou em ${n}`)
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
