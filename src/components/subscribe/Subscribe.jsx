import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '../button/Button'
import SubscribeBox from './SubscribeBox'
import { H1 } from './SubscribeStyles'
import { AppContext } from '../../context/createContext'

export default function Subscribe() {
  const { t } = useTranslation()

  const { context } = useContext(AppContext)
  const { createCustomerRequest, emailSubscription, setEmailSubscription } = context

  const [email, setEmail] = useState('')

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

    createCustomerRequest({ email })
    setEmailSubscription(true)
  }

  return (
    <div>
      <H1> {t('SubscribeHeader')} </H1>
      <SubscribeBox email={email} setEmail={setEmail} subscribe={emailSubscription} />
      <Button text={t('Subscribe')} color='red' click={handleSubmit} />
    </div>
  )
}
