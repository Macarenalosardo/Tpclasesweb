console.log("ping con script_3js");

function crearCard(){
    const producto = window.prompt("ingresar descripción");
    const precio = window.prompt("ingresar precio");
    const card = `
    |==================
    |    PRODUCTO      
    |==================
    |Descripción: ${producto}
    |Precio: $${precio}
    |__________________`;
    console.log(card);
    return "gracias por utilizar nuestra función";
    
}