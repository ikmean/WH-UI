import React from "react";
import { Line } from "../articles/ArticlesStyles";
import { AgentBoxStyles, ImgWrapper, InfoBox, TextBox } from "./AgentsStyles";
import ContactInfo from "./ContactInfo";
import { Link } from "react-router-dom";

export default function AgentBox({ type = 'regular', data }: any) {
  return (
    <AgentBoxStyles type={type}>
      <Link to={data.id.toString()}>
        <ImgWrapper type={type}>
          <img src={data.profilePicture.url} alt='img1' />
          {type !== 'small' && <InfoBox>Agent</InfoBox>}
        </ImgWrapper>
        <TextBox type={type}>
          <h2>
            {data.name} {''}
            {data.lastName}
          </h2>
          {type !== 'small' && <p>{data.about}</p>}
          {type !== 'small' && <Line />}
          <ContactInfo type={type} number={data.phoneNumber} email={data.email} />
        </TextBox>
      </Link>
    </AgentBoxStyles>
  );
}
