import React from "react"
import AgentBox from "../../components/agents/AgentBox"
import { BrowseMore } from "../properties/PropertiesStyles"
import Properties from "../../components/properties/Properties"
import ArticleBox from "../../components/articles/ArticleBox"
import Button from "../../components/button/Button"
import {
  AgentsInnerPageStyles,
  ArticleBy,
  ArticleWrapper,
} from "./AgentsStyles"

function AgentsInner() {
  return (
    <AgentsInnerPageStyles>
      <div className="container">
        <AgentBox
          type="page"
          text="Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus vel ndrerit."
        />
      </div>
      <BrowseMore>
        <div className="container">
          <Properties title="Properties in charge of John Carter" />
        </div>
      </BrowseMore>
      <ArticleBy className="container">
        <div className="flex center space-between">
          <h1>Articles by John Carter</h1>
          <Button color="white" text="Browse all posts"></Button>
        </div>
        <ArticleWrapper>
          <ArticleBox />
          <ArticleBox />
          <ArticleBox />
        </ArticleWrapper>
      </ArticleBy>
    </AgentsInnerPageStyles>
  )
}

export default AgentsInner
