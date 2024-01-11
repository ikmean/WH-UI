import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleListWrapper, Header } from './BlogsStyles'
import ArticleBox from '../../components/articles/ArticleBox'
import { AppContext } from '../../context/createContext'
import { ArticleBoxList, ArticleList } from '../../components/articles/ArticlesStyles'
import Loader from '../../components/Loader/Loader'
import { Util } from '../../helpers/Util'

function Blogs() {
  const { t } = useTranslation()

  const { context } = useContext(AppContext)
  const { blogs, fetchBlogsData } = context

  useEffect(() => {
    fetchBlogsData()
  }, [fetchBlogsData])

  return Util.isNull(blogs) ? (
    <Loader />
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
