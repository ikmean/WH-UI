import React from "react";
import FeatureHeader from './Header'
import FeaturedBox from "./FeturedBox";

export default function Featured() {
  return (
 <div>
    <FeatureHeader title="Featured properties"/>
    <div>
        <FeaturedBox forSale={true} featured={true} main={true}/>
        <FeaturedBox featured={true}  main={true}/>
    </div>
 </div>
  );
}
