import React from "react"
import { ButtonWrapper } from "./ButtonStyles"

interface ButtonProps {
  text: string
  color: string
  width?: string
  to: string
}

export default function Button({ text, color, width, to }: ButtonProps) {
  return (
    <ButtonWrapper
      className="button"
      color={color}
      width={width}
      onClick={() => (window.location.href = to)}
    >
      {text}
    </ButtonWrapper>
  )
}
