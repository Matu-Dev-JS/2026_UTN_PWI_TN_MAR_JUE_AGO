import React, { useContext } from 'react'
import { ContactDetailContext } from '../Context/ContactDetailContext'

export default function ContactDetailScreen() {

  const contactDetailContextValues = useContext(ContactDetailContext)
  
  console.log(contactDetailContextValues.contact_selected)
  return (
    <div>ContactDetailScreen</div>
  )
}
