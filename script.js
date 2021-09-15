  
"use strict"


const getId = (elemento) => document.getElementById(elemento)

const lampada = getId("lampada")
let idLigar
let idDesligar

const botoesLigaDesliga = (estadoLigado, estadoDesligado, estadoPiscar) => {
    const ligar = getId("ligar")
    const desligar = getId("desligar")
    const piscar = getId("piscar")

    ligar.disabled = estadoLigado
    desligar.disabled = estadoDesligado
    piscar.disabled = estadoPiscar
}

const lampadaQuebrada = () => {
    return lampada.src.indexOf("quebrada") !== -1
}

const ligarLampada = () => {
    if (!lampadaQuebrada()) {
        lampada.src = 'img/ligada.jpg'
        botoesLigaDesliga(true, false, false)
    }
}

const desligarLampada = () => {
    if (!lampadaQuebrada()) {
        lampada.src = 'img/desligada.jpg'
        botoesLigaDesliga(false, true, false)
    }
}

const quebrarLampada = () => {
    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true, true)
}

const pararPiscar = () => {
    clearInterval(idLigar)
    clearInterval(idDesligar)
}

const piscarLampada = () => {
    const botaoPiscar = getId("piscar")

    if (botaoPiscar.textContent == "Piscar") {
        idLigar = setInterval(ligarLampada, 500)
        idDesligar = setInterval(desligarLampada, 1000)
        botaoPiscar.textContent = "Parar"
    } else {
        pararPiscar()
        botaoPiscar.textContent = "Piscar"
    }
}

//Eventos
getId("ligar")
    .addEventListener("click", ligarLampada)

getId("desligar")
    .addEventListener("click", desligarLampada)

getId("lampada")
    .addEventListener("mouseover", ligarLampada)

getId("lampada")
    .addEventListener("mouseleave", desligarLampada)

getId("lampada")
    .addEventListener("dblclick", quebrarLampada)

getId("piscar")
    .addEventListener("click", piscarLampada)