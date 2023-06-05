import React, { useContext, useEffect, useState } from "react"

import { AppContext } from "../../context/createContext"
import { useParams } from "react-router-dom"

function BlogsInner() {
  const { context } = useContext(AppContext)
  const { blogsInner, fetchBlogsInnerData } = context
  const [data, setData] = useState(blogsInner)
  const { id } = useParams()

  useEffect(() => {
    blogsInner && setData(blogsInner)
  }, [blogsInner])

  useEffect(() => {
    if (id) {
      fetchBlogsInnerData(id)
    }
  }, [id, fetchBlogsInnerData])

  return <div></div>
}

export default BlogsInner
