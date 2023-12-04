import React from 'react'
import { PostButtonWrapper } from './ButtonStyles'

interface Props {
  text: string
  margin?: string
  color?: string
  onClick?: any
}

export default function PostButton({ text, margin, color, onClick }: Props) {
  return (
    <PostButtonWrapper margin={margin} color={color} onClick={onClick}>
      {text}
    </PostButtonWrapper>
  )
}
