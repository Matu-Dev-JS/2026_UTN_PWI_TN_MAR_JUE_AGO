import React, { useContext } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { ContactContext } from '../Context/ContactContext'

export function LoginScreen() {

    //Usar/Consumiendo el contexto
    const result = useContext(ContactContext)

    console.log(result.contacts)
    return (
        <div>
            <Navbar/>
            <h1>Iniciar sesion</h1>
        </div>
    )
}


