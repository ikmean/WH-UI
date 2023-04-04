import React from "react";
import Explore from "../../components/explore/Explore";
import SearchContainer from "../../components/search/SearchContainer";
import Featured from "../../components/featured/Featured";
import Properties from "../../components/properties/Properties";

function Home() {
  return (
    <div className="container">
      <Explore />
      <SearchContainer />
      <Featured/>
      <Properties/>
    </div>
  );
}

export default Home;
