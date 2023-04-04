import React from "react";
import Button from '../button/Button'
import {Header} from './FeaturedStyles'
import FeaturedBox from "./FeturedBox";

export default function Featured() {
  return (
 <div>
    <Header>
    <h1> Featured properties </h1>
    <Button text="Browse all properties" color="white"/>
    </Header>
    <div>
        <FeaturedBox forSale="true"/>
        <FeaturedBox/>
    </div>
 </div>
  );
}
