import React from "react"
import img1 from "../../lib/images/img1.png"
import { ReactComponent as Arrow } from "../../lib/icons/redArrow.svg"
import { BoxContainer, Info, InfoFooter, Line } from "./ArticlesStyles"
import { getDate } from "../../helpers/TimeConverter"

export default function ArticleBox({ type = "default", data }: any) {
  const date = getDate(data.publishedAt)

  return (
    <BoxContainer type={type}>
      <img src={img1} alt="img1" width="406px" height="282.94px" />
      <Info>
        <h2>{data.title}</h2>
        {type === "default" && <Line />}
        {type === "default" && (
          <InfoFooter>
            <span>Articles</span>
            <span>{date}</span>
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
