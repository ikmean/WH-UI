import React, { useEffect, useState } from "react"
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
import { data } from "./FeaturedStyles"
import { Link } from "react-router-dom"

export default function FeaturedBox({ data }: data) {
  return (
    <BoxWrapper featured={data.featured} main={data.main}>
      <Link to={data.id.toString()}>
        <ImgWrapper main={data.main} featured={data.featured}>
          <img src={img1} alt="img1" width="100%" height="100%" />
          <div>
            {data.dealType && (
              <InfoBox
                forSale={data.dealType.data.attributes.title}
                saleRent={true} //TODO ეს რატო იყო არ მახსოვს
              >
                {data.dealType.data.attributes.title === "sale"
                  ? "For Sale"
                  : "For Rent"}
              </InfoBox>
            )}
          </div>
        </ImgWrapper>
        <TextBox featured={data.featured} main={data.main}>
          <Top featured={data.featured}>
            <LocationContainer featured={data.featured}>
              <Location />
              <span className="location">
                {data.address}, {data.propertyLocation.data.attributes.title}
              </span>
            </LocationContainer>
            <Price featured={data.featured}>${data.price}</Price>
          </Top>
          <h2>{data.title}</h2>
          {data.featured && <p>{data.description}</p>}
          <Line />
          <div>
            <InfoBox featured={data.featured}>
              <SQFT />
              <span>{data.size}</span>
            </InfoBox>
            <InfoBox featured={data.featured}>
              <Bed />
              <span>{data.bedroomQuantity}</span>
            </InfoBox>
            <InfoBox featured={data.featured}>
              <Bath />
              <span>9</span>
            </InfoBox>
            {data.featured && (
              <InfoBox featured={data.featured}>
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
