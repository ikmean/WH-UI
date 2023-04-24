import React from "react"
import img1 from "../../lib/images/img1.png"
import { Line } from "../articles/ArticlesStyles"
import { AgentBoxStyles, ImgWrapper, InfoBox, TextBox } from "./AgentsStyles"
import ContactInfo from "./ContactInfo"

export default function AgentBox({ type }: any) {
  return (
    <AgentBoxStyles type={type}>
      <ImgWrapper>
        <img src={img1} alt="img1" />
        {type !== "small" && <InfoBox>Agent</InfoBox>}
      </ImgWrapper>
      <TextBox type={type}>
        <h2>John Carter</h2>
        {type !== "small" && (
          <p>Blandit massa enim nec dui morbi enim nunc faucibus a pellent.</p>
        )}
        {type !== "small" && <Line />}
        <ContactInfo type={type} />
      </TextBox>
    </AgentBoxStyles>
  )
}
