console.log('oli')

let varray: string[] = ['a','e','i','o','u','A','E','I','O','U']
let string = 'hola_mundo'
let vstring: string[] = []

for (let i = 0; i < string.length; i++) {
    string.slice(i,i+1)
    vstring.push(string.slice(i,i+1))
}

console.log(vstring)