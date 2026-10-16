
let personaje = {
    nombre: 'pepe',
    edad: 29,
    id: 1,
    dinero: 20,
    salario: 5000
}

function renombrarPersonaje(nuevo_nombre) {
    personaje.nombre = nuevo_nombre
}

/* 
Crear las funciones:
    renombrarPersonaje(nombre) Debe cambiar el nombre del personaje
    cobrarSueldo() Debera agregar al salario el valor de su sueldo
    incrementarSueldoPorPorcentaje(porcentaje) incrementar el salario en ese porcentaje
    cumplirAnios() Incrementar su edad en 1
*/
/* function cobrarSueldo (){
    let suma = personaje.dinero + personaje.salario ;
    personaje.dinero = suma
}


console.log ("capital acumulado ",personaje.dinero);
cobrarSueldo()

console.log ("capital acumulado ",personaje.dinero);
 */

/* function incrementarSueldoPorPorcentaje(porcentaje){
    personaje.salario = personaje.salario + (personaje.salario * (porcentaje / 100)) 
}

incrementarSueldoPorPorcentaje(10)
console.log(personaje) */


/* function cumplirAnios(){
    let nueva_edad = personaje.edad + 1 ;
    personaje.edad = nueva_edad

}

cumplirAnios()
console.log ("personaje ", personaje.nombre) ;
console.log ("la edad que va a cumplir ", personaje.nombre, " es ", personaje.edad); */


/* Arrays */

/* 
Los arrays son listas ordenadas de datos
Nos permiten agrupar datos
Ejemplo: 
    - Tengo las notas de un trimestre
    - Una lista de usuarios del sistema
    - Palabras prohebidas en la plataforma
    - Operaciones disponibles
*/
//               0,  1,  2
/* let trimestre = [70, 85, 60]

let usuarios = [
    { //0
        id: 1,
        name: 'pepe'
    },
    { //1
        id: 2,
        name: 'maria'
    },
    { //2
        id: 3,
        name: 'juan'
    }
] */

/* console.log(usuarios)
let maria = usuarios[1]
console.log("Esta es maria", maria) */
/* 
let palabras_prohebidas = [
    //0         1       2
    'toyota', 'audi', 'intel'
] */


/* 
Crear el array llamado carrito donde cada item sera un objeto con las propiedades, id_producto, cantidad, precio_unitario, nombre.
Crear almenos 3 items dentro el array
*/

/* let carrito = [
    {//0
        id_producto: 1,
        cantidad: 2,
        precio_unitario: 1500,
        nombre: "televisor"
    },
    {//1
        id_producto: 2,
        cantidad: 1,
        precio_unitario: 800,
        nombre: "notebook"
    },
    {//2
        id_producto: 3,
        cantidad: 3,
        precio_unitario: 500,
        nombre: "parlante"
    }
] */
/* 
console.log(carrito[0])

console.log(carrito[1])

console.log(carrito[2]) */
/* 
for(let indice = 0; indice < carrito.length; indice = indice + 1){
    console.log("Indice: " + indice)
    let item_carrito = carrito[indice]
    console.log('Item:', item_carrito)
}
 */

/* 
Por cada item de mi array carrito voy a hacer x cosa
*/
/* let total = 0
for (let item of carrito) {
    console.log("Item", item)
    total = total + (item.precio_unitario * item.cantidad)
}

console.log("El total del carrito es: $" + total) */


/* let notas = [6, 8, 4] */
//Calcular el promedio de las notas (usando for / for of)

/* let sumatoria_notas = 0
for (let i = 0; i < notas.length; i = i + 1) {
    sumatoria_notas = sumatoria_notas + notas[i]
}

let promedio = sumatoria_notas / notas.length

console.log('El promedio es ' + promedio) */

/* let notas = [6, 8, 4]
let sumatoria_notas = 0
for (let nota of notas) {
    sumatoria_notas = sumatoria_notas + nota
}
let promedio = sumatoria_notas / notas.length
console.log("El promedio es: " + promedio) */


//Metodos de array
//Nos permiten hacer acciones con los arrays

/* let nombres = ['juan', 'jose'] */

//push nos permite agregar al final de un array
/* 
nombres.push('pepe')
nombres.push('maria') 
*/

//unshift nos permite agregar al principio de un array
//nombres.unshift('pepe')

//pop eliminar el ultimo elemento del array
//nombres.pop()

//shift eliminar el primer elemento del array
//nombres.shift()

//indexof nos permite saber cual es el indice de cierto elemento
/* for(let nombre of nombres){
    let indice_nombre = nombres.indexOf(nombre)
    console.log('Indice ' + indice_nombre, nombre)
} */


//let nombres = ['juan', 'juana', 'jose', 'maria'] 
//splice nos permite eliminar/agregar un cierto elemento del array por su indice
//Quiero eliminar a jose:
/* 
let indice_jose = nombres.indexOf('jose')
nombres.splice(indice_jose, 1) 
*/

