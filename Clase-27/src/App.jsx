import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen'
import {LoginScreen} from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import NotFoundScreen from './Screens/NotFoundScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen'
import { ContactDetailContextProvider } from './Context/ContactDetailContext'

export default function App() {
  return (
    <Routes>
      
      <Route 
        path='/' 
        element={<HomeScreen/>}
      />
      <Route 
        path='/home' 
        element={<HomeScreen/>}
      />
      <Route 
        path='/login' 
        element={<LoginScreen/>}
      />
      <Route 
        path='/register'
        element={<RegisterScreen/>}
      />

      <Route element={<ContactDetailContextProvider/>}>

        <Route 
          path='/contact/:contact_id'
          element={<ContactDetailScreen/>}
        />
        <Route 
          path='/contact/:contact_id/profile'
          element={<ContactDetailScreen/>}
        />


      </Route>
      
      <Route 
        path='/*'
        element={<NotFoundScreen/>}
      />
      
    </Routes>
  )
}

