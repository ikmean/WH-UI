import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

interface ButtonProps {
  text: string
  color: string
  width?: string
  to: string
  className?: string
}

export default function Button({ text, color, width, to, className }: ButtonProps) {
  return (
    <ButtonWrapper className={className} color={color} width={width} onClick={() => (window.location.href = to)}>
      {text}
    </ButtonWrapper>
  )
}
