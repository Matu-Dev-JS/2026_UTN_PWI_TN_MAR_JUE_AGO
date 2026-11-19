import { createContext } from "react"


//Creamos el contexto
const ContactContext = createContext()


//Creamos el componente proveedor de contexto
export function ContactContextProvider (props){

    console.log("Contexto cargado!!")

    return (
        <ContactContext.Provider>
            {props.children}
        </ContactContext.Provider>
    )
}