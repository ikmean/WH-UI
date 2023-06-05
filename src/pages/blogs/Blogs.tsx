import React, { useContext, useEffect } from "react"
import { Header } from "./BlogsStyles"
import Search from "../../components/search/Search"
import ArticleBox from "../../components/articles/ArticleBox"
import { AppContext } from "../../context/createContext"

function Blogs() {
  const { context } = useContext(AppContext)
  const { blogs, fetchBlogsData } = context

  useEffect(() => {
    fetchBlogsData()
  }, [fetchBlogsData])

  console.log(blogs)
  return (
    <div className="container">
      <Header>
        <h1>Articles & Resources</h1>
        <Search />
      </Header>
      {blogs.length && (
        <div className="flex">
          <ArticleBox type="description" data={blogs[0]} />
          <div className="flex flex-column space-between">
            {/* <ArticleBox type="readMoreSmall" />
          <ArticleBox type="readMoreSmall" />
          <ArticleBox type="readMoreSmall" /> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Blogs
