import React from "react"
import img1 from "../../lib/images/img1.png"
import { ReactComponent as Arrow } from "../../lib/icons/redArrow.svg"
import { BoxContainer, Info, InfoFooter, Line } from "./ArticlesStyles"

export default function ArticleBox({ type = "default" }: any) {
  return (
    <BoxContainer type={type}>
      <img src={img1} alt="img1" width="406px" height="282.94px" />
      <Info>
        <h2>Here’s how to decorate your new home from scratch</h2>
        {type === "default" && <Line />}
        {type === "default" && (
          <InfoFooter>
            <span>Articles</span>
            <span>February 25, 2022</span>
          </InfoFooter>
        )}
        {type === "description" && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        )}
        {type === "readMoreSmall" && (
          <div>
            <span>Read More</span>
            <Arrow />
          </div>
        )}
      </Info>
    </BoxContainer>
  )
}
