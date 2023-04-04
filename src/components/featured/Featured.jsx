import React from "react";
import FeatureHeader from './Header'
import FeaturedBox from "./FeturedBox";

export default function Featured() {
  return (
 <div>
    <FeatureHeader title="Featured properties"/>
    <div>
        <FeaturedBox forSale={true} featured={true}/>
        <FeaturedBox featured={true}/>
    </div>
 </div>
  );
}
