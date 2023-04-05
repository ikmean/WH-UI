import React from "react";
import Explore from "../../components/explore/Explore";
import SearchContainer from "../../components/search/SearchContainer";
import Featured from "../../components/featured/Featured";
import Properties from "../../components/properties/Properties";
import FindHouse from "../../components/findHouse/FindHouse";
import Discovery from "../../components/discover/Discovery";
import Articles from "../../components/articles/Articles";

function Home() {
  return (
  <div className="flex-column">
    <div className="container">
      <Explore />
      <SearchContainer />
      <Featured/>
      <Properties/>
      <FindHouse/>
    </div>
      <Discovery/>
      <Articles/>
  </div>    
  );
}

export default Home;
