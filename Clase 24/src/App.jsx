import React, { useState } from 'react'




export default function App() {



  const [formState, setFormState] = useState(null)
  /* 
  Formularios en react
    No controlados (No necesitan de un estado que los este siguiendo por cada cambio del valor)
    Controlados (NECESITAN de un estado)
  */

  /* Toda funcion asociada a un evento recibe por parametro a event */
  function manejarInicioSesion (event){
    console.log("hola")

    /*
    Prevenir el comportamiento por defecto del evento
    Queremos que no se recargue la pagina (Un envio de form por defecto recarga la pagina)
    */
    event.preventDefault()

    /* 
    event.target es en que elemento se origino el evento
    event.target es en este caso el formulario que se envio
    */
    const form = event.target
    const form_values = {
      email: form.email.value,
      name: form.name.value
    }
    setFormState(form_values)
  }

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }


  return (
    <div>
      <h1>Iniciar sesion</h1>
      <form onSubmit={manejarInicioSesion} id='pepito'>
        <div>
          <label htmlFor="name">Ingrese su nombre:</label>
          <input type='text' id='name' name='name'/>
        </div>
        <div>
          <label htmlFor="email">Ingrese su email:</label>
          <input type='text' id='email' name='email'/>
        </div>
        <button type='submit'>Iniciar sesion</button>
      </form>
      {
        formState && formState.email.length < 3 && <span>El email es muy chico</span>
      }
      {
        formState && !validarEmail(formState.email) && <span>El email es invalido!</span>
      }
    </div>
  )
}
