import React, { useContext, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { HeaderWrapper, Nav, HeaderLink, LocaleButtonWrapper, LocaleButton, BurgerMenuButton } from './HeaderStyles'
import Logo from './Logo'
import { AppContext } from '../../context/createContext'

import { ReactComponent as Close } from '../../lib/icons/close.svg'
import { ReactComponent as Burger } from '../../lib/icons/burger.svg'

export default function Header() {
  const { i18n, t } = useTranslation()
  const { context } = useContext(AppContext)
  const { cleanupSearchParams, setLocale, setEmailSubscription, setCcrSubmited } = context
  const [searchParams, setSearchParams] = useSearchParams()
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)

  const handleLocaleChange = (value) => {
    i18n.changeLanguage(value)
    setSearchParams({ locale: value })
    setLocale({ locale: value })
  }

  const handleHomeClick = () => {
    cleanupSearchParams()
    setBurgerMenuOpen(false)
  }

  const handleMenuNavigationCleanup = () => {
    setBurgerMenuOpen(false)
    setEmailSubscription(false)
    setCcrSubmited(false)
  }

  return (
    <HeaderWrapper className='container'>
      <Logo onClick={() => handleMenuNavigationCleanup()} />
      <Nav open={burgerMenuOpen}>
        <li>
          <Link to='/' onClick={() => handleHomeClick()}>
            <HeaderLink>{t('Home')}</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/properties' onClick={() => handleMenuNavigationCleanup()}>
            <HeaderLink>{t('Properties')}</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/developers' onClick={() => handleMenuNavigationCleanup()}>
            <HeaderLink>{t('Developers')}</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/about' onClick={() => handleMenuNavigationCleanup()}>
            <HeaderLink>{t('About')}</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/agents' onClick={() => handleMenuNavigationCleanup()}>
            <HeaderLink>{t('Agents')}</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/blogs' onClick={() => handleMenuNavigationCleanup()}>
            <HeaderLink>{t('Blogs')}</HeaderLink>
          </Link>
        </li>
      </Nav>

      <LocaleButtonWrapper>
        <div className='row'>
          <LocaleButton onClick={() => handleLocaleChange('en')} selected={searchParams.get('locale') === 'en'}>
            EN
          </LocaleButton>
          <LocaleButton onClick={() => handleLocaleChange('ka')} selected={searchParams.get('locale') === 'ka'}>
            GE
          </LocaleButton>
        </div>

        <BurgerMenuButton onClick={() => setBurgerMenuOpen(!burgerMenuOpen)} open={burgerMenuOpen}>
          <div>{burgerMenuOpen ? <Close /> : <Burger />}</div>
        </BurgerMenuButton>
      </LocaleButtonWrapper>
    </HeaderWrapper>
  )
}
