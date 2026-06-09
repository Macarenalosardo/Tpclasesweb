console.log("ping con script.js")

// Métodos y propiedades de strings

let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

// Propiedad length (largo)

const largo = letras.length;
console.log(largo);

// Métodos de selección

let letraNumero = letras.charAt(1);
console.log(letraNumero);

letraNumero = letras[1];
console.log(letraNumero);

// Extraer sección

let frase = "Curso de: Programación";

let seccion = frase.slice(0, 5);
console.log(seccion);

seccion = frase.slice(-12);
console.log(seccion);

seccion = frase.slice(10);
console.log(seccion);

// Conversión de caja

const minuscula = frase.toLowerCase();
console.log(minuscula);

const mayuscula = frase.toUpperCase();
console.log(mayuscula);

// Trim (recortar)

let espaciado = "     texto valido     ";
console.log(espaciado);
let recortado = espaciado.trim();
console.log(recortado);

//valor1.toLowerCase().trim() === valor2.toLowercase(). trim();

// Replace

let nombre = "Pablo Deganis";
console.log(nombre);
nombre = nombre.replace("Pablo", "Lucio");
console.log(nombre);

// Ver regExp <--- 

// Includes
const colores = "verde, rojo, azul";
let consulta = colores.includes("verde");
console.log(consulta);
consulta = colores.includes("Verde");
console.log(consulta);

// Split (separar)

let arreglo = colores.split(",");
console.log(arreglo);
