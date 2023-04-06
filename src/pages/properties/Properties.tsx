import React from "react"
import Button from "../../components/button/Button"
import {
  Nav,
  PropertiesPageWrapper,
} from "../../components/featured/FeaturedStyles"
import FeaturedBox from "../../components/featured/FeturedBox"
import PropertiesHeader from "../../components/properties/Header"
import SearchContainer from "../../components/search/SearchContainer"

function Properties() {
  return (
    <div className="container">
      <PropertiesHeader />
      <SearchContainer />
      <PropertiesPageWrapper>
        <FeaturedBox forSale={true} />
        <FeaturedBox />
        <FeaturedBox />
        <FeaturedBox />
        <FeaturedBox />
      </PropertiesPageWrapper>
      <Nav>
        <Button color="white" text="Previous page" />
        <Button color="black" text="Next page" />
      </Nav>
    </div>
  )
}

export default Properties
