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
function sumar(numero_1, numero_2){
    let resultado = Number(numero_1 ) + Number(numero_2)
    console.log("El resultado de la suma de " + numero_1 + ' y ' + numero_2 + ' es ' + resultado)
}

//Le paso los argumentos a una funcion
sumar(1, 7)
sumar(2, 2)


function mandarMailReporte (email){

}

mandarMailReporte('pepe@gmail.com')
mandarMailReporte('juan@gmail.com')


/* 
Crear la funcion calcularIva(precio) nos muestre por consola "el iva del ${precio} es ${iva}"
calcularIva(1000) "el iva del $1000 es $210"
*/