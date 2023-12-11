import React from 'react'
import { BoxStyles, SubscribeInputStyles } from './SubscribeStyles'
import { InputComponent } from '../input/Input'
import { ReactComponent as Mail } from '../../lib/icons/mail.svg'

interface SubscribeBoxProps {
  text: string
}

export default function SubscribeBox({ text }: SubscribeBoxProps) {
  return (
    <BoxStyles>
      <SubscribeInputStyles>
        <input placeholder={'Enter your Email address'} />
      </SubscribeInputStyles>
      <Mail />
    </BoxStyles>
  )
}
