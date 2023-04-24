import React from "react";
import Box from "./Box";
import { Container, Title } from "./TakeALookStyles";

export const TakeALook = () => {
  return (
    <Container>
      <Title>Take a look at our numbers</Title>
      <div className="flex space-between">
        <Box />
        <Box />
        <Box />
      </div>
    </Container>
  );
};
