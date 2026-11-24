import React, { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'

export default function ContactList() {
    const result = useContext(ContactContext)

    const contacts = result.contacts

    if(contacts.length === 0){
        return <span>No hay contactos agregados</span>
    }

    const contactListJSX = []

    for(const contact of contacts){
        let ultimo_mensaje = contact.mensajes[contact.mensajes.length - 1].contenido
        contactListJSX.push(
            <div>
                <h2>{contact.nombre}</h2>
                <p>{ultimo_mensaje}</p>
                <div>{contact.ultima_conexion}</div>
            </div>
        )
    }
    return (
        <div>
            {contactListJSX}
        </div>
    )
}
