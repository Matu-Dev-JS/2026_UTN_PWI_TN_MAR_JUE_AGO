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
/* 
let pais_1 = {
    id: 1,
    nombre: Argentina,
    cant_hab: 4500000,
    km_2: 2780400,
    continente: 'América del Sur'
}
let pais_2 = {
    id: 2,
    nombre: Brasil,
    cant_hab: 21300000,
    km_2: 8514200,
    continente: 'América del Sur'
}
let pais_3 = {
    id: 3,
    nombre: 'Australia',
    cant_hab: 19000000,
    km_2: 756102,
    continente: 'Oceanía'
} */


/* let pais_1 = {
    id: 1,
    nombre: "Argentina",
    cant_hab: 4500000,
    km_2: 2780400,
    continente: 'América del Sur'
} */

//Logica para que hayan mas habitantes en arg
//pais_1.cant_hab = pais_1.cant_hab + 1



let personaje = {
    nombre: 'pepe',
    edad: 29,
    id: 1,
    dinero: 20,
    salario: 5000
}

function renombrarPersonaje(nuevo_nombre){
    personaje.nombre = nuevo_nombre
}

/* 
Crear las funciones:
    renombrarPersonaje(nombre) Debe cambiar el nombre del personaje
    cobrarSueldo() Debera agregar al salario el valor de su sueldo
    incrementarSueldoPorPorcentaje(porcentaje) incrementar el salario en ese porcentaje
    cumplirAnios() Incrementar su edad en 1
*/

console.log('Personaje original', personaje)

renombrarPersonaje('victor')
console.log('Personaje modificado', personaje)

