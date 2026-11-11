import React, { useEffect, useState } from 'react'


/* 
Consumo de APIs
Seguir viendo estados
*/

export default function App() {

  /* 
  Deberiamos tener 2 estados para manejar la consulta HTTP
    isPending: Boolean
    response
  */
  const isPendingState = useState(true)
  const isPendingValue = isPendingState[0]
  const setIsPending = isPendingState[1]

  const responseState = useState(null)
  const responseValue = responseState[0]
  const setResponse = responseState[1]

  /* 
  JS maneja la asincronia mediante las promesas
  Una promesa es un objeto de JS con 3 estados posibles:
    Pending (pendiente): Aun resolviendose
    Resolved (resuelto): La consulta ya esta resuelta
    Reject (rechazado): La consulta se rechazo (error)
  */
  /* 
  Sirve para emitir consultas HTTP desde el navegador
  Recibe:
    1. La url a consultar 
    2. Un objeto de configuracion de la consulta
        method: "GET" | "POST" | "PUT" | "DELETE"
  */

  async function obtenerUsuarios (){
    let result = await fetch(
      'https://jsonplaceholder.typicode.com/users',
      {
        method: "GET"
      }
    )
    
    //Leemos el contenido de la respuesta como json
    let response_body = await result.json()

    setIsPending(false)
    setResponse(response_body)   
  }


  /* 
  Permite controlar la recarga de una funcion 
  Recibe 2 parametros:
    1. Efecto, la funcionalidad a ejecutar
    2. array de dependencias, si alguno de los valores del array cambia vuelve a ejecutar la funcionalidad, si el array esta vacio solo ejecuta la funcionalidad 1 vez
  */
  useEffect(
    function (){
      obtenerUsuarios()
    },
    []//Vacio para que solo se ejecute la funcion 1 vez
  )
  
  
  console.log(isPendingValue, responseValue)

  let usuarios_jsx = []  
  if( responseValue ){
    for(let usuario of responseValue){
      usuarios_jsx.push(
        <div>
          <span>ID: #{usuario.id}</span>
          <h2>{usuario.name}</h2>
          <div>Email: {usuario.email}</div>
          <hr/>
        </div>
      )
    }
  }
  return (
    <div>
      {
        !isPendingValue 
        ? <div>
          <h1>Usuarios:</h1>
          {usuarios_jsx}
        </div>
        : <span>Cargando...</span>
      }
    </div>
  )
}
