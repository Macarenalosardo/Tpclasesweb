console.log("ping con script.js");

// Arrays (arreglo)

const ejemplo1 = ["Texto", "otro", "mas"];
const ejemplo2 = ["texto", 22, true, undefined, null, [1, 2, 3, "texto"]];


// Manejo de arrays

const numeros = [2, 9, 11, 5, 78, 123];
console.log(numeros);

console.log(numeros[2]);


// Agregar un dato 

numeros.push(99);
console.log(numeros);

numeros.unshift(88);
console.log(numeros);

// Quitar un dato

numeros.pop();
console.log(numeros);

numeros.shift();
console.log(numeros);

console.clear();


// metodo splice()

const letras = ["a", "b", "c", "d"];
console.log(letras);

letras.splice(1, 2);
console.log(letras);

letras.splice(1, 0, "b", "c");
console.log(letras);

letras.splice(4, 0, "e", "f");
console.log(letras);


// Unir y separar arrays

const unido = numeros.join("/");
console.log(unido);

const separado = unido.split("/");
console.log(separado);
console.log(numeros);


// ordenar

console.clear();

const caracteres = ["a", "c", "d", "b"];
console.log(caracteres);

caracteres.sort();
console.log(caracteres);

console.log(numeros);
numeros.sort((a, b) => a - b);
console.log(numeros);


// copiar un arrays

// copia referencial
console.clear();

let array1 = [1, 2, 3, 4];
let array2 = array1
console.log(array1);
console.log(array2);

array1.push(5);
console.log(array1);
console.log(array2);

//shallow copy (copia superficial)

let array3 = ["a", "b", "c"];
let array4 = [...array3];

array3.push("d");
console.log(array3); 
console.log(array4);


// límites de shallow copy

let array5 = [1, 2, ["A", "B"]];
let array6 = [...array5];

array5.push(3);
console.log(array5);
console.log(array6);

array5[2].push("C");
console.log(array5);
console.log(array6);

// Deep clone
console.clear();

let array7 = [3, 4, ["Y", "Z"]];
let array8 = JSON.stringify(array7);
console.log(array7);
console.log(array8);

array8 = JSON.parse(array8);
console.log(array8);




