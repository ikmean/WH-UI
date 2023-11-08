import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Text({ title, description }: any) {
  return (
    <div>
      <h2>{title}</h2>
      <span>{description}</span>
    </div>
  )
}
