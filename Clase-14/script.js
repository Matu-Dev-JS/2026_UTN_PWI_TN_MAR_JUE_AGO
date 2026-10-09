/* 
Objetos en JS

Los objetos son un tipo de dato que nos permite describir entidades
*/

function mostrarProducto (producto){
    console.log('El producto ' + producto.nombre + ' cuesta $' + producto.precio )
}



let producto_1 = {
    nombre: 'TV samsung 42"',
    id: 1,
    precio: 4200,
    descripcion: 'Test'
}

let producto_2 = {
    nombre: 'TV samsung 52"',
    id: 2,
    precio: 4800,
    descripcion: 'Test'
}


mostrarProducto(producto_1)
mostrarProducto(producto_2)


/* 

Crear 3 objetos de pais:
Un pais tiene las propiedades 
    id, 
    nombre, 
    cant_hab, 
    km_2,
    continente

*/