import React from 'react'
import { PostButtonWrapper } from './ButtonStyles'

interface Props {
  text: string
  margin?: string
  onClick?: any
}

export default function PostButton({ text, margin, onClick }: Props) {
  return (
    <PostButtonWrapper margin={margin} onClick={onClick}>
      {text}
    </PostButtonWrapper>
  )
}
