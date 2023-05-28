import React from "react"
import FeatureHeader from "../featured/Header"
import FeaturedBox from "../featured/FeturedBox"
import { PropertiesWrapper } from "../featured/FeaturedStyles"

//TODO
export default function Properties({ title, properties }: any) {
  return (
    <div>
      <FeatureHeader title={title} />
      {properties && (
        <PropertiesWrapper>
          {properties.map((data: any, i: number) => (
            <FeaturedBox
              data={{
                ...data.attributes,
                featured: false,
                main: false,
                id: data.id,
              }}
              key={i}
            />
          ))}
        </PropertiesWrapper>
      )}
    </div>
  )
}
