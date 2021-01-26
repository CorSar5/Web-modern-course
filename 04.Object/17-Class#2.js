class Grandfather {
    constructor(surname) {
        this.surname = surname
    }
}

class father extends Grandfather {
    constructor(surname, profession = 'Teacher') {
        super(surname)
        this.profession = profession
    }
}

class Son extends father {
    constructor() {
        super('Silva')

    }
}

const son = new Son
console.log(son)