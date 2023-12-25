import React from 'react'
import { BoxStyles, SubscribeInputStyles, SuccessMessage } from './SubscribeStyles'
import { ReactComponent as Mail } from '../../lib/icons/mail.svg'

interface SubscribeBoxProps {
  email: any
  setEmail: any
  subscribe: any
}

export default function SubscribeBox({ email, setEmail, subscribe }: SubscribeBoxProps) {
  return subscribe ? (
    <SuccessMessage>
      <p>Thank you for joining our newsletter!</p>
    </SuccessMessage>
  ) : (
    <>
      <BoxStyles>
        <SubscribeInputStyles>
          <input placeholder={'Enter your email address'} type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </SubscribeInputStyles>
        <Mail />
      </BoxStyles>
    </>
  )
}
