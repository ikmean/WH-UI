import React from "react"
import {
  AboutBoxContainer,
  Text,
  ImgWrapper,
  InfoBox,
  props,
} from "./AboutUsStyles"
import img1 from "../../lib/images/img1.png"

export const AboutUsBox = ({ reverse }: props) => {
  return (
    <AboutBoxContainer reverse={reverse}>
      <Text>
        <h1>We have only one goal: To help you find your dream home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit augue sit nunc
          amet posuere amet mauris maecenas facilisi eu nunc sapien eget
          volutpat mauris hac ipsum arcu praesent tristique scelerisque volutpat
          non vitae dolor vestibulum tortor nibh molestie odio rhoncus.{" "}
        </p>
      </Text>
      <ImgWrapper>
        <img src={img1} alt="img1" width="622.72px" height="598px" />
        <InfoBox reverse={reverse}>
          <h2>2,400+</h2>
          <span>Successful sales</span>
        </InfoBox>
      </ImgWrapper>
    </AboutBoxContainer>
  )
}
