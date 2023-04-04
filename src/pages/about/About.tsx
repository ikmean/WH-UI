import React from "react";
import { AboutContainer, Description } from "./AboutStyles";
import aboutimg from "../../lib/images/aboutimg.png";
import { TakeALook } from "../../components/takeALook/TakeALook";
import { AboutUs } from "../../components/aboutUs/AboutUs";

function About() {
  return (
    <AboutContainer>
      <div>
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

        <div>
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
        </div>
      </div>
      <TakeALook />
      <AboutUs />
    </AboutContainer>
  );
}

export default About;
