import React from 'react'
import { ButtonWrapper } from './ButtonStyles'
import { Link } from 'react-router-dom'

interface ButtonProps {
  text?: string
  color: string
  width?: string
  borderRadius?: string
  to?: string
  className?: string
  click?: any
}

export default function Button({ text, color, width, borderRadius, to, className, click }: ButtonProps) {
  if (to) {
    <Link to={to}>
      <ButtonWrapper className={className} color={color} width={width} borderRadius={borderRadius} onClick={click}>
        {text}
      </ButtonWrapper>
    </Link>
  }

  return (
    <ButtonWrapper className={className} color={color} width={width} borderRadius={borderRadius} onClick={click}>
      {text}
    </ButtonWrapper>
  )
}
