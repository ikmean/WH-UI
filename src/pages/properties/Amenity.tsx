import React from "react"
import { ReactComponent as Garden } from "../../lib/icons/garden.svg"
import { ReactComponent as Internet } from "../../lib/icons/internet.svg"
import { ReactComponent as Jacuzzi } from "../../lib/icons/jacuzzi.svg"
import { ReactComponent as Camera } from "../../lib/icons/camera.svg"
import { ReactComponent as Laundry } from "../../lib/icons/laundry.svg"
import { ReactComponent as Pool } from "../../lib/icons/pool.svg"
import { ReactComponent as Garage } from "../../lib/icons/garage.svg"
import { ReactComponent as Elevator } from "../../lib/icons/elevator.svg"
import { ReactComponent as DishWasher } from "../../lib/icons/dishwasher.svg"
import { AmenityStyles } from "./PropertiesStyles"

export const Amenity = ({ text }: any) => {
  return (
    <AmenityStyles>
      {text === "garden" && <Garden />}
      {text === "Internet" && <Internet />}
      {text === "Jacuzzi" && <Jacuzzi />}
      {text === "Security cameras" && <Camera />}
      {text === "Laundry" && <Laundry />}
      {text === "Pool" && <Pool />}
      {text === "Garage" && <Garage />}
      {text === "Elevator" && <Elevator />}
      {text === "Dish Washer" && <DishWasher />}
      <span>{text}</span>
    </AmenityStyles>
  )
}
