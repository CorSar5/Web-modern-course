function calculateSalarie(hoursworked, moneyforhour) {
    const Brutesalarie =  (hoursworked * moneyforhour).toFixed(2)
    const LiquidSalarie = Brutesalarie - Brutesalarie * 11/100
    console.log(`Your salarie is ${LiquidSalarie}`)
}

calculateSalarie(20, 5)