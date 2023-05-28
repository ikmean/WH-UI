import React from "react"
import ArticleBox from "./ArticleBox"
import { Wrapper, Header, BoxWrapper } from "./ArticlesStyles"

export default function Articles(data: any) {
  return (
    <Wrapper>
      <Header>
        <h1>Read our latest articles</h1>
      </Header>
      {data.data.length && (
        <BoxWrapper className="flex">
          {data.data.map((data: any, i: number) => (
            <ArticleBox
              data={{
                ...data.attributes,
                id: data.id,
              }}
              key={i}
            />
          ))}
        </BoxWrapper>
      )}
    </Wrapper>
  )
}