//Quiero agregar en la posicion de jose a 'pepe'
/* 
let indice_jose = nombres.indexOf('jose')
nombres.splice(indice_jose, 0, 'pepe') 
 */

//Quiero remplazar en la posicion de jose a 'pepe'
/* 
let indice_jose = nombres.indexOf('jose')
nombres.splice(indice_jose, 1, 'pepe')  
*/


//console.log(nombres)


let productos = [
    {
        id: 10,
        nombre: 'Tv Samsung',
        stock: 30,
        precio: 4000
    }
]

//Crear la funcion llamada agregarProducto que sume un producto a la lista de productos

//Crear una funcion llamada obtenerProductoPorId(id_producto) que devuelva el producto con el id buscado, si no lo encuentra que devuelva null

function agregarProducto(id, nombre, stock, precio) {
    let nuevo_producto = {
        id: id,
        nombre: nombre,
        stock: stock,
        precio: precio
    }
    productos.push(nuevo_producto)
}

//Buscar algo en una lista
//Recorrer la lista y por cada elemento ejecutar una condicion -
//- (En este caso el producto.id === id_producto)


function buscarProductoPorId(id_producto) {
    for (let producto of productos) {
        if (producto.id === id_producto) {
            return producto
        }
    }
    return null
}


/* 
agregarProducto(2, 'mesa de madera', 2, 120)

console.log(productos)
 */

let producto_con_id_2 = buscarProductoPorId(10)
/* console.log('El producto con id 10 es ', producto_con_id_2) */


let usuarios = [
    {
        id: 4,
        email: "julieta@gmail.com",
        nombre: 'julieta'
    },
    {
        id: 1,
        email: "pepe@gmail.com",
        nombre: 'pepe'
    },
    {
        id: 2,
        email: "jose@gmail.com",
        nombre: 'jose'
    },
    {
        id: 3,
        email: "adrian@gmail.com",
        nombre: 'adrian'
    },
   
]

/* 
Crear las funciones:
- buscarUsuarioPorId(id_usuario) Cintia
    function buscarUsuarioPorId(id_usuario) {
        for (let usuario of usuarios) {
            if (usuario.id === id_usuario) {
                return usuario
            }
        }
        return null
    }


- buscarUsuarioPorEmail(email) FLavia
    function buscarUsuarioPorEmail(email) {
    for (let usuario of usuarios) {
        if (usuario.email === email) {
            return usuario
        }
    }
    return null
}


- buscarUsuarioPorNombre(nombre) Veronica
    
    function buscarUsuarioPorNombre(nombre) {
        for (const usuario of usuarios) {
            if (usuario.nombre === nombre) {
                return usuario;
            }
        }
        return null 
    }


- eliminarUsuarioPorId(id_usuario) (Dificil) Ramiro
*/
function buscarUsuarioPorId(id_usuario) {
    for (let usuario of usuarios) {
        if (usuario.id === id_usuario) {
            return usuario
        }
    }
    return null
}

function eliminarUsuarioPorId(id_usuario) {

    /* Que necesitamos del usuario para eliminarlo? el indice */

    /* usuario es de tipo de dato: object | null */
    let usuario = buscarUsuarioPorId(id_usuario)

    /* Si no lo encuentra cortar funcion */
    if(usuario === null){
        return null
    }

    let indice_usuario = usuarios.indexOf(usuario)
    usuarios.splice(indice_usuario, 1);
    return true
}


/* 
splice sirve para elminar, agregar o remplazar un cierto elemento del array por su indice
    0       1       2
['pepe', 'juan', 'maria']
splice(indice_desde_donde_operar, cantidad_de_elementos_a_eliminar)
*/





/* Los IF NO EVALUAN QUE LA CONDICION SEA VERDADERA (true), sino en cambio evaluan que LA CONDICION SEA truthy */
/* 
Un valor truthy es cuando al transformar ese valor a boolean nos da un true
    !falsy = truthy

Un valor falsy es cuando al transformar ese valor a boolean nos da false
    - 0
    - null
    - undefined
    - NaN 
    - ''
    - false


! NOT devuelve el opuesto booleano de el valor negado
*/


/* -2, -1, 0, 1, 2, 3  | null*/
/* let piso_seleccionado = 0
const pisos_validos = [-2, -1, 0, 1, 2, 3]

if( piso_seleccionado === null ){
    console.log("No seleccionaste piso")
}


function validarPiso (piso_seleccionado){
    for(let piso_valido of pisos_validos){
        if(piso_seleccionado === piso_valido){
            return true
        }
    }
    return false
}


if(validarPiso(piso_seleccionado)){
    console.log('Seleccionaste piso ' + piso_seleccionado)
} */

/* eliminarUsuarioPorId(4)
console.log(usuarios) */



