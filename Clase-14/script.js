/* 
Las variables guardan datos en memoria
Las funciones nos permite guardar una accion en la memoria
*/

//Declaramos la funcion saludar
function saludar(){
    console.log("hola que tal!")
}


/* Invocacion / llamada de una funcion */
/* Cuando invocas una funcion la estas ejecutando */
//saludar()



/* 
A una funcion le puedo pasar informacion, esa informacion se pasa como parametro de la funcion
*/
/* function sumar(numero_1, numero_2){
    let resultado = Number(numero_1 ) + Number(numero_2)
    console.log("El resultado de la suma de " + numero_1 + ' y ' + numero_2 + ' es ' + resultado)
} */




//Le paso los argumentos a una funcion
/* sumar(1, 7)
sumar(2, 2)


function mandarMailReporte (email){

}

mandarMailReporte('pepe@gmail.com')
mandarMailReporte('juan@gmail.com')
 */

/* 
Crear la funcion calcularIva(precio) nos muestre por consola "el iva del ${precio} es ${iva}"
calcularIva(1000) "el iva del $1000 es $210"
*/

/* function calcularIva(precio){
    let iva = Number(precio) * (21 / 100)
    console.log("el iva del $" + precio + " es $" + iva)
}


calcularIva(1000)
calcularIva(100)
calcularIva(200)
 */

/* 
Una variable let o const tiene un alcance, el alcance es dentro del bloque de codigo en cual fue declarado
Si no esta declarado dentro de ningun bloque de codigo entonces es global (por ende tiene un alcance global)
*/

/* {
    let nombre = 'pepe'
    
    console.log(nombre)
}
 */



/* let edad = 50


console.log(edad)

{
    console.log(edad)

    {
        console.log(edad)
    }
} */


//Garbage collector 
/* 
Soy un recolector de basura y mi mision es mantener limpia la memoria
*/


/* function calcularIva (precio){
    let resultado = precio * 0.21
    console.log(resultado)
}

calcularIva(1000)

console.log(resultado) */

/* {
    console.log('paso 1')
    let nombre = 'pepe'
    console.log(nombre)
}



console.log('paso 2')

console.log('paso 3') */

/* 
function calcularPorcentaje (precio, porcentaje){
    let resultado = Number(precio) * Number(porcentaje/100);
    console.log("el iva es $" + Number(resultado))
}


//Aca empieza el programa
let precio = prompt ("ingrese precio producto");
let porcentaje_iva = prompt ("ingrese valor iva sin el %");
calcularPorcentaje(precio, porcentaje_iva)

 */



/* 
Principio de single responsability 
Una funcion deberia idealmente tener una sola responsabilidad principal para que esa funcion sea re-usable
*/

/* 
responsabilidades: 
    - sumar
    - mostrar la suma por consola
*/
/* function sumar (a, b){
    let resultado = a + b
    console.log("El resultado es " + resultado)
}
 */

/* Mostrar la suma en un mail */
/* Mostrar la suma en un alert */
/* Mostrar la suma en un HTML */

/* function sumarYMostrarEnHTML(a, b){
    document.write('<h1>El resultado de la suma es ' + (a + b) + ' </h1>')
}

sumarYMostrarEnHTML(4, 5) */


function sumar (a, b){
    let resultado = a + b
    return resultado
}

function mostrarHTML (html){
    document.write(html)
}

let resultado = sumar(4, 9)

console.log('el resultado es ' + resultado)
mostrarHTML('<h1>El resultado de la suma es ' + resultado + ' </h1>')



