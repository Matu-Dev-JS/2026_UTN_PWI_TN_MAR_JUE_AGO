import React, { useState } from 'react'
import LoginForm from './Components/LoginForm/LoginForm'
import Messages from './Components/Messages/Messages'
import FormAltaProducto from './Components/FormAltaProducto/FormAltaProducto'


export default function App() {

  return (
    <div>
      <Messages/>
      <FormAltaProducto/>
    </div>
  )
}


