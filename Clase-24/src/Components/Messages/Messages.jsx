/* 
Crear el componente Messages
El componente debe tener un formulario con un campo (textarea) para escribir el contenido del mensaje
El formulario debe ser controlado (Se debe trackear el campo de contenido con un estado)
Validaciones y errores: 
    - Validar que para crear un mensaje almenos se haya escrito algo
    - Validar que el contenido no contenga la palabra "Voldermort"
  
Si las validaciones se pasan se debe poder enviar el mensaje
Al enviar el mensaje se sumara dicho mensaje a la lista del estado de mensajes 
Debe renderizarse debajo o encima del form la lista de mensajes


Revisar el archivo FormAltaProducto como ejemplo de formulario controlado
Recomiendo usar la misma logica de ids implementada en el FormAltaProducto o directamente que los mensajes NO tengan ID
*/

import { useState } from "react"

function Messages (){
    const [messages, setMessages] = useState([])

    return (
        <div>
            <h2>Formulario de mensajes: </h2>
            <form>
                <div>
                    <label htmlFor="content">Contenido del mensaje:</label>
                    <textarea id="content" name="content"></textarea>
                </div>
                <button>Enviar mensaje</button>
            </form>

            <h2>Messages</h2>
            <div>
                {
                    messages.length === 0
                    ? <span>Aun no hay mensajes</span>
                    : <div>
                        lista de mensajes
                    </div>
                }
            </div>
        </div>
    )
}

export default Messages