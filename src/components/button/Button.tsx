import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

interface ButtonProps {
  text: string
  color: string
  width?: string
  borderRadius?: string
  to: string
  className?: string
  click?: any
}

export default function Button({ text, color, width, borderRadius, to, className, click }: ButtonProps) {
  return (
    <ButtonWrapper
      className={className}
      color={color}
      width={width}
      borderRadius={borderRadius}
      onClick={click ? () => click() : () => (window.location.href = to)}
    >
      {text}
    </ButtonWrapper>
  )
}
