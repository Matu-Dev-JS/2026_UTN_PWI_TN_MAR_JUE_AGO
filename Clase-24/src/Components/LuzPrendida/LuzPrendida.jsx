import React, { useState } from 'react'

export default function LuzPrendida() {

    const luzPrendidaEstado = useState(true)
    const luzPrendidaValor = luzPrendidaEstado[0]
    const setLuzPrendida = luzPrendidaEstado[1]

    function apagar(){
        setLuzPrendida(false)
    }
    function prender(){
        setLuzPrendida(true)
    }

    if (luzPrendidaValor === true) {
        return <button onClick={apagar}>Apagar</button>
    } 
    else {
        return <button onClick={prender}>Prender</button>
    }
    
    /*  
    otra variante con ternarios
    return (
        luzPrendidaValor 
        ? <button onClick={apagar}>Luz prendida</button>
        : <button onClick={prender}>Luz apagada</button>
    ) */
}
