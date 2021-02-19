// middleware pattern (chain of responsability)
const step1 = (ctx, next) =>{
    ctx.value1 = 'middle1'
    next()
}

const step2 = (ctx, next)=> {
    ctx.value2 = 'middle2'
    next()
}

const step3 = ctx => ctx.value3 = 'middle3'

const exec = (ctx, ...middlewares) =>{
    const execStep = index => {
        middlewares && index < middlewares.length &&
            middlewares[index](ctx, ()=>execStep(index +1)) 
    }
    execStep(0)
}

const ctx = {}
exec(ctx, step1, step2, step3) // as the 3rd Step hasn't the next() function, if it is the first appearing non of the next steps will be available
console.log(ctx)