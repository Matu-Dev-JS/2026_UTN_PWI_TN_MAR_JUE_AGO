import React from 'react'
import ProductCard from './Components/ProductCard/ProductCard'



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
    </div>
  )
}
