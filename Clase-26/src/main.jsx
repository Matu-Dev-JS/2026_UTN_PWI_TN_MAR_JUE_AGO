import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ContactContextProvider } from './Context/ContactContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContactContextProvider>
      <App />
    </ContactContextProvider>
    
  </BrowserRouter>
)

/* 
ContactContextProvider tiene un alcance global en toda el App,
tanto en el App como en sus hijos
*/

