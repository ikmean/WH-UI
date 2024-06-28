import React from 'react'
import { Line } from '../articles/ArticlesStyles'
import { AgentBoxStyles, ImgWrapper, InfoBox, TextBox } from './AgentsStyles'
import ContactInfo from './ContactInfo'
import { Link } from 'react-router-dom'

export default function AgentBox({ type = 'regular', data }: any) {
  const isSmall = type === 'small'

  return (
    <AgentBoxStyles type={type}>
      <Link to={`/agents/${data.id}`} className={isSmall ? 'flex row center' : ''}>
        <ImgWrapper type={type}>
          <img src={data?.profilePicture?.url} alt='img1' />
          {!isSmall && data.status && <InfoBox>{data?.status}</InfoBox>}
        </ImgWrapper>
        <TextBox type={type}>
          <h2>
            {data?.name} {data?.lastName}
          </h2>
          {!isSmall && <p>{data?.about}</p>}
          {!isSmall && <Line />}
          <ContactInfo type={type} phoneNumber={data?.phoneNumber} email={data?.email} />
        </TextBox>
      </Link>
    </AgentBoxStyles>
  )
}
