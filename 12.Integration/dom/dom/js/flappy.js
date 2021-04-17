/*function newElement(tagName, className){
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barrier(reverse  =false){
    this.element = newElement('div', 'barreira')

    const borda = newElement('div', 'borda')
    const corpo = newElement('div', 'corpo')
    this.element.appendChild(reverse ? corpo:borda)
    this.element.appendChild(reverse ? borda:corpo)

    this.setHeight = height => corpo.style.height = `${height}px`
}

// const b = new Barrier(true)
// b.setHeight(200)
// document.querySelector('[wm-flappy]').appendChild(b.element)

function BarrierPairs(height, gap, x){
    this.element = newElement('div', 'par-de-barreiras')

    this.superior = new Barrier(true)
    this.inferior = new Barrier(false)

    this.element.appendChild(this.superior.element)
    this.element.appendChild(this.inferior.element)

    this.sortGap = () =>{
        const SupHeight = Math.random() * (height - gap)
        const InfHeight = height - gap -SupHeight
        this.superior.setHeight(SupHeight)
        this.inferior.setHeight(InfHeight)
    }

    this.getX = () => parseInt(this.element.style.left.split('px')[0])
    this.setX = x => this.element.style.left = `${x}px`
    this.getLarge = () => this.element.clientWidth

    this.sortGap()
    this.setX(x)
}

// const b = new BarrierPairs(500, 200, 400)
// document.querySelector('[wm-flappy]').appendChild(b.element)

function Barriers(height, large, gap, space, notPoint){
    this.pairs = [
        new BarrierPairs(height, gap, large),
        new BarrierPairs(height, gap, large + space),
        new BarrierPairs(height, gap, large+ space * 2),
        new BarrierPairs(height, gap, large + space * 3)
    ]
    
    const displacement = 3
    this.animate = () => {
        this.pairs.forEach(par => {
            par.setX(par.getX()-displacement)

            if(par.getX() < -par.getLarge()){
                par.setX(par.getX() + space * this.pairs.length)
                par.sortGap()
            }

            const mid = large/2
            const gotMid = par.getX() + displacement >= mid
                && par.getX() < mid
            if(gotMid) notPoint()
        })
    }
}

function Bird(heightG){
    let flight = false

    this.element = newElement('img', 'passaro')
    this.element.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.element.style.bottom.split('px')[0])
    this.setY = y => this.element.style.bottom = `${y}px`

    window.onkeydown = e => flight  =true
    window.onkeyup =e => flight = false

    this.animate =()=>{
        const newY  =this.getY() + (flight ? 8 : -5)
        const maxH = heightG - this.element.clientHeight

        if(newY <= 0){
            this.setY(0)
        }else if (newY >= maxH){
            this.setY(maxH)
        }else{
            this.setY(newY)
        }
    }

    this.setY(heightG / 2)
}

/*const b = new Barriers(700, 1200, 200, 400)
const bir = new bird(700)
const area = document.querySelector('[wm-flappy]')

area.appendChild(bir.element)
b.pairs.forEach(par => area.appendChild(par.element))
setInterval(() => {
    b.animate()
    bir.animate()
},20)

function Progress(){
    this.element = newElement('span', 'progresso')
    this.update = points => {
        this.element.innerHTML = points
    }
    this.update(0)
}
function overlaid(elementA, elementB){
    const a = elementA.getBoundingClientRect()
    const b = elementB.getBoundingClientRect()

    const horizontal =  a.left + a.width >= b.left
        && b.left +b.width >= a.left

    const vertical  = a.top + a.height >= b.top
        && b.top +b.height >= a.top    
    return horizontal && vertical
}

function colision(bird, barriers){
    let colision = false
    barriers.pairs.forEach(p => {
        if(!colision){
            const sup  = p.sup.element
            const inf = p.inf.element
            colision = overlaid(bird.element, sup)
                || overlaid(bird.element, inf)
        }
    })
    return colision
}

function flappyBird(){
    let points = 0

    const area = document.querySelector('[wm-flappy]')
    const height = area.clientHeight
    const width = area.clientWidth

    const progress = new Progress()
    const barriers = new Barriers(height, width, 200, 400, () => progress.update(++points))
    const bird = new Bird(height)

    area.appendChild(progress.element)
    area.appendChild(bird.element)
    barriers.pairs.forEach( pair => area.appendChild(pair.element))

    this.start = () => {
        const timer = setInterval(() => {
            barriers.animate()
            bird.animate()

            if(colision(bird, barriers)){
                clearInterval(timer)
            }
        },20)
    }
}

new flappyBird().start()*/

function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// const b = new Barreira(true)
// b.setAltura(300)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

// const b = new ParDeBarreiras(700, 200, 800)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            // quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio
            if(cruzouOMeio) notificarPonto()
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}



function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

// const barreiras = new Barreiras(700, 1200, 200, 400)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')
// areaDoJogo.appendChild(passaro.elemento)
// areaDoJogo.appendChild(new Progresso().elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// }, 20)

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

function FlappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
            }
        }, 20)
    }
}

new FlappyBird().start()