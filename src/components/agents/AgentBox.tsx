import React from "react"
import img1 from "../../lib/images/img1.png"
import { Line } from "../articles/ArticlesStyles"
import { AgentBoxStyles, ImgWrapper, InfoBox, TextBox } from "./AgentsStyles"
import { ReactComponent as Phone } from "../../lib/icons/phone.svg"
import { ReactComponent as MailRed } from "../../lib/icons/mailRed.svg"

export default function AgentBox() {
  return (
    <AgentBoxStyles>
      <ImgWrapper>
        <img src={img1} alt="img1" width="100%" height="367.77px" />
        <div>
          <InfoBox>Agent</InfoBox>
        </div>
      </ImgWrapper>
      <TextBox>
        <h2>John Carter</h2>
        <p>Blandit massa enim nec dui morbi enim nunc faucibus a pellent.</p>
        <Line />
        <div>
          <Phone />
          <span>(414) 325-427</span>
        </div>
        <div>
          <MailRed />
          <span>john@realtorx.com</span>
        </div>
      </TextBox>
    </AgentBoxStyles>
  )
}
