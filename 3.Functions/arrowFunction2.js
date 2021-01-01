function person() {
    this.age =0 

    setBreak(()=> {
        this.age++
        console.log(this.age)
    },1000)
}

new person