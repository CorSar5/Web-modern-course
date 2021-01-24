function Class(name, videoID) {
    this.name = name
    this.videoID = videoID
}

const class1 = new Class('Welcome', 123)
const class2= new Class('Bye', 456)
console.log(class1, class2)

//new simulater
function newT(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const class3 = newT(Class, 'Welcome', 123)
const class4 = newT(Class, 'SEE you', 456)
console.log(class3, class4)