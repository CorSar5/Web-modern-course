const schedule = require('node-schedule')
const { setImmediate } = require('timers')

const taks1 = schedule.scheduleJob('*/5 * 12 * * 1', function(){
    console.log('Executing Task 1', new Date().getSeconds())
})

setTimeout(function(){
    taks1.cancel()
    console.log('Canceling Task 1!')
}, 20000)

// setImmediate
// setInterval

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1, 5)]
rule.hour = 12
rule.second = 30

const task2 = schedule.scheduleJob(rule, function(){
    console.log('Esecuting task 2!', new Date().getSeconds())
})