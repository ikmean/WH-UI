import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper, Nav, HeaderLink } from './HeaderStyles'
import Logo from './Logo'
import { AppContext } from '../../context/createContext'

export default function Header() {
  const { context } = useContext(AppContext)
  const { cleanupSearchParams } = context

  return (
    <HeaderWrapper className='container'>
      <Logo />
      <Nav>
        <li>
          <Link to='/' onClick={() => cleanupSearchParams()}>
            <HeaderLink>Home</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/properties'>
            <HeaderLink>Properties</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <HeaderLink>About</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/agents'>
            <HeaderLink>Agents</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/blogs'>
            <HeaderLink>Blogs</HeaderLink>
          </Link>
        </li>
      </Nav>
    </HeaderWrapper>
  )
}
