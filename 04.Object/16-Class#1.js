class Launch{
    constructor(name = 'Generic', value = 0) {
        this.name = name
        this.value = value
    }
}

class FinancialCicle {
    constructor(month, year) {
        this.month = month
        this.year = year
        this.launchers=  []
    }

    addLaunchers(...launchers) {
        launchers.forEach(l => this.launchers.push(l))
    }

    sumary() {
        let valueC = 0
        this.launchers.forEach(l => {
            valueC += l.value
        })
        return valueC
    }
}

const salarie = new Launch('Salarie', 45000)
const Light = new Launch('Eletricity', -220)

const counts = new FinancialCicle(6, 2018)
counts.addLaunchers(salarie, Light)
console.log(counts.sumary())