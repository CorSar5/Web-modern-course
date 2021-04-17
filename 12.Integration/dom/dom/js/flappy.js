function newElement(tagName, className){
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

function Bird(height){
    let flight = false

    this.element = newElement('img', 'passaro')
    this.element.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.element.style.bottom.split('px')[0])
    this.setY = y => this.element.style.bottom = `${y}px`

    window.onkeydown = e => flight  =true
    window.onkeyup =e => flight = false

    this.animate =()=>{
        const newY  =this.getY() + (flight ? 8 : -5)
        const maxH = height - this.element.clientHeight

        if(newY <= 0){
            this.setY(0)
        }else if (newY >= maxH){
            this.setY(maxH)
        }else{
            this.setY(newY)
        }
    }

    this.setY(height / 2)
}

/*const b = new Barriers(700, 1200, 200, 400)
const bir = new bird(700)
const area = document.querySelector('[wm-flappy]')

area.appendChild(bir.element)
b.pairs.forEach(par => area.appendChild(par.element))
setInterval(() => {
    b.animate()
    bir.animate()
},20)*/

function Progress(){
    this.element = newElement('span', 'progress')
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

new flappyBird().start()