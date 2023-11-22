import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/createContext'
import { useParams } from 'react-router-dom'
import { ArticleContent, ArticleHeaderContent, ArticleHeaderWrapper, Author, DateWrapper } from './BlogsStyles'
import img1 from '../../lib/images/img1.png'
import img2 from '../../lib/images/img2.png'

function BlogsInner() {
  const { context } = useContext(AppContext)
  const { blogsInner, fetchBlogsInnerData } = context
  const [data, setData] = useState(blogsInner)
  const { id } = useParams()
  const formattedDate = new Date(data?.publishedAt).toLocaleDateString('en-US', { month: 'long' })

  useEffect(() => {
    blogsInner && setData(blogsInner)
  }, [blogsInner])

  useEffect(() => {
    if (id) {
      fetchBlogsInnerData(id)
    }
  }, [id, fetchBlogsInnerData])
  console.log(data)

  return (
    <>
      <ArticleHeaderWrapper>
        <ArticleHeaderContent>
          <DateWrapper>Articles - {formattedDate}</DateWrapper>
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>
          <Author>
            <img src={img2} alt='img2' />
            <div>
              Mariam Kavtaradze
              <span>Realtor Agent</span>
            </div>
          </Author>
        </ArticleHeaderContent>
        <img src={img1} alt='img1' />
      </ArticleHeaderWrapper>
      <ArticleContent>
        <h2>{data?.header1}</h2>
        <div>{data?.text1}</div>
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
    </>
  )
}

export default BlogsInner
