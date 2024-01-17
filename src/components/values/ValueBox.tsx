import React from 'react'
import { useTranslation } from 'react-i18next'

import { ValueBoxWrapper, Icon } from './ValuesStyles'
import { ReactComponent as Excellence } from '../../lib/icons/excellence.svg'
import { ReactComponent as Accesibility } from '../../lib/icons/accesibility.svg'
import { ReactComponent as Quality } from '../../lib/icons/quality.svg'

interface props {
  type: string
}

export const ValueBox = ({ type }: props) => {
  const { t } = useTranslation()

  return (
    <ValueBoxWrapper>
      <Icon>
        {type === 'excellence' && <Excellence />}
        {type === 'accesibility' && <Accesibility />}
        {type === 'quality' && <Quality />}
      </Icon>
      <div>
        <h2>{t(`${type}`)}</h2>
        <p>{t(`${type}`)}</p>
      </div>
    </ValueBoxWrapper>
  )
}
