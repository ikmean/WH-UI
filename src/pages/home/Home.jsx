import React, {useContext,useEffect } from "react";
import Explore from "../../components/explore/Explore";
import SearchContainer from "../../components/search/SearchContainer";
import Featured from "../../components/featured/Featured";
import Properties from "../../components/properties/Properties";
import FindHouse from "../../components/findHouse/FindHouse";
import Discovery from "../../components/discover/Discovery";
import Articles from "../../components/articles/Articles";
import Publish from '../../components/publish/Publish';
import { AppContext } from "../../context/createContext"

function Home() {
  const { context } = useContext(AppContext)
  const { properties, blogs, fetchPropertiesData, fetchBlogsData } = context

  useEffect(() => {
    fetchPropertiesData()
  }, [fetchPropertiesData])

  useEffect(() => {
    fetchBlogsData()
  }, [fetchBlogsData])


  return (
  <div className="flex-column">
    <div className="container">
      <Explore />
      <SearchContainer />
      <Featured properties={properties}/> 
      <Properties title="All properties" properties={properties}/> 
      <FindHouse/>
    </div>
      <Discovery/>
      <Articles data={blogs}/>
      <Publish/>
  </div>    
  );
}

export default Home;
