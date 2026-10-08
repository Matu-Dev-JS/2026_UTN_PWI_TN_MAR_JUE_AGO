//console.log('hola mundo')

/* 
Funciones nativas
Es una funcion que ya trae el lenguaje
*/
//Dar mediante un pop up informacion al usuario
//alert('hola') 

//Solicitar mediante un pop up informacion al usuario
//Cuando el prompt se ejecuta tu programa se pausa hasta que el usuario da al boton "aceptar"
//Una vez acepta se devuelve (como string) el dato ingresado por usuario
//SI el usuario elige la opcion "cancelar" prompt devolvera un null
/* var edad = prompt('Cual es tu edad?')
console.log(edad) */

//CallStack (pila de llamadas)
//Primero entra en la pila el alert
//Luego el +
//Luego el Number

//alert( 'El año que viene vas a tener ' + ( Number(edad) + 1 ) )

//En una pila de platos sucios el primero que limpias es el ULTIMO en usar
//En una cola de supermercado el primero en entrar es el PRIMERO en salir


// 12 + 1 + 5 


//Condicionales (control de flujo)

/* 
Las {} (llaves) nos permiten hacer un bloque de codigo
Un bloque de codigo es un bloque de acciones/codigo
*/

/* //es de tipo string o null
var edad = prompt("ingresa una edad")

//Es de tipo boolean
var sosMayorEdad = Number(edad) >= 18 */


//Si sosMayorEdad es verdadero ejecuta tal bloque de codigo
/* if(sosMayorEdad){
    alert('Bienvenido, sos mayor de edad!')
}
else if (edad >= 16){
    alert('Sos casi mayor de edad')
}
else if(edad >= 14){
    alert("Falta poco, pero sos menor de edad")
}
else {
    alert("Sos menor de edad!")
}


console.log("Fin del programa")
 */
/* 
(15 / 20 min)
Pedirle al usuario un numero del 1 al 7, dependiendo del numero que nos de el usuario deberemos decir 
1. Lunes
2. Martes
3. Miercoles
4. Jueves
5. Viernes
6. Sabado
7. Domingo
Si no es ningun numero de esos decir "dia invalido"

Aclaracion:
- Cuando digo pedir al usuario hago referencia al prompt
- Cuando digo decir al usuario hago referencia al alert
*/

/* var dia = prompt("Elegi un número del 1 al 7");

if (dia === "1") {
    alert("Lunes");
}
else if (dia === "2") {
    alert("Martes");
}
else if (dia === "3") {
    alert("Miércoles");
}
else if (dia === "4") {
    alert("Jueves");
}
else if (dia === "5") {
    alert("Viernes");
}
else if (dia === "6") {
    alert("Sábado");
}
else if (dia === "7") {
    alert("Domingo");
}
else {
    alert("número inválido");
}


console.log("El día seleccionado es: " + dia); */

//ES6 trae las variables let y const. Dichas variables se recomiendan por sobre var.
//Let es para variables normales
//Const es para variables constantes, es decir que no cambian su valor. Las usamos para guardar valores que no van a cambiar de valor a lo largo de la ejecucion del programa.


/* let edad = 30
let nombre = 'pepe'

edad = 45
nombre = 'juan'

const porcentaje_iva = 21
const app_version = '1.2' */

//Bucles
//Los bucles nos permiten repetir bloques de codigo
/* 
En programacion existen 2 tipos de bucles:
- Condicionales: WHILE
    Voy a pedir la password y verificar, si es incorrecta la vuelvo a pedir
    Voy a enviar un mail cada 1 hora hasta messi meta un gol
    
- Por conteo/limite: FOR
    - Quiero mandar un mail de recordatorio a cada usuario de mi plataforma (Limite = cantidad de empleados)
    - Quiero sacar el promedio anual de un alumno de sus 3 trimestres
    - Quiero sacar el total de un carrito. Voy a hacer la sumatoria de cada concepto del carrito (limite = cantidad de items en el carrito)
*/

