import React from 'react'
import { BoxStyles, SubscribeInputStyles } from './SubscribeStyles'
import { ReactComponent as Mail } from '../../lib/icons/mail.svg'

interface SubscribeBoxProps {
  text: string
}

export default function SubscribeBox({ text }: SubscribeBoxProps) {
  return (
    <BoxStyles>
      <SubscribeInputStyles>
        <input placeholder={'Enter your email address'} />
      </SubscribeInputStyles>
      <Mail />
    </BoxStyles>
  )
}
