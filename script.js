"use strict"

function ligaDesliga(statusLiga, statusDesliga) {
    const buttonLigar = document.getElementById("ligar")
    const buttonDesligar = document.getElementById("desligar")

    buttonLigar = statusLiga
    buttonDesligar = statusDesliga

}

function ligarLampada() {
    const lampada = document.getElementById("lampada")
    const buttonLigar = document.getElementById("ligar")
    const buttonDesligar = document.getElementById("desligar")
    
if (!quebrarLampada()) { 
    lampada.src = "img/ligada.jpg"
    buttonLigar.disabled = true
    buttonDesligar.disabled = false
    }
}

function desligarLampada() {
    const lampada = document.getElementById("lampada")
    const buttonLigar = document.getElementById("ligar")
    const buttonDesligar = document.getElementById("desligar")
     
if (!quebrarLampada()) { 
    lampada.src = "img/desligada.jpg"
    buttonLigar.disabled = false
    buttonDesligar.disabled = true
    }
}

function quebrarLampada() {
    const lampada = document.getElementById("lampada")
    return lampada.src.includes("quebrada")
}

//eventos
document.getElementById('ligar')
    .addEventListener("click", ligarLampada)

document.getElementById('desligar')
    .addEventListener("click", desligarLampada)


document.getElementById("lampada")
    .addEventListener("mouseover", ligarLampada)

document.getElementById("lampada")
    .addEventListener("mouseleave", desligarLampada)


 document.getElementById("lampada")
    .addEventListener("dblclick", quebrarLampada)

