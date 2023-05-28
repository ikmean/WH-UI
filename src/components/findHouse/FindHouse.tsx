import React from "react"
import { Wrapper, BoxWrapper } from "./FindHouseStyles"
import Box from "./Box"
import Button from "../button/Button"

export default function FindHouse() {
  return (
    <Wrapper>
      <h1>Find your dream house as easy as 1, 2, 3</h1>
      <BoxWrapper>
        <Box
          icon="findHouse"
          title="1. Search for your favorite house in your location"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege."
        />
        <Box
          icon="calendar"
          title="2. Make a visit appointment with one of our agents"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege."
        />
        <Box
          icon="house"
          title="3. Get your dream house in a month, or less"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege."
        />
      </BoxWrapper>
      <Button text="Explore properties" color="black" to="/" />
    </Wrapper>
  )
}
