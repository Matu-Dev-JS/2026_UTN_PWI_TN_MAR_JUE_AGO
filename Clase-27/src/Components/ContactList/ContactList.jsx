import React, { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import { Link } from 'react-router'

export default function ContactList() {

    /* 
    Cuando consumimos el contexto mediante useContext(Context)
    la funcion nos retornara el "value" prop del <Context.Provider></.Provider>

    En este caso result es igual a providerValues en ContactContext
    */
    //Consumimos el estado global de ContactContext
    const result = useContext(ContactContext)

    //Utilizamos especificamente la lista de contactos
    const contacts = result.contacts


    //Si la lista de contactos esta vacia dar x mensaje
    if(contacts.length === 0){
        return <span>No hay contactos agregados</span>
    }

    //SINO
    //Generamos una lista de contactos JSX (tarjetas)
    const contactListJSX = []

    //Por cada contacto vamos llenando la lista de tarjetas 
    for(const contact of contacts){
        let ultimo_mensaje = contact.mensajes[contact.mensajes.length - 1].contenido
        contactListJSX.push(
            //Usamos el id del contacto como clave unica de cada tarjeta (React pide esto)
            <Link key={contact.id} to={'/contact/' + contact.id} >
                <h2>{contact.nombre}</h2>
                <p>{ultimo_mensaje}</p>
                <div>{contact.ultima_conexion}</div>
            </Link>
        )
    }
    //Renderizamos
    return (
        <div>
            {contactListJSX}
        </div>
    )
}
