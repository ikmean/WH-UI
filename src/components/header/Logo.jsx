import React from 'react'
import { Link } from 'react-router-dom'
// import { ReactComponent as Icon } from '../../lib/icons/warmSvg.svg'
import { ReactComponent as Icon } from '../../lib/icons/icon.svg'

import { Left } from './HeaderStyles'

export default function Logo({ onClick }) {
  return (
    <Link to='/' onClick={onClick}>
      <Left>
        <Icon />
        <h1>Warm House</h1>
      </Left>
    </Link>
  )
}
