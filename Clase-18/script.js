/* 
EVENTOS del navegador

Los eventos en el navegador son acciones/sucesos que suceden en la pagina, ejemplo:
    - un usuario usuario envia un formulario
    - un click sobre un boton
    - pasar encima de algun elemento
    - tocar una tecla del teclado

Les dejo una lista detallada: https://www.w3schools.com/tags/ref_eventattributes.asp

Nosotros podemos hacer que cuando se dispare un evento se active una funcion en consecuencia
EJEMPLO
button.addEventListenner(
    'click',
    alertar
)
*/

const btnSaludar = document.getElementById('btn-saludar')

function saludar() {
    document.write('<h1>Hola!</h1>')
}

/* 
addEventListener permite que cierto evento se le asocie una funcion

Super importante: No pongan () a la funcion que enlacen, necesitamos pasarlo como callback
*/
/* btnSaludar.addEventListener(
    'click',
    saludar
)

const contador_HTML = document.getElementById('contador')

let contador = 1


contador_HTML.innerText = contador */

/* 
Implementar los eventos click para que el contador funcione, al dar al "+" debe incrementar y al dar al "-" debe decrementar.

Protip: actualiza la variable contador e imprimila en el span

Llamar a boton de sumar y asignarle que para el evento click se active la funcion de incremento
Llamar a boton de resta y asignarle que para el evento click se active la funcion de decremento
*/


const contador_HTML = document.getElementById("contador");
const btnMenos = document.getElementById("btn-menos");
const btnMas = document.getElementById("btn-mas");

let contadorEstado = 0;

function renderContador (){
    contador_HTML.innerText = contadorEstado;
}

function setContadorEstado (nuevoValor){
    contadorEstado = nuevoValor
    renderContador()
}

renderContador()


function restar() {
    setContadorEstado(contadorEstado - 1)
}

function sumar() {
    let contadorClonado = contadorEstado
    contadorClonado = contadorClonado + 3
    setContadorEstado(contadorClonado)
}

function restablecer (){
    setContadorEstado(0)
}

btnMenos.addEventListener("click", restar);
btnMas.addEventListener("click", sumar);


/* 
El estado de una aplicacion representa justamente los valores internos de esa aplicacion.
Supongamos que estamos en juego, la vida, experiencia, dinero, coordenadas etc son estados del juego

El estado NO es un tipo de dato, es un concepto, ejemplo el dinero de tu billetera virtual
Normalmente estos estados se van a modificar y al modificarse van a actualizar el renderizado de la aplicacion.

LOS ESTADOS SON INMUTABLES, esto quiere decir que un estado no podemos reasignarle otro valor. Para poder cambiar de valor el estado podemos crearnos una funcion de seteo

Cada estado tendra que tener su propia funcion de seteo, la funcion de seteo se usara para actualizar el valor del estado de forma segura. Esa funcion de seteo se encargara que cada vez que se actualice el estado se renderize nuevamente.
*/