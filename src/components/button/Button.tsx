import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

interface ButtonProps {
  text: string
  color: string
  width?: string
  to: string
  className?: string
  click?: any
}

export default function Button({ text, color, width, to, className, click }: ButtonProps) {
  return (
    <ButtonWrapper className={className} color={color} width={width} onClick={click ? () => click() : () => (window.location.href = to)}>
      {text}
    </ButtonWrapper>
  )
}
