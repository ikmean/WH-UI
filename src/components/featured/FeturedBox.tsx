import React from "react"
import img1 from "../../lib/images/img1.png"
import {
  BoxWrapper,
  TextBox,
  Price,
  LocationContainer,
  Line,
  InfoBox,
  ImgWrapper,
} from "./FeaturedStyles"
import { ReactComponent as Location } from "../../lib/icons/location.svg"
import { ReactComponent as SQFT } from "../../lib/icons/sqft.svg"
import { ReactComponent as Bed } from "../../lib/icons/bed.svg"
import { ReactComponent as Bath } from "../../lib/icons/bath.svg"
import { ReactComponent as Parking } from "../../lib/icons/parking.svg"
import { props } from "./FeaturedStyles"

export default function FeaturedBox({ forSale }: props) {
  return (
    <BoxWrapper>
      <ImgWrapper>
        <img src={img1} alt="img1" width="667px" height="375px" />
        <div>
          <InfoBox forSale={forSale} saleRent={true}>
            {forSale ? "For Sale" : "For Rent"}
          </InfoBox>
        </div>
      </ImgWrapper>
      <TextBox>
        <LocationContainer>
          <div>
            <Location />
            <span>2238 Stradella Rd, San Francisco</span>
          </div>
          <Price>$8,495,000</Price>
        </LocationContainer>
        <h2>Luxury Loft in San Francisco, CA</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat purus
          suscipit turpis sed vitae.
        </p>
        <Line />
        <div>
          <InfoBox>
            <SQFT />
            <span>6767 sqft</span>
          </InfoBox>
          <InfoBox>
            <Bed />
            <span>10</span>
          </InfoBox>
          <InfoBox>
            <Bath />
            <span>9</span>
          </InfoBox>
          <InfoBox>
            <Parking />
            <span>4</span>
          </InfoBox>
        </div>
      </TextBox>
    </BoxWrapper>
  )
}
