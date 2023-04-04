import React from "react"
import FeatureHeader from "../featured/Header"
import FeaturedBox from "../featured/FeturedBox"
import { PropertiesWrapper } from "../featured/FeaturedStyles"

export default function Properties() {
  return (
    <div>
      <FeatureHeader title="All properties" />
      <PropertiesWrapper>
        <FeaturedBox forSale={true} />
        <FeaturedBox />
        <FeaturedBox />
      </PropertiesWrapper>
    </div>
  )
}
