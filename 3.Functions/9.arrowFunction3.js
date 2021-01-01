let compairWithThis = function (param){
    console.log(this === param)
}

compairWithThis(global)

const obj = {}
compairWithThis = compairWithThis.bind(obj)
compairWithThis(global) // false 
compairWithThis(obj)// true, because of the bind usage/function

let compairWithThisArrow = param => console.log(this === param)
compairWithThisArrow(global) // false, there's no variation of the "this" form
compairWithThisArrow(module.exports) //Actually = to 'this'

compairWithThisArrow = compairWithThisArrow.bind(obj)// The Arrow won't be changed
compairWithThisArrow(obj) //False returning
compairWithThisArrow(module.exports)// True