import React from "react"
import cover from "../../lib/images/cover.png"
import {
  AmenityContainer,
  BrowseMore,
  ContentContainer,
  GalleryContainer,
  InfoContainer,
  PropertiesInnerPageContainer,
  TextContent,
} from "./PropertiesStyles"
import RequestProperty from "../../components/request/RequestProperty"
import { ReactComponent as SQFT } from "../../lib/icons/sqft.svg"
import { Line } from "../../components/articles/ArticlesStyles"
import { InfoBox } from "../../components/featured/FeaturedStyles"
import { ReactComponent as Bed } from "../../lib/icons/bed.svg"
import { ReactComponent as Bath } from "../../lib/icons/bath.svg"
import { ReactComponent as Parking } from "../../lib/icons/parking.svg"
import { Amenity } from "./Amenity"
import img1 from "../../lib/images/img1.png"
import Button from "../../components/button/Button"
import Properties from "../../components/properties/Properties"

function PropertiesInner() {
  return (
    <PropertiesInnerPageContainer>
      <img src={cover} alt="" width="100%" height="515.05px" />
      <ContentContainer className="container">
        <RequestProperty />
        <TextContent>
          <h3>8706 Herrick Ave, Sun Valley</h3>
          <h1>Home in Downtown, Los Angeles</h1>
          <InfoContainer className="flex">
            <InfoBox>
              <SQFT />
              <span>6767 sqft</span>
            </InfoBox>
            <InfoBox>
              <SQFT />
              <span>6767 sqft</span>
            </InfoBox>
            <InfoBox featured={true}>
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
          </InfoContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras
            tellus sit tempor amet, nascetur quam ornare proin platea diam amet
            sed fringilla eget pretium id sagittis in porttitor pharetra dui. A
            venenatis molestie vitae rutrum eu leo gravida odio arcu neque nulla
            etiam adipiscing amet. Diam sit tempor ut quis sodales tellus
            aliquam aliquam quis a nisl sapien nunc id etiam penatibus.
          </p>
          <Line />
          <h2>About the property</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras
            tellus sit tempor amet, nascetur quam ornare proin platea diam amet
            sed fringilla eget pretium id sagittis in porttitor pharetra dui. A
            venenatis molestie vitae rutrum eu leo gravida odio arcu neque nulla
            etiam adipiscing amet. Diam sit tempor ut quis sodales tellus
            aliquam aliquam quis a nisl sapien nunc id etiam penatibus.
          </p>
          <br />
          <p>
            Pulvinar mattis nunc sed blandit libero cursus turpis massa
            tincidunt dui ut tellus molestie nunc non blandit massa enim nec dui
            nunc netus et malesuada fames aliquam vestibulum morbi blandit
            cursus risus at ultrices mi tempus scelerisque purus semper eget
            duis at tellus in mollis nunc sed id semper risus.
          </p>
          <Line />
          <h2>Property amenities</h2>
          <AmenityContainer>
            <Amenity text="Garden" />
            <Amenity text="Security cameras" />
            <Amenity text="Laundry" />
            <Amenity text="Internet" />
            <Amenity text="Pool" />
            <Amenity text="Garage" />
            <Amenity text="Jacuzzi" />
            <Amenity text="Elevator" />
            <Amenity text="Dish Washer" />
          </AmenityContainer>
        </TextContent>
        <Line />
        <div>
          <div className="flex space-between center">
            <h1>Property gallery</h1>
            <Button text="Request info" color="black" />
          </div>
          <GalleryContainer>
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
          </GalleryContainer>
        </div>
      </ContentContainer>
      <BrowseMore>
        <div className="container">
          <Properties title="Browse more properties" />
        </div>
      </BrowseMore>
    </PropertiesInnerPageContainer>
  )
}

export default PropertiesInner
