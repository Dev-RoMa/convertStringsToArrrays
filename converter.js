console.log('oli');
var varray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
var string = 'hola_mundo';
var vstring = [];
for (var i = 0; i < string.length; i++) {
    string.slice(i, i + 1);
    vstring.push(string.slice(i, i + 1));
}
console.log(vstring);
