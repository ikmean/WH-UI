import React from 'react'
import { ValueBoxWrapper, Icon } from './ValuesStyles'
import { ReactComponent as Excellence } from '../../lib/icons/excellence.svg'
import { ReactComponent as Accesibility } from '../../lib/icons/accesibility.svg'
import { ReactComponent as Quality } from '../../lib/icons/quality.svg'

interface props {
  type: string
}

export const ValueBox = ({ type }: props) => {
  return (
    <ValueBoxWrapper>
      <Icon>
        {type === 'excellence' && <Excellence />}
        {type === 'accesibility' && <Accesibility />}
        {type === 'quality' && <Quality />}
      </Icon>
      <div>
        <h2>{type}</h2>
        <p>
          Lorem ipsum dolor sit amet conse ctetur adipiscing elit ipsum at iaculis nulla nulla justo vestibulum faucibus nec ullamcorper
          bibend.
        </p>
      </div>
    </ValueBoxWrapper>
  )
}
