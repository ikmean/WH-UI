import React from "react"
import FeatureHeader from "../featured/Header"
import FeaturedBox from "../featured/FeturedBox"
import { PropertiesWrapper } from "../featured/FeaturedStyles"

export default function Properties({ title }: any) {
  return (
    <div>
      <FeatureHeader title={title} />
      <PropertiesWrapper>
        <FeaturedBox forSale={true} />
        <FeaturedBox />
        <FeaturedBox />
      </PropertiesWrapper>
    </div>
  )
}
