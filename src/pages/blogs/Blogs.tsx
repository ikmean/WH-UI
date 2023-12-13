import React, { useContext, useEffect } from 'react'
import { ArticleListWrapper, Header, SearchWrapper } from './BlogsStyles'
import Search from '../../components/search/Search'
import ArticleBox from '../../components/articles/ArticleBox'
import { AppContext } from '../../context/createContext'
import { ArticleBoxList, ArticleList } from '../../components/articles/ArticlesStyles'

function Blogs() {
  const { context } = useContext(AppContext)
  const { blogs, fetchBlogsData } = context

  useEffect(() => {
    fetchBlogsData()
  }, [fetchBlogsData])

  console.log(blogs)
  return (
    <div className='container'>
      <Header>
        <h1>Articles & Resources</h1>
      </Header>
      {blogs.length && (
        <ArticleListWrapper>
          <ArticleList>
            <ArticleBox type='description' data={blogs[0]} />
            <ArticleBoxList>
              {blogs.slice(1).map((data: any, i: number) => (
                <ArticleBox type='readMoreSmall' key={i} data={data} />
              ))}
            </ArticleBoxList>
          </ArticleList>
        </ArticleListWrapper>
      )}
    </div>
  )
}

export default Blogs
