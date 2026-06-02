console.log("ping tipodedatps.js");


//tipos de datos

let numeros = 44;
let string = "cadena de texto";
let booleano = true; //false
let nulo = null;
let indefinido; 
let array = [2 ,18, "texto", false];
let objeto = {
    nombre: "Macarena",
    apellido: "Lo Sardo",
    telefono: 225566,
}

console.log(numeros);
console.log(typeof(numeros));
console.log(typeof(string));
console.log(typeof(booleano));
console.log(typeof(nulo));
console.log(typeof(indefinido));
console.log(typeof(array));
console.log(typeof(objeto));

let num1 = 33;
let num2 = "22";
num2 = Number(num2);
console.log(num1 + num2)

let pi = "3.14159 es el valor de pi";
let piNumber = Number(pi);

console.log(piNumber, typeof(piNumber));

let piParseInt = parseInt(pi);
console.log(piParseInt, typeof(piParseInt))

let piParseFloat = parseFloat(pi);
console.log(piParseFloat, typeof(piParseFloat));