//Quiero pedir al usuario un nombre hasta que elija pepe
/* 
let nombre = prompt('seleccione un nombre')

//While recibe una condicion, si es verdadera vuelve a ejecutar el bloque de codigo, sino se corta el while
while(nombre !== 'pepe'){
    alert('Nombre incorrecto')
    nombre = prompt('seleccione otro nombre')
}

alert("Nombre correcto") 
*/

/* 
Practica)
Solicitar un numero del 1 al 7, si no es del 1 al 7 decir numero incorrecto y volver a solicitar. 
Si es correcto ejecutar el codigo anterior para determinar el dia de la semana
*/

//Promedio de 3 notas

/* let sumatoria = 0
let cantidad_notas = 6

for(
    let iterador = 1; //Donde inicia iterador
    iterador <= cantidad_notas; //Limite: condicion que si deja de cumplir deja de repetirse el codigo
    iterador = iterador + 1 //Ritmo de actualizacion
)
//Este bloque de codigo se repetira mientras la condicion de limite sea verdadera
{
    let nota = prompt("Ingresa la nota " + iterador)
    sumatoria = sumatoria + Number(nota)
    alert("La nota es " + nota + ' y la sumatoria es ' + sumatoria)
}


let promedio = sumatoria / cantidad_notas

alert("El resultado del promedio anual es " + promedio)
 */

/* 
Principios de programacion:
- Principio DRY (Dont repeat yourself/No te repitas):
Significa que dentro de lo posible deberias evitar repetir logica de codigo, debido a que esta hace que nuestro programa sea mas dificil de mantener y poco escalable
*/

/* 
Crear un stock
Solicitar al usuario la cantidad de productos agregar (un numero)
Dependiendo de esa cantidad debera solicitar al usuario los titulos de cada producto
Sumar los titulos y por alerta mostrar los nombres

EJ:
El usuario elije 3 productos

Ingresa el titulo 1: "tomate"
Ingresa el titulo 2: "pera"
Ingresa el titulo 3: "zanahoria"

Resultado final: "Los productos que ingreste son: Tomate, Pera, Zanahoria"

*/



/* 
let nota_1 = prompt("Ingresa la nota 1")
sumatoria = sumatoria + Number(nota_1)
alert("La nota es " + nota_1 + ' y la sumatoria es ' + sumatoria)

let nota_2 = prompt("Ingresa la nota 2")
sumatoria = sumatoria + Number(nota_2)
alert("La nota es " + nota_2 + ' y la sumatoria es ' + sumatoria)

let nota_3 = prompt("Ingresa la nota 3")
sumatoria = sumatoria + Number(nota_3)
alert("La nota es " + nota_3 + ' y la sumatoria es ' + sumatoria)
 */


/* 

let numeroDiaSemana = prompt("ingrese un numero del 1 al 7")
while (Number(numeroDiaSemana) < 1 || Number(numeroDiaSemana) > 7){
    alert("numero incorrecto")
    numeroDiaSemana = prompt ("elija otro numero del 1 al 7")
}

if (numeroDiaSemana === "1"){
    alert("lunes");
}
else if (numeroDiaSemana === "2"){
    alert("martes");
}
else if (numeroDiaSemana === "3"){
    alert("Miercoles");
}
else if (numeroDiaSemana === "4"){
    alert("jueves");
}
else if (numeroDiaSemana === "5"){
    alert("vienes");
}
else if (numeroDiaSemana === "6"){
    alert("sabado");
}
else if (numeroDiaSemana === "7"){
    alert("domingo");
}
 */


/* let cantidadProductos = Number(
    prompt("¿Cuántos productos querés ingresar?")
);

let productos = "";


for (
    let i = 1; 
    i <= cantidadProductos; 
    i++ //i = i + 1 (++ es la abreviacion de incrementar el valor de una variable en 1)
) {
    const nombre = prompt("Ingresá el nombre del producto " + i);
    if (i === 1) {
        productos = nombre;
    } else {
        productos = productos + ", " + nombre;
    }
}
alert("Los productos que ingresaste son: " + productos);
 */
