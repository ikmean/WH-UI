import React from "react"
import { Header } from "./BlogsStyles"
import Search from "../../components/search/Search"
import ArticleBox from "../../components/articles/ArticleBox"

function Blogs() {
  return (
    <div className="container">
      <Header>
        <h1>Articles & Resources</h1>
        <Search />
      </Header>
      <div className="flex">
        {/* <ArticleBox type="description" /> */}
        <div className="flex flex-column space-between">
          {/* <ArticleBox type="readMoreSmall" />
          <ArticleBox type="readMoreSmall" />
          <ArticleBox type="readMoreSmall" /> */}
        </div>
      </div>
    </div>
  )
}

export default Blogs
