import React from "react"
import ArticleBox from "./ArticleBox"
import { Wrapper, Header, BoxWrapper } from "./ArticlesStyles"

export default function Articles() {
  return (
    <Wrapper>
      <Header>
        <h1>Read our latest articles</h1>
      </Header>
      <BoxWrapper className="flex">
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
      </BoxWrapper>
    </Wrapper>
  )
}
