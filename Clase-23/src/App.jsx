import React from 'react'


/* 
Consumo de APIs
Seguir viendo estados
*/

export default function App() {
  /* 
  Sirve para emitir consultas HTTP desde el navegador
  Recibe:
    1. La url a consultar 
    2. Un objeto de configuracion de la consulta
        method: "GET" | "POST" | "PUT" | "DELETE"
  */
  fetch(
    'https://jsonplaceholder.typicode.com/users',
    {
      method: "GET"
    }
  )
  return (
    <div>
      
    </div>
  )
}
