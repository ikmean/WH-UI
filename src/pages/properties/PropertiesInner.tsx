import React from "react"
import cover from "../../lib/images/cover.png"
import {
  ContentContainer,
  PropertiesInnerPageContainer,
} from "./PropertiesStyles"
import RequestProperty from "../../components/request/RequestProperty"

function PropertiesInner() {
  return (
    <PropertiesInnerPageContainer>
      <img src={cover} alt="" width="100%" height="515.05px" />
      <ContentContainer className="container">
        <RequestProperty />
      </ContentContainer>
    </PropertiesInnerPageContainer>
  )
}

export default PropertiesInner
