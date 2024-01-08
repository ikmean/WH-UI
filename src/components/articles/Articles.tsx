/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useRef } from 'react'
import ArticleBox from './ArticleBox'
import { Wrapper, Header, BoxWrapper, ArticleButton, ArticleButtonWrapper } from './ArticlesStyles'
import { ReactComponent as ChevronRight } from '../../lib/icons/ChevronRight.svg'
import { ReactComponent as ChevronRightWhite } from '../../lib/icons/ChevronRightWhite.svg'
import { ReactComponent as ChevronLeft } from '../../lib/icons/ChevronLeft.svg'
import { ReactComponent as ChevronLeftWhite } from '../../lib/icons/ChevronLeftWhite.svg'
import { useInView } from 'react-intersection-observer'
import { SlowLoader } from '../featured/FeaturedStyles'

export default function Articles(data: any) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-245px'
  })

  const [isHovering, setIsHovering] = useState({ left: false, right: false })
  const listContainerRef = useRef(null)

  const handleMouseOverLeft = () => {
    setIsHovering({ left: true, right: false })
  }

  const handleMouseOutLeft = () => {
    setIsHovering({ left: false, right: false })
  }

  const handleMouseOverRight = () => {
    setIsHovering({ left: false, right: true })
  }

  const handleMouseOutRight = () => {
    setIsHovering({ left: false, right: false })
  }

  const handleLeftClick = () => {
    if (listContainerRef.current) {
      //@ts-ignore
      listContainerRef.current.scrollBy({
        left: -410.333,
        behavior: 'smooth'
      })
    }
  }

  const handleRightClick = () => {
    if (listContainerRef.current) {
      //@ts-ignore
      listContainerRef.current.scrollBy({
        left: 410.333,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Wrapper ref={ref}>
      {inView && (
        <SlowLoader>
          <Header>
            <h1>Read our latest articles</h1>
            <ArticleButtonWrapper>
              <ArticleButton onClick={handleLeftClick} onMouseOver={handleMouseOverLeft} onMouseOut={handleMouseOutLeft}>
                {isHovering.left ? <ChevronLeftWhite /> : <ChevronLeft />}
              </ArticleButton>
              <ArticleButton onClick={handleRightClick} onMouseOver={handleMouseOverRight} onMouseOut={handleMouseOutRight}>
                {isHovering.right ? <ChevronRightWhite /> : <ChevronRight />}
              </ArticleButton>
            </ArticleButtonWrapper>
          </Header>{' '}
          {data.data.length && (
            <>
              <BoxWrapper ref={listContainerRef}>
                {data.data.map((data: any, i: number) => (
                  <ArticleBox
                    data={{
                      ...data,
                      id: data.id
                    }}
                    key={i}
                  />
                ))}
              </BoxWrapper>
            </>
          )}
        </SlowLoader>
      )}
    </Wrapper>
  )
}
