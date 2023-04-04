import React from "react";
import Box from "./Box";
import { Container, Title } from "./TakeALookStyles";

export const TakeALook = () => {
  return (
    <Container>
      <Title>Take a look at our numbers</Title>
      <div>
        <Box />
        <Box />
        <Box />
      </div>
    </Container>
  );
};
