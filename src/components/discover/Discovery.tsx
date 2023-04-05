import React from "react"
import Button from "../button/Button"
import { Wrapper, TextWrapper, ImgWrapper } from "./DiscoveryStyles"
import img1 from "../../lib/images/img1.png"

export default function Discovery() {
  return (
    <Wrapper>
      <div className="container flex">
        <TextWrapper>
          <h1>The best place to discover amazing properties at great prices</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa
            eget posuere at proin lectus proin morbi euismod itae purus donec
            cursus neque adipiscing maecenas proin eu viverra commodo felis
            risus at amet ornare pellentesque nulla ipsu.
          </p>
          <Button text="About our company" color="black" />
        </TextWrapper>
        <ImgWrapper>
          <img src={img1} alt="img1" width="452.93px" height="504.57px" />
          <img src={img1} alt="img1" width="452.93px" height="504.57px" />
        </ImgWrapper>
      </div>
    </Wrapper>
  )
}
