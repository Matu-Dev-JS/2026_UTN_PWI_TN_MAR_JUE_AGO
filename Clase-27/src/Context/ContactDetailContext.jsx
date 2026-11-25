

/* Este contexto provee un contacto en particular */
/* Este contexto funciona a nivel de router */

import { createContext, useContext } from "react";
import { Outlet, useParams } from "react-router";
import { ContactContext } from "./ContactContext";


export const ContactDetailContext = createContext()


export function ContactDetailContextProvider() {
    console.log("Contexto de detalle de contacto ACTIVADO")

    //Sirve para capturar los parametros de busqueda en la URL 
    // (/:lang/product/:product_id => /es/product/1 => useParams = { product_id: '1', lang: 'es'}) 
    // /us/product/3 => useParams() = {lang: 'us', product_id: '3'}
    // /br/product/juan => useParams = {lang: 'br', product_id: 'juan'}
    // /1/product/pepe => useParams = {lang: '1', product_id: 'pepe'}
    const parametros_url = useParams()
    console.log("Los parametros de esta URL son", parametros_url)

    const contactContextValues = useContext(ContactContext)
    const contact_selected = contactContextValues.getContactById(
        parametros_url.contact_id
    )

    console.log(contact_selected)

    const providerValues = {
        contact_selected: contact_selected
    }
    return (
        <ContactDetailContext.Provider
            value={providerValues}
        >
            <Outlet />
        </ContactDetailContext.Provider>
    )
}


/* 
el componente Routes NO PUEDE TENER COMO HIJOS a componentes DISTINTOS DE <Route/>
*/