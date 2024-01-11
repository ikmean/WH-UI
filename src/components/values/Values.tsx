import React from 'react'
import { useTranslation } from 'react-i18next'

import { ValueBox } from './ValueBox'
import { Wrapper, Left, Right, Header } from './ValuesStyles'

export const Values = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <div className='container flex space-between '>
        <Left>
          <Header>
            <h1>{t('ValuesHeader')}</h1>
            <p>{t('ValuesDesc')}</p>
          </Header>
          <ValueBox type='excellence' />
          <ValueBox type='quality' />
        </Left>
        <Right>
          <ValueBox type='excellence' />
          <ValueBox type='accesibility' />
          <ValueBox type='quality' />
        </Right>
      </div>
    </Wrapper>
  )
}
