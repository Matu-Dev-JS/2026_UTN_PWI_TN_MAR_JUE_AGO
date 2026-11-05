import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import PI, { sumar } from './matematicas.js'


console.log(PI)
/* 
imports, exports, export default, from es sintaxis de JS, NO DE REACT ni JSX
JS tiene soporte para modulos (poder separar en archivos una aplicacion)


*/



createRoot(document.getElementById('root')).render(
  <App />
)
