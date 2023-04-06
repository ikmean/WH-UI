import React from "react"
import img1 from "../../lib/images/img1.png"
import { Line } from "../articles/ArticlesStyles"
import { AgentBoxStyles, ImgWrapper, InfoBox, TextBox } from "./AgentsStyles"
import ContactInfo from "./ContactInfo"

export default function AgentBox() {
  return (
    <AgentBoxStyles>
      <ImgWrapper>
        <img src={img1} alt="img1" width="100%" height="367.77px" />
        <InfoBox>Agent</InfoBox>
      </ImgWrapper>
      <TextBox>
        <h2>John Carter</h2>
        <p>Blandit massa enim nec dui morbi enim nunc faucibus a pellent.</p>
        <Line />
        <ContactInfo />
      </TextBox>
    </AgentBoxStyles>
  )
}
