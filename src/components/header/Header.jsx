import React, { useContext, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
  HeaderWrapper,
  Nav,
  HeaderLink,
  LocaleButtonWrapper,
  BurgerMenuButton,
  WorldWrapper,
  SelectionStyles,
  Selection,
  Option,
  BtnClose
} from './HeaderStyles'
import Logo from './Logo'
import { AppContext } from '../../context/createContext'

import { ReactComponent as Close } from '../../lib/icons/close.svg'
import { ReactComponent as Burger } from '../../lib/icons/burger.svg'
import { ReactComponent as World } from '../../lib/icons/world.svg'

export default function Header() {
  const { i18n, t } = useTranslation()
  const { context } = useContext(AppContext)
  const { cleanupSearchParams, setLocale, setEmailSubscription, setCcrSubmited, setCurrency, locale, currency } = context
  const [searchParams, setSearchParams] = useSearchParams()
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)
  const [selectionOpen, setSelectionOpen] = useState(false)

  const handleLocaleChange = (value) => {
    i18n.changeLanguage(value)
    setSearchParams({ locale: value })
    setLocale({ locale: value })
  }

  const handleHomeClick = () => {
    cleanupSearchParams()
    setBurgerMenuOpen(false)
    setSelectionOpen(false)
  }

  const toggleSelection = () => {
    setSelectionOpen(!selectionOpen)
  }

  const handleMenuNavigationCleanup = () => {
    setBurgerMenuOpen(false)
    setEmailSubscription(false)
    setCcrSubmited(false)
    setSelectionOpen(false)
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
        <WorldWrapper onClick={toggleSelection}>
          <World />
        </WorldWrapper>

        {selectionOpen && (
          <SelectionStyles>
            <Selection>
              <span>{t('Language')}</span>
              <Option onClick={() => handleLocaleChange('en')} selected={locale === 'en'}>
                {t('EN')}
              </Option>
              <Option onClick={() => handleLocaleChange('ka')} selected={locale === 'ka'}>
                {t('GE')}
              </Option>
            </Selection>

            <Selection>
              <span>{t('Currency')}</span>
              <Option onClick={() => setCurrency('USD')} selected={currency === 'USD'}>
                {t('USD')}
              </Option>
              <Option onClick={() => setCurrency('GEL')} selected={currency === 'GEL'}>
                {t('GEL')}
              </Option>
            </Selection>
            <BtnClose onClick={() => setSelectionOpen(false)}>
              <Close />
            </BtnClose>
          </SelectionStyles>
        )}
      </LocaleButtonWrapper>

      <BurgerMenuButton onClick={() => setBurgerMenuOpen(!burgerMenuOpen)} open={burgerMenuOpen}>
        <div>{burgerMenuOpen ? <Close /> : <Burger />}</div>
      </BurgerMenuButton>
    </HeaderWrapper>
  )
}
