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

const automaticoVermelho = () => {
    return desligado.src.includes('vermelho')
}

const automaticoVerde = () => {
    return desligado.src.includes('verde')
}

const trocarDeCor = () => {
    if (automaticoVermelho()) {
        sinalVerde()
    }else if(automaticoVerde()){
        sinalAmarelo()
    }else{
        sinalVermelho()
    }
}

const sinalAutomatico = () => {
    if (idAutomatico == null) {
        idAutomatico = setInterval(trocarDeCor, 1000)
        automatico.textContent = 'Parar'
    }else{
        clearInterval(idAutomatico)
        idAutomatico = null
        automatico.textContent = 'Automático'
    }

}

verde.addEventListener('click', sinalVerde)
amarelo.addEventListener('click', sinalAmarelo)
vermelho.addEventListener('click', sinalVermelho)
automatico.addEventListener('click', sinalAutomatico)