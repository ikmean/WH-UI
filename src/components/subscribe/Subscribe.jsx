import React, { useContext, useState } from 'react'
import Button from '../button/Button'
import SubscribeBox from './SubscribeBox'
import { H1 } from './SubscribeStyles'
import { AppContext } from '../../context/createContext'

export default function Subscribe() {
  const { context } = useContext(AppContext)
  const { createCustomerRequest } = context

  const [email, setEmail] = useState('')
  const [subscribe, setSubscribe] = useState(false)

  const isValidEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(input)
  }

  const handleSubmit = () => {
    const isEmailValid = isValidEmail(email)

    if (!isEmailValid) {
      alert('Please enter your email address.')
      return
    }
    setSubscribe(true)

    createCustomerRequest({ email })
  }

  return (
    <div>
      <H1>Subscribe to our newsletter</H1>
      <SubscribeBox text='email address' email={email} setEmail={setEmail} subscribe={subscribe} />
      <Button text='Subscribe' color='red' click={handleSubmit} />
    </div>
  )
}
