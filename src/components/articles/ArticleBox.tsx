import React from 'react'
import { ReactComponent as Arrow } from '../../lib/icons/redArrow.svg'
import { ArticleBoxSmall, BoxContainer, Info, InfoFooter, Line, ReadMore } from './ArticlesStyles'
import { getDate } from '../../helpers/TimeConverter'
import { Link } from 'react-router-dom'

export default function ArticleBox({ type = 'default', data }: any) {
  const date = data && getDate(data?.publishedAt)
  return (
    <BoxContainer type={type}>
      <Link to={`/blogs/${data?.id?.toString()}`}>
        <ArticleBoxSmall type={type}>
          <img src={data?.cover?.small} alt='img1' width='406px' height='282.94px' />
          {data && (
            <Info>
              <h2>{data.title}</h2>
              <div>
                {type === 'default' && <Line />}
                {type === 'default' && (
                  <InfoFooter>
                    <span>Articles</span>
                    <span>{date}</span>
                  </InfoFooter>
                )}
              </div>
              {type === 'description' && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>}
              {type === 'readMoreSmall' && (
                <ReadMore>
                  <span>Read More</span>
                  <Arrow />
                </ReadMore>
              )}
            </Info>
          )}
        </ArticleBoxSmall>
      </Link>
    </BoxContainer>
  )
}
