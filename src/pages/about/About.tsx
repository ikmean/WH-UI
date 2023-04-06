import React from "react"
import { AboutContainer, Description, Images } from "./AboutStyles"
import aboutimg from "../../lib/images/aboutimg.png"
import { TakeALook } from "../../components/takeALook/TakeALook"
import { AboutUs } from "../../components/aboutUs/AboutUs"
import { Agents } from "../../components/agents/Agents"

function About() {
  return (
    <AboutContainer>
      <div className="container">
        <h1>About our real estate firm</h1>
        <Description>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing eli quis sed ac
            curabitur bibendum blandit nisl morbi tellus tincidunt condimentum
            facilisi rhoncus ut cursus placerat facilisis dui posuere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing eli quis sed ac
            curabitur bibendum blandit nisl morbi tellus tincidunt condimentum
            facilisi rhoncus ut cursus placerat facilisis dui posuere.
          </p>
        </Description>
        <Images>
          <img
            src={aboutimg}
            alt="aboutimg"
            width="489.01px"
            height="666.16px"
          />
          <img
            src={aboutimg}
            alt="aboutimg"
            width="489.01px"
            height="666.16px"
          />
          <img
            src={aboutimg}
            alt="aboutimg"
            width="489.01px"
            height="666.16px"
          />
        </Images>
      </div>
      <TakeALook />
      <AboutUs />
      <Agents />
    </AboutContainer>
  )
}

export default About
