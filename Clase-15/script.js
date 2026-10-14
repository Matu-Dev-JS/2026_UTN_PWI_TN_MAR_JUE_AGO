
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
let trimestre = [70, 85, 60]

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
]

/* console.log(usuarios)
let maria = usuarios[1]
console.log("Esta es maria", maria) */

let palabras_prohebidas = [
    //0         1       2
    'toyota', 'audi', 'intel'
]


/* 
Crear el array llamado carrito donde cada item sera un objeto con las propiedades, id_producto, cantidad, precio_unitario, nombre.
Crear almenos 3 items dentro el array
*/

let carrito = [
    {//0
        id_producto: 1,
        cantidad: 2,
        precio_unitario: 1500,
        nombre:"televisor"
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
        nombre:"parlante"
    }
]
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
let total = 0
for (let item of carrito){
    console.log("Item", item)
    total = total + (item.precio_unitario * item.cantidad)
}

console.log("El total del carrito es: $" + total)


let notas = [6, 8, 4]
//Calcular el promedio de las notas (usando for / for of)