import React from 'react'
import { useTranslation } from 'react-i18next'

import OfficeBox from './OfficeBox'
import { Header, Wrapper, BoxWrapper } from './OfficesStyles'

export default function Offices({ offices }: any) {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Header>
        <h1>{t('VisitOffices')}</h1>
      </Header>
      <BoxWrapper>
        {offices?.map((office: any, i: number) => (
          <OfficeBox
            key={i}
            title={office.title}
            about={office.about}
            phoneNumber={office.phoneNumber}
            location={office.address}
            gallery={office.gallery}
          />
        ))}
      </BoxWrapper>
    </Wrapper>
  )
}
