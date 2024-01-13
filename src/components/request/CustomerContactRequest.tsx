import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { RequestPropertyStyles, SubmittedMessage } from './RequestPropertyStyles'
import { Line } from '../articles/ArticlesStyles'
import Button from '../button/Button'
import AgentBox from '../agents/AgentBox'
import { colors } from '../../lib/colors'
import { InputStyles } from '../input/InputStyles'
import { AppContext } from '../../context/createContext'

interface props {
  rentOrSale?: string
  price?: {
    usd?: number
  }
  agent?: string
  property?: string
  project?: string
  developer?: string
}

function CustomerContactRequest({ rentOrSale, price, agent, property, project, developer }: props) {
  const { t } = useTranslation()

  const { context } = useContext(AppContext)
  const { createCustomerRequest } = context

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [contactDetails, setContactDetailsDetails] = useState('')
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

    createCustomerRequest({ fullName, email, phoneNumber, contactDetails, property, project, developer })
  }

  return (
    <RequestPropertyStyles>
      {property && (
        <>
          <h3>
            {t('PropertyFor')} {rentOrSale}
          </h3>
          <h1>${price?.usd}</h1>
          <Line />
        </>
      )}
      <h2>{t('GetInTouch')}</h2>
      {formSubmitted ? (
        <SubmittedMessage>
          <p>{t('MessageSubmited')}</p>
          <p>{t('GetBackToYou')}</p>
        </SubmittedMessage>
      ) : (
        <div className={'column'} style={{ gap: '18px' }}>
          <InputStyles backgroundColor={colors.grey}>
            <input placeholder={t('FullName')} type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </InputStyles>
          <InputStyles backgroundColor={colors.grey}>
            <input placeholder={t('Email')} type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </InputStyles>
          <InputStyles backgroundColor={colors.grey}>
            <input placeholder={t('PhoneNumber')} type='number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </InputStyles>
          <InputStyles backgroundColor={colors.grey}>
            <textarea placeholder={t('ContactDetails')} value={contactDetails} onChange={(e) => setContactDetailsDetails(e.target.value)} />
          </InputStyles>
          <Button color='red' text={t('RequestInfo')} width='100%' click={handleSubmit} />
        </div>
      )}
      <Line />
      {agent && (
        <div>
          <h2>{t('ReachTheAgent')}</h2>
          <AgentBox type='small' data={agent} />
        </div>
      )}
    </RequestPropertyStyles>
  )
}

export default CustomerContactRequest
