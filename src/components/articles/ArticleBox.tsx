import React from "react"
import img1 from "../../lib/images/img1.png"
import { BoxContainer, Info, InfoFooter, Line } from "./ArticlesStyles"

export default function ArticleBox() {
  return (
    <BoxContainer>
      <img src={img1} alt="img1" width="406px" height="282.94px" />
      <Info>
        <h2>Here’s how to decorate your new home from scratch</h2>
        <Line />
        <InfoFooter>
          <span>Articles</span>
          <span>February 25, 2022</span>
        </InfoFooter>
      </Info>
    </BoxContainer>
  )
}
