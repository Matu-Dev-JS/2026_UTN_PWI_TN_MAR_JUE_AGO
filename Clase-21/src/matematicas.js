/* 
Este es el modulo de matematicas
Cualquier funcion mamatica la vamos a ir dejando por aqui

export: Se usa para habilitar que externamente llamen a algo

export default: Se usa para definir un export en caso de no aclarar que se quiere importar

import: Se usa para traer algo de un modulo externo

*/
export function sumar (a, b) {
    return a + b
}

export function restar (a, b){
    return a - b
}

const PI = 3.14

//export { sumar, restar }
export default PI
