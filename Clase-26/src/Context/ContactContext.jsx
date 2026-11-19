import { createContext, useState } from "react"

//Creamos el contexto
export const ContactContext = createContext()


//Creamos el componente proveedor de contexto
export function ContactContextProvider(props) {

    const initialContactState = [
        {
            nombre: 'Pepe',
            id: 1,
            ultima_conexion: 'Hoy 17:30',
            estado: 'Baila y se feliz que la vida es una.',
            mensajes: [
                {
                    autor: 'YO',
                    contenido: "Hola!",
                    estado: "VISTO",
                    fecha: "Hoy a las 15:30"
                },
                {
                    autor: 'Pepe',
                    contenido: "Hola!",
                    estado: "VISTO",
                    fecha: "Hoy a las 16:30"
                },
                {
                    autor: 'YO',
                    contenido: "Que tal?",
                    estado: "RECIBIDO",
                    fecha: "Hoy a las 19:30"
                }
            ]
        }
    ]


    const [contacts, setContacts] = useState(initialContactState)


    //Este providerValues es el objeto que retorna mi contexto cuando se lo quiera consumir
    const providerValues = {
        contacts: contacts
    }
    return (
        <ContactContext.Provider
            value={providerValues}
        >
            {props.children}
        </ContactContext.Provider>
    )
}