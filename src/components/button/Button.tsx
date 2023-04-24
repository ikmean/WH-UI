import React from "react"
import { ButtonWrapper } from "./ButtonStyles"

interface ButtonProps {
  text: string
  color: string
  width?: string
}

export default function Button({ text, color, width }: ButtonProps) {
  return (
    <ButtonWrapper className="button" color={color} width={width}>
      {text}
    </ButtonWrapper>
  )
}
