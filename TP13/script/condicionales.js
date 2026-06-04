console.log("ping condicionales.js");

if(2 == 3){
    console.log("operacion logica verdadera");
} else{
    console.log("operacion logica falsa");
}

let color// = window.prompt("color del semáforo")

if(color == "verde"){
    console.log("avanzar");
} else if (color == "amarillo"){
    console.log("precaución");
} else if (color == "rojo"){
    console.log("detenerse");
} else {
    console.error("[ERROR] - Semáforo roto");
}

// cargar un monto de compra ("window.prompt()") / si > $50.000 descuento del 25% / si > $20.000 descuento 10% - sino ningun descuento - devolver valor por consola ("console.log()")

/* let valor = window.prompt("Monto de compra");

if(valor > 50000){
    console.log("25% de descuento");
    console.log("valor a pagar", (valor * 0.75));
} else if( valor > 20000){
    console.log("10% de descuento");
    console.log("valor a pagar", (valor * 0.9));
} else {
    console.log("sin descuento");
    console.log("valor a pagar:", (monto));
}  */

// Ejercicio - llevando mas de 10 productos por un total superior a $200.000 aplicar un descuento del 20% al total

let total = window.prompt("Ingresar total");
let cantidad = window.prompt("Ingresar cantidad");

if(cantidad > 10 && total > 200000 ){
    console.log(`Aplica descuento, cobrar: ${total * 0.8}`);
} else {
    console.log(`No aplica descuento, cobrar: ${total}`);
}