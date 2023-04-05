import React from "react"
import PostButton from "../button/PostButton"
import { ExploreWrapper, Left, Right } from "./ExploreStyles"
import img1 from "../../lib/images/img1.png"

function Explore() {
  return (
    <ExploreWrapper>
      <Left>
        <h1>The best place to find your dream house</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat purus
          suscipit turpis sed vitae.
        </span>
        <PostButton text="Start exploring" margin="40px 0 0 0" />
      </Left>
      <Right>
        <div>
          <img src={img1} alt="img1" width="347.63px" height="233.54px" />
          <img src={img1} alt="img1" width="347.63px" height="233.54px" />
        </div>
        <div>
          <img src={img1} alt="img1" width="347.63px" height="233.54px" />
          <img src={img1} alt="img1" width="347.63px" height="233.54px" />
        </div>
      </Right>
    </ExploreWrapper>
  )
}

export default Explore
