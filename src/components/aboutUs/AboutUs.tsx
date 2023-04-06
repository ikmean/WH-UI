import React from "react"
import { AboutUsBox } from "./AboutUsBox"
import { Wrapper } from "./AboutUsStyles"

export const AboutUs = () => {
  return (
    <Wrapper>
      <div className="container">
        <AboutUsBox />
        <AboutUsBox reverse={true} />
      </div>
    </Wrapper>
  )
}
