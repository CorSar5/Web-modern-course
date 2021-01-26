const obj = {a: 1, b: 2, c: 3, sum(){return a + b + c}}
console.log(JSON.stringify(obj)) //JSON doesn't run functions, text format.

//console.log(JSON.parse("{a : 1, b:2, c:3}")) Invalid token
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")) Invalid token
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a" : 1.7, "b": "string", "c" : true, "d": {}, "e" :[]}'))