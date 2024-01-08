import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/createContext'
import { Link, useParams } from 'react-router-dom'
import { ArticleContent, ArticleHeaderContent, ArticleHeaderWrapper, Author, AuthorBigger, DateWrapper } from './BlogsStyles'
import { Util } from '../../helpers/Util'
import Loader from '../../components/Loader/Loader'

function BlogsInner() {
  const { context } = useContext(AppContext)
  const { blogsInner, fetchBlogsInnerData } = context
  const [data, setData] = useState(blogsInner)
  const { id } = useParams()
  const formattedDate = new Date(data?.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  useEffect(() => {
    blogsInner && setData(blogsInner)
  }, [blogsInner])

  useEffect(() => {
    if (id) {
      fetchBlogsInnerData(id)
    }
    window.scrollTo(0, 0)
  }, [id, fetchBlogsInnerData])

  return Util.isNull(blogsInner) ? (
    <Loader />
  ) : (
    <>
      <ArticleHeaderWrapper>
        <ArticleHeaderContent>
          <DateWrapper>Articles - {formattedDate}</DateWrapper>
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>
          <Link to={`/agents/${data?.agent.id}`}>
            <Author>
              <img src={data?.agent?.profilePicture?.small} alt='img2' />
              <div>
                <h2>
                  {data?.agent?.name} {data?.agent?.lastName}
                </h2>
                <span>{data?.agent?.about}</span>
              </div>
            </Author>
          </Link>
        </ArticleHeaderContent>
        <img src={data?.cover?.url} alt='img1' />
      </ArticleHeaderWrapper>
      <ArticleContent>
        <h2>{data?.header1}</h2>
        <p>{data?.text1}</p>
        <h3>{data?.header2}</h3>
        <p>{data?.text2}</p>
        <img src={data?.cover?.small} alt='img2' />
        <h3>{data?.header3}</h3>
        <p>{data?.text3}</p>
        <h3>{data?.header4}</h3>
        <p>{data?.text4}</p>
        <h3>{data?.header5}</h3>
        <p>{data?.text5}</p>
        <h3>{data?.header6}</h3>
        <p>{data?.text6}</p>
      </ArticleContent>
      <Link to={`/agents/${data?.agent.id}`}>
        <AuthorBigger>
          <img src={data?.agent?.profilePicture.small} alt='img2' />
          <div>
            <h2>
              {data?.agent?.name} {data?.agent?.lastName}
            </h2>
            <span>{data?.agent?.about}</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper
              lorem eu cursus vel ndrerit.
            </p>
          </div>
        </AuthorBigger>
      </Link>
    </>
  )
}

export default BlogsInner
