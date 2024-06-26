import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleListWrapper, Header } from './BlogsStyles'
import ArticleBox from '../../components/articles/ArticleBox'
import { AppContext } from '../../context/createContext'
import { ArticleBoxList, ArticleList } from '../../components/articles/ArticlesStyles'
import Loader from '../../components/Loader/Loader'
import { Util } from '../../helpers/Util'
import SEO from '../../components/seo'

function Blogs() {
  const { t } = useTranslation()

  const { context } = useContext(AppContext)
  const { blogs, fetchBlogsData } = context

  useEffect(() => {
    fetchBlogsData()

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [fetchBlogsData])

  return Util.isNull(blogs) ? (
    <>
      <SEO title={`Warm House - Blogs`} description={`Read our Blogs`} />
      <Loader />
    </>
  ) : (
    <div className='container'>
      <Header>
        <h1>{t('BlogsPageHeader')}</h1>
      </Header>
      {blogs.length && (
        <ArticleListWrapper>
          <ArticleList>
            <ArticleBox type='description' data={blogs[0]} />
            <ArticleBoxList>
              {blogs.slice(1).map((data, i) => (
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
