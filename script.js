"use strict"

const lampada = document.getElementById("lampada")

function id(elemento) {
    return document.getElementById(elemento)
}

function botoesLigaDesliga(estadoLiga, estadoDesliga) {
    const botaoLigar = document.getElementById("ligar")
    const botaoDesligar = document.getElementById("desligar")
    botaoLigar.disabled = estadoLiga
    botaoDesligar.disabled = estadoDesliga
}

function lampadaQuebrada() {
    return lampada.src.includes("quebrada")
}

function ligarLampada() {
    if (!lampadaQuebrada()) {
        lampada.src = "img/ligada.jpg"
        botoesLigaDesliga(true, false)
    }
}

function desligarLampada() {
    if (!lampadaQuebrada()) {
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true)
    }
}

function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true)
}

// eventos
id("ligar").addEventListener("click", ligarLampada)

id('desligar').addEventListener("click", desligarLampada)

id("lampada").addEventListener("mouseover", ligarLampada)

id("lampada").addEventListener("mouseleave", desligarLampada)

id("lampada").addEventListener("dblclick", quebrarLampada)