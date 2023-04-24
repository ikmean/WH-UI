import React from "react"
import img1 from "../../lib/images/img1.png"
import { Line } from "../articles/ArticlesStyles"
import { AgentBoxStyles, ImgWrapper, InfoBox, TextBox } from "./AgentsStyles"
import ContactInfo from "./ContactInfo"
import { Link } from "react-router-dom"

export default function AgentBox({ type = "regular", text }: any) {
  return (
    <AgentBoxStyles type={type}>
      <Link to={`id`}>
        <ImgWrapper type={type}>
          <img src={img1} alt="img1" />
          {type !== "small" && <InfoBox>Agent</InfoBox>}
        </ImgWrapper>
        <TextBox type={type}>
          <h2>John Carter</h2>
          {type !== "small" && (
            <p>
              {text ||
                "Blandit massa enim nec dui morbi enim nunc faucibus a pellent."}
            </p>
          )}
          {type !== "small" && <Line />}
          <ContactInfo type={type} />
        </TextBox>
      </Link>
    </AgentBoxStyles>
  )
}
