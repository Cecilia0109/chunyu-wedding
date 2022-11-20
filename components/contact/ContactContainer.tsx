import React from 'react'
import ContactInto from './ContactInto'
import ContactStep from './ContactStep'
import WeddingInfo from './WeddingInfo'

const ContactContainer = () => {
  return (
    <div>
      <ContactStep />
      <ContactInto />
      <WeddingInfo />
    </div>
  )
}

export default ContactContainer
