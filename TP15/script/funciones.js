console.log("ping con funciones.js");

// Función declarada

function hola(nombre){
    console.log(`Hola ${nombre}`);
}

hola("Maqui");
hola("Pablo");


// Función anónima

const saludar = function(nombre){
    console.log(`saludos ${nombre}`);
}

saludar("Lucio");


// Función flecha

const adios = (nombre) => {
    console.log(`Adios ${nombre}`);
}

adios("Maqui");

// Retorno

function calculo(a, b){
    let resultado = a + b;
    return resultado;
}

const operacion = calculo(5, 7);
console.log(operacion);

// Retorno opción 2

function calculo (a,b){
    return a + b;
}

console.log(calculo(5, 7));


// Retorno opción 3 en función flecha  - la flecha reemplaza al return siempre y cuando sea en una sola línea

const calcular = (a, b) => a + b;
console.log(calcular(6, 7));


//callbacks

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

console.log(restar(7, 4));

const calculadora = (a, b, cb) => cb(a, b);  // cb = callbacks

console.log(calculadora(7, 5, multiplicar));


// IIFE - Inmediately Invoked Function Expressions

(function iifePrivada (){
    console.log("IIFE ejecutada");
})();