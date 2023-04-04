import React from "react"
import { ButtonWrapper } from "./ButtonStyles"

interface ButtonProps {
  text: string
  color: string
}

export default function Button({ text, color }: ButtonProps) {
  return <ButtonWrapper color={color}>{text}</ButtonWrapper>
}
