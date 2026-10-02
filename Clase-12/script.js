/* 
JS es un lenguaje de programacion interpretado
Un lenguaje de programacion nos sirve para dar instrucciones a la computadora, es una herramienta para los seres humanos

TODOS los navegadores aceptan JS como lenguaje de programacion Y SOLO ACEPTAN JS

*/
/* Comentario multilinea */
//Comentario Unilinea

/* 
TIPOS DE DATOS PRIMITIVOS
*/

//Strings: Texto
"Hola"
'Mundo'

//Numbers: Numero
90
0
1.5
-4

//Boolean: verdadero o falso
true
false

//Null: Nulo
null

//Undefined: Indefinido
undefined



//Variables
//Es un espacio reservado en memoria
//Puedo asignar cualquier tipo de dato
/* var edad = 40
var nombre = 'pepe'
var iva = 21

var dinero = 100
var sueldo = 1000


console.log("Mi dinero actual es: $" + dinero)

console.log("Cobre mi sueldo de $" + sueldo) */

//Reasignacion de una variable (cambiar el valor de una variable)
/* dinero = dinero + sueldo

console.log("Ahora mi dinero es $" + dinero) */





//console.log("hola mundo")

//Console.log me permite ordenar al navegador que registre algo en consola
//console.log(dinero)


//Operadores aritmeticos


//concatenacion: +
//Ocurre cuando en operacion hay un string
//Si algun dato no es string lo transforma a string
//'hola' + 'mundo' //'holamundo'

//'hola' + 1 
//'hola' + '1' //'hola1'

//'hola' + true //'holatrue'
//'hola' + String(true) 
//'hola' + 'true' //'holatrue'
//'1' + 1 //'11'

//'' + 0
//'' + '0' = '0'


//Ocurre cuando NO hay un string
//Cuando algun dato de la operacion NO sea numerico LO transforma a numero
//suma: +
10 + 10 // 20
//10 + true //11
//true + true //2


//Cuando algun dato de la operacion NO sea numerico LO transforma a numero
//resta: -
70 - '70' //0


//division: /
100 / '2' //50
100 / undefined //NaN


//multiplicacion: *



//NaN es Not a Number, es un tipo de datos numero
//JS nos da NaN cuando intenta transformar a numero algo que NO se puede transformar a numero
//Number("hola") // NaN
//Number(undefined) //NaN

//Toda operacion excepto la concatenacion con NaN es NaN
//NaN es el unico valor incomparable

/* 
var dinero = '100'
var sueldo = 1000



    console.log("Mi dinero actual es: $" + dinero)
    
    console.log("Cobre mi sueldo de $" + sueldo)
    
    //Reasignacion de una variable (cambiar el valor de una variable)
    dinero = Number(dinero) + Number(sueldo) //Operaciones posibles: suma


    console.log("Ahora mi dinero es $" + dinero)
 */


//Comparadores
//Siempre devuelven un boolean

//Es Igual a: ==
//console.log(7 == 6)
//console.log(1 == '1')//true

//Es estrictamente igual: === (Recomendado)
//console.log(1 === '1')//False

//Es distinto de otro
//console.log(20 != 20)

//Es estrictamente distinto de: !==
//true !== 1 //True


//Es mayor, menor, igual o mayor, o igual o menor
//20 >= 20 //true
//30 <= 20 //Falso
//NaN == NaN //False



//Operadores logicos:

//NOT: Devuelve el valor booleano opuesto
!10 
!Boolean(10)
!true //false

!-50 //false
!'' //true
!NaN //true

var estaElUsuarioLogueado = true
var estaElUsuarioSinLoguear = !estaElUsuarioLogueado

var esDeDia = true
var esDeNoche = !esDeDia


//Selectores: Seleccionan uno de 2 datos
//AND: Verifica si el primer valor es verdadero:
    //Si lo es: devuelve el segundo
    //Sino: Devuelve el primero
//40 && null //null

//Dejo pasar a una persona mayor de edad con mas de 100$

var edad = 48
var dinero = 50

var dejoPasar = edad >= 18 && dinero > 100

 
//OR: Verifica si el primer valor es verdadero:
    //Si lo es: devuelve el primero
    //Sino: Devuelve el segundo
/* '' || 4
4 || '' */

//Dejo pasar a una persona mayor de edad o tiene mas de 100$

var edad = 48
var dinero = 50

var dejoPasar = edad >= 18 || dinero > 100

//Valores verdaderos y falsos
//Los verdaderos son aquellos que al transformarse a booleano dan true
//Los valores falsos son aquellos que al transformase a booleano dan false
/* 
0
null
''
NaN
undefined 
*/