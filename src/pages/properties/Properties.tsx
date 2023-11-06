/* eslint-disable @typescript-eslint/no-extra-semi */
import React, { useContext, useEffect } from "react";
import Button from "../../components/button/Button";
import {
  Nav,
  PropertiesPageWrapper,
} from "../../components/featured/FeaturedStyles";
import FeaturedBox from "../../components/featured/FeturedBox";
import PropertiesHeader from "../../components/properties/Header";
import SearchContainer from "../../components/search/SearchContainer";
import { AppContext } from "../../context/createContext";

function Properties() {
  const { context } = useContext(AppContext);
  const {
    properties,
    fetchPropertiesData,
    location,
    propertyCategory,
    dealType,
  } = context;

  useEffect(() => {
    fetchPropertiesData();
  }, [fetchPropertiesData]);

  return (
    <div className="container">
      <PropertiesHeader />
      <SearchContainer
        location={location}
        propertyCategory={propertyCategory}
        dealType={dealType}
      />
      {properties.length && (
        <PropertiesPageWrapper>
          {properties.map((data: any, i: number) => (
            <FeaturedBox
              data={{
                ...data,
                featured: false,
                main: false,
                id: data.id,
              }}
              key={i}
            />
          ))}
        </PropertiesPageWrapper>
      )}
      <Nav>
        <Button color="white" text="Previous page" to="/" />
        <Button color="black" text="Next page" to="/" />
      </Nav>
    </div>
  );
}

export default Properties;
