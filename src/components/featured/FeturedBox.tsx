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
  Top,
} from "./FeaturedStyles"
import { ReactComponent as Location } from "../../lib/icons/location.svg"
import { ReactComponent as SQFT } from "../../lib/icons/sqft.svg"
import { ReactComponent as Bed } from "../../lib/icons/bed.svg"
import { ReactComponent as Bath } from "../../lib/icons/bath.svg"
import { ReactComponent as Parking } from "../../lib/icons/parking.svg"
import { props } from "./FeaturedStyles"
import { Link } from "react-router-dom"

export default function FeaturedBox({ forSale, featured, main }: props) {
  return (
    <BoxWrapper featured={featured} main={main}>
      <Link to={`id`}>
        <ImgWrapper main={main}>
          <img src={img1} alt="img1" width="100%" height="100%" />
          <div>
            <InfoBox forSale={forSale} saleRent={true}>
              {forSale ? "For Sale" : "For Rent"}
            </InfoBox>
          </div>
        </ImgWrapper>
        <TextBox featured={featured} main={main}>
          <Top featured={featured}>
            <LocationContainer featured={featured}>
              <Location />
              <span className="location">2238 Stradella Rd, San Francisco</span>
            </LocationContainer>
            <Price featured={featured}>$8,495,000</Price>
          </Top>
          <h2>Luxury Loft in San Francisco, CA</h2>
          {featured && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat
              purus suscipit turpis sed vitae.
            </p>
          )}
          <Line />
          <div>
            <InfoBox featured={featured}>
              <SQFT />
              <span>6767 sqft</span>
            </InfoBox>
            <InfoBox featured={featured}>
              <Bed />
              <span>10</span>
            </InfoBox>
            <InfoBox featured={featured}>
              <Bath />
              <span>9</span>
            </InfoBox>
            {featured && (
              <InfoBox featured={featured}>
                <Parking />
                <span>4</span>
              </InfoBox>
            )}
          </div>
        </TextBox>
      </Link>
    </BoxWrapper>
  )
}
