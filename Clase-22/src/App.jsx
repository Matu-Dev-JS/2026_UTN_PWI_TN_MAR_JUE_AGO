import React from 'react'
import ProductCard from './Components/ProductCard/ProductCard'
import WspContactOption from './Components/WspContactOption/WspContactOption'


/* 
Crear el componente WspContactOption 
Recibira:
  nombre: string
  ultimo_mensaje: string
  fecha: string
  cantidad_mensajes_no_leidos: number

E instanciarlo 3 veces en el App component
<WspContactOption nombre='joe doe' ultimo_mensaje='Que tal?' fecha='17:40' cantidad_mensajes_no_leidos={3}

Solo mostrar la cantidad de mensajes no leidos si hay mensajes no leidos (> 1)

*/


export default function App() {
  return (
    <div>
      <h1>Hola mundo</h1>
      <ProductCard
        titulo={"Tv samsung 42"}
        descripcion={'lorem'}
        precio={200}
      />
      <ProductCard
        titulo={"Mesa ratona"}
        descripcion={'lorem 2'}
        precio={20}
        descuento={10}
      />

      <WspContactOption
        nombre="Matias"
        ultimo_mensaje="Hola, aprobaste"
        fecha="19:40"
        cantidad_mensajes_no_leidos={0}
      />

      <WspContactOption
        nombre="Ayelen"
        ultimo_mensaje="¿Está en el repo?"
        fecha="19:58"
        cantidad_mensajes_no_leidos={3}
      />
      <WspContactOption
        nombre="Veronica"
        ultimo_mensaje="Nos vemos mañana"
        fecha="19:30"
        cantidad_mensajes_no_leidos={1}
      />
    </div>
  )
}
