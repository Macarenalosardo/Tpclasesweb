let miVariable = 123;

console.log(miVariable);

miVariable = 456;

console.log(miVariable);

const nombre = "Macarena";
console.log(nombre);

//nombre = "Ignacio";

const apellido = "Lo Sardo";
console.log(nombre, apellido);

//const nombreUsuario = window.prompt("ingrese su nombre");
//console.log(nombreUsuario);

// scoope - alcance 

let color = "rojo";
console.log(color);
{
    let color = "gris";
    console.log(color);
    let numero = 17;
}
console.log(color);
console.log(numero);