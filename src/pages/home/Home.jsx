import React from "react";
import Explore from "../../components/explore/Explore";
import Featured from "../../components/featured/Featured";
import SearchContainer from "../../components/search/SearchContainer";

function Home() {
  return (
    <div className="container">
      <Explore />
      <SearchContainer />
      <Featured/>
    </div>
  );
}

export default Home;
