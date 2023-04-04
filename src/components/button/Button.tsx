import React from "react";
import { ButtonWrapper } from "./ButtonStyles";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <ButtonWrapper>{text}</ButtonWrapper>;
}
