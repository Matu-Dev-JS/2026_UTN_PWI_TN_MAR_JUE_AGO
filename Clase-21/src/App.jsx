import React from 'react'

export default function App() {

  
  return (
    <div>
      <h1>Hola mundo</h1>
      <button>click</button>
      <LoginForm/>
      <ProductCard titulo='Tv samsung 50"' precio={2000} descripcion='Todavia no' descuento={10}/>
      <ProductCard titulo='Mesa ratona' precio={400} descripcion='Todavia no' descuento={0}/>
      <ProductCard titulo='vaso cristal' precio={10} descripcion='Todavia no' descuento={20}/>
      <ProductCardV2 titulo='vaso cristal' precio={10} descripcion='Todavia no' descuento={20}/>
    </div>
  )
}

/* 
JSX es lenguaje que permite la combinacion de estructuras y sintaxis de JS y HTML
JSX trae como caracteristica nueva el tipo de dato JSX, es lo que veremos como "html"
En JSX existen los componentes, los componentes sirven para mostrar/renderizar fragmentos de nuesta aplicacion.
Un componente es una funcion que retorna JSX/HTML
Por buenas practicas un componente se nombra en mayuscula EJ: App, Button, Header, RegisterForm, ProductList
Un componente para poder utilizarlo lo debemos Instanciar

React nos permite separar nuestra pagina en componentes, la idea es la misma que una linea de montaje
*/


function MyComponent (){
  return (
    <div>Hola soy un componente</div>
  )
}

function LoginForm (){
  return (
    <form>
      <div>
        <label>Email:</label>
        <input type='email' />
      </div>
      <div>
        <label>Password:</label>
        <input type='password' />
      </div>
      <button>Inciar sesion</button>
    </form>
  )
}

/* 
TODO COMPONENTE recibe unas propiedades por parametro
Las propiedades siempre seran de tipo de dato objeto 
Las propiedades seran pasadas en instancia del componente
*/

function ProductCard ( propiedades ){
  console.log('Propiedades:', propiedades)

  let precio_con_descuento = propiedades.precio - propiedades.precio * ((propiedades.descuento / 100))

  let span_descuento = null
  if(propiedades.descuento > 0){
    span_descuento = <span>({propiedades.descuento}% OFF)</span>
  }
  return (
    <div>
      <hr/>
      <h2>{propiedades.titulo}</h2>
      <p>{propiedades.descripcion}</p>
      <span>Precio: ${precio_con_descuento} ARS {span_descuento}</span>
      <button>Comprar</button>
    </div>
  )
}

function ProductCardV2 ( propiedades ){
  console.log('Propiedades:', propiedades)

  let precio_con_descuento = propiedades.precio - propiedades.precio * ((propiedades.descuento / 100))

  let span_descuento = null
  if(propiedades.descuento > 0){
    span_descuento = <span>({propiedades.descuento}% OFF)</span>
  }
  return (
    <div>
      <hr/>
      <h2>{propiedades.titulo}</h2>
      <p>{propiedades.descripcion}</p>
      <span>Precio: ${precio_con_descuento} ARS {span_descuento}</span>
      
    </div>
  )
}

/* 
function saludar (nombre){
  console.log("Hola " + nombre)
  return 1
}
 */

/* 
JSX es una sintaxis nueva que permite usar HTML dentro de JS
En JSX existe un nuevo tipo de dato llamado JSXElement, un JSXElement es basicamente un elemento de HTML en JS
*/