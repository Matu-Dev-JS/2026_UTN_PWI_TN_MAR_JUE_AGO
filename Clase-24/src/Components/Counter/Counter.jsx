import React, { useState } from 'react'

/* 
Un componente tiene un ciclo de vida
    - Monta (1er renderizado)
    - Re-renderizado => estados

Los estados en react controlan el re-renderizado de un componente
useState es una funcion de REACT que sirve para crear estados
useState recibe el valor inicial del estado como parametro
useState retorna SIEMPRE un array, dicho array se compone de 2 posiciones
    - En la primera posicion esta el valor del estado
    - En la segunda posicion esta el setter del estado (la funcion de cambio)

Los estados son INMUTABLES, es decir no debes modificar el valor de tu estado (por tu cuenta)
Si queres cambiar el valor de tu estado LA FORMA CORRECTA ES USAR EL SETTER del estado
El setter re-renderiza el componente
LA CARACTERISTICA MAS IMPORTANTE DEL SETTER ES QUE AL SER INVOCADO RE-RENDERIZA MI COMPONENTE
OJO con llamar al setter cuando se monta el componente, esto hara que re-renderize tu componente INFINITAMENTE
*/



export default function Counter() {
    const contador_estado = useState(50)
    const contador_estado_valor = contador_estado[0]
    const setContadorEstado = contador_estado[1]

    function increment (){
        //Efecto principal: Ajusto que mi estado counter ahora valga 80
        //Efecto secundario: Re-renderizar counter
        setContadorEstado(contador_estado_valor + 1)
    }

    function decrement(){
        setContadorEstado(contador_estado_valor - 1)
    }


    console.log('Soy el componte Counter, me estoy renderizando')
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{contador_estado_valor}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

