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

//es de tipo string o null
var edad = prompt("ingresa una edad")

//Es de tipo boolean
var sosMayorEdad = Number(edad) >= 18


//Si sosMayorEdad es verdadero ejecuta tal bloque de codigo
if(sosMayorEdad){
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