import React from "react"
import Button from "../button/Button"
import { BoxStyles } from "./PublishStyles"

export default function PublishBox() {
  return (
    <BoxStyles>
      <h1>Publish a featured property</h1>
      <p>
        Lorem ipsum dolor sit amet conse ctetur adipiscing elit ipsum at iaculis
        nulla nulla justo.
      </p>
      <Button color="black" text="Browse packages" />
    </BoxStyles>
  )
}
