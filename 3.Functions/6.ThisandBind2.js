function Person() {
    this.age = 0

    setBreak(function() {
        this.age++
        console.log(this.age)
    }, 1000)
}

new Person