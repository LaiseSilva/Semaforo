'use strict'

const desligado = document.getElementById('sinalDesligado')
const verde = document.getElementById('verde')
const amarelo = document.getElementById('amarelo')
const vermelho = document.getElementById('vermelho')
const automatico = document.getElementById('automatico')
let idAutomatico = null

const sinalVerde = () => desligado.src = './img/verde.png'
const sinalAmarelo = () => desligado.src = './img/amarelo.png'
const sinalVermelho = () => desligado.src = './img/vermelho.png'

const trocarDeCor = () =>{
    
}

const sinalAutomatico = () => {
    idAutomatico = setInterval(trocarDeCor, 500)
}

verde.addEventListener('click', sinalVerde)
amarelo.addEventListener('click',sinalAmarelo)
vermelho.addEventListener('click', sinalVermelho)
automatico.addEventListener('click', sinalAutomatico)