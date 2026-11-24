import { createContext, useState } from "react"
import { initialContactState } from "../data/contactData"

//Creamos el contexto
export const ContactContext = createContext()


//Creamos el componente proveedor de contexto
export function ContactContextProvider(props) {

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