import { createContext, useState } from "react"
import { initialContactState } from "../data/contactData"
import { useParams } from "react-router"

//Creamos el contexto
export const ContactContext = createContext()


//Este contexto provee la lista de contactos

//Creamos el componente proveedor de contexto
export function ContactContextProvider(props) {
    console.log("Contexto de contactos general activado")
    const [contacts, setContacts] = useState(initialContactState)


    function getContactById(contact_id){
        for(const contact of contacts){
            if(Number(contact.id) === Number(contact_id)){
                return contact
            }
        }
        return null
    }

    //Este providerValues es el objeto que retorna mi contexto cuando se lo quiera consumir
    const providerValues = {
        contacts: contacts,
        getContactById: getContactById
    }
    return (
        <ContactContext.Provider
            value={providerValues}
        >
            {props.children}
        </ContactContext.Provider>
    )
}