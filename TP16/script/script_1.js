console.log("Ping desde script_1")

function saludar(nombre, edad){
    //console.log(`Hola, soy ${nombre} y tengo ${edad} años`);
    const respuesta = `Hola, soy ${nombre} y tengo ${edad} años`;
    return respuesta;
}

const saludo = saludar("Maqui", 32);
console.log(saludo);

const saludo2 = saludar("Pablo", 43);
console.log(saludo2);

//forma abrevidad

function saludarAbreviada(nombre, edad){
    return `Hola, soy ${nombre} y tengo ${edad} años`;
}
console.log(saludarAbreviada("Lucio", 12));