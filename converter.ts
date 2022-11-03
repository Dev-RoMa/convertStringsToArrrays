console.log('oli')

//in the string put whatever u want to be converted into an array
let string = 'hola_mundo'
let vstring: string[] = []

for (let i = 0; i < string.length; i++) {
    string.slice(i,i+1)
    vstring.push(string.slice(i,i+1))
}

console.log(vstring)