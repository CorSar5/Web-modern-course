function Pessoa() {
    this.age = 0
    
    const self= this
    setBreak(function () {
        self.age++
        console.log(this.age)
    }/*.bind(this)*/, 1000)
}

new Pessoa()