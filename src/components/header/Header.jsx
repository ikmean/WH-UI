import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper, Nav, HeaderLink, LocaleButtonWrapper, LocaleButton } from './HeaderStyles'
import Logo from './Logo'
import { AppContext } from '../../context/createContext'

export default function Header() {
  const { context } = useContext(AppContext)
  const { cleanupSearchParams, setLocale, locale } = context

  const handleLocaleChange = (value) => {
    setLocale(value)

    console.log(locale)
  }
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

      <LocaleButtonWrapper>
        <LocaleButton onClick={() => setLocale('en')} selected={locale === 'en'}>
          EN
        </LocaleButton>
        <LocaleButton onClick={() => setLocale('ka')} selected={locale === 'ka'}>
          GE
        </LocaleButton>
      </LocaleButtonWrapper>
    </HeaderWrapper>
  )
}
