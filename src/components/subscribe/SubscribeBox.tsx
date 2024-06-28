import React from 'react'
import { useTranslation } from 'react-i18next'

import { BoxStyles, SubscribeInputStyles, SuccessMessage } from './SubscribeStyles'
import { ReactComponent as Mail } from '../../lib/icons/mail.svg'

interface SubscribeBoxProps {
  email: any
  setEmail: any
  subscribe: any
}

export default function SubscribeBox({ email, setEmail, subscribe }: SubscribeBoxProps) {
  const { t } = useTranslation()

  return subscribe ? (
    <SuccessMessage>
      <p>{t('SubscriptionSuccessMessage')}</p>
    </SuccessMessage>
  ) : (
    <>
      <BoxStyles>
        <SubscribeInputStyles>
          <input placeholder={t('EnterEmail')} type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </SubscribeInputStyles>
        <Mail />
      </BoxStyles>
    </>
  )
}
