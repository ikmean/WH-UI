import React, { useContext, useState } from 'react'
import { RequestPropertyStyles, SubmittedMessage } from './RequestPropertyStyles'
import { Line } from '../articles/ArticlesStyles'
import Button from '../button/Button'
import AgentBox from '../agents/AgentBox'
import { colors } from '../../lib/colors'
import { InputStyles } from '../input/InputStyles'
import { AppContext } from '../../context/createContext'

function RequestProperty({ rentOrSale, price, agent, property }: any) {
  const { context } = useContext(AppContext)
  const { createCustomerRequest } = context

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const isValidEmail = (input: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(input)
  }

  const isValidPhoneNumber = (input: any) => {
    const georgianPhoneRegex = /^(\d{9}|\+995\d{9}|995\d{9})$/
    return georgianPhoneRegex.test(input)
  }

  const handleSubmit = () => {
    const isEmailValid = isValidEmail(email)
    const isPhoneNumberValid = isValidPhoneNumber(phoneNumber)

    if (!fullName) {
      alert('Please enter your full name.')
      return
    }
    if (!isEmailValid) {
      alert('Please enter your email address.')
      return
    }
    if (!isPhoneNumberValid) {
      alert('Please enter a georgian phone number.')
      return
    }
    setFormSubmitted(true)

    createCustomerRequest({ fullName, email, phoneNumber, property })
  }

  return (
    <RequestPropertyStyles>
      <h3>Property for {rentOrSale}</h3>
      <h1>${price.usd}</h1>
      <Line />
      <h2>Get in touch to receive more info</h2>
      {formSubmitted ? (
        <SubmittedMessage>
          <p>Your message has been submitted.</p>
          <p>I will get back to you within 24-48 hours.</p>
        </SubmittedMessage>
      ) : (
        <div className={'column'} style={{ gap: '18px' }}>
          <InputStyles backgroundColor={colors.grey}>
            <input placeholder='Full name' type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </InputStyles>
          <InputStyles backgroundColor={colors.grey}>
            <input placeholder='Email address' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </InputStyles>
          <InputStyles backgroundColor={colors.grey}>
            <input placeholder='Phone Number' type='number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </InputStyles>
          <Button color='red' text='Request info' width='100%' to='/' click={handleSubmit} />
        </div>
      )}
      <Line />
      <div>
        <h2>Reach the agent</h2>
        <AgentBox type='small' data={agent} />
      </div>
    </RequestPropertyStyles>
  )
}

export default RequestProperty
