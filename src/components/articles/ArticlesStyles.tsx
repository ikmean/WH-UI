import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { media } from '../../helpers/device'

export const Wrapper = styled.div`
  margin-top: 10rem;
  padding-bottom: 100px;
  width: 100%;
  padding-left: 5%;
  h1 {
    font-size: 32px;
  }

  ${media.sm`
    h1{
      font-size: 1.75rem;
    }
  `}

  ${media.xs`
    width: 95vw;
    h1{
      font-size: 1.5rem;
    }
  `}
`

export const Header = styled.div`
  width: 100%;
  margin-bottom: 41px;
  display: flex;
  justify-content: space-between;

  ${media.xs`
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  `}
`

export const BoxContainer = styled.div<{ type: string }>`
  display: flex;
  flex-direction: column;
  border-radius: 26px;
  margin-right: ${({ type }) => (type === 'default' ? '0' : '30px')};
  width: ${({ type }) => type === 'description' && '50%'};
  width: ${({ type }) => type === 'readMoreSmall' && '100%'};
  width: ${({ type }) => type === 'default' && '390px'};
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0px 3px 5px rgba(8, 15, 52, 0.06);
  transition: transform 0.3s ease;
  :nth-child(3) {
    margin-right: 0;
  }
  img {
    object-fit: cover;
    border-top-left-radius: 26px;
    border-top-right-radius: ${({ type }) => type !== 'readMoreSmall' && '26px'};
    border-bottom-left-radius: ${({ type }) => type === 'readMoreSmall' && '26px'};
    width: ${({ type }) => type === 'readMoreSmall' && '232.91px'};
    height: ${({ type }) => type === 'default' && '232.91px'};
    height: ${({ type }) => type === 'readMoreSmall' && '179.28px'};
    height: ${({ type }) => type === 'description' && '377px'};
    max-height: 60%;
    transition: transform 0.3s;
  }
  h2 {
    font-size: 22px;
    line-height: 30px;
    height: 70px;
  }
  p {
    color: ${colors.greyText};
    font-size: 18px;
    margin-top: 16px;
    padding-bottom: 56px;
  }
  span {
    display: inline-block;
    margin-right: 13px;
    margin-top: 21px;
    font-size: 18px;
  }
  &:hover {
    transition: transform 0.3s ease;
    transform: translate(0px, -5px);
    img {
      transform: scale(1.03);
    }
    h2 {
      color: ${colors.secondary};
    }
    svg {
      transition: transform 0.2s ease-in-out;
      transform: translate(5px, -5px);
    }
  }

  ${media.lg`
      width: ${({ type }: any) => type !== 'default' && '100%'};
      margin-right: 0;
  `}

  ${media.xs`
    margin-right: 0;
    height: 100%;
    max-height: 100%;
    width: 85vw;

    img{
      width: 100%;
      height: auto;
    }
  `}
`

export const Info = styled.div`
  margin-top: 31px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const InfoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.greyText};
  padding-bottom: 33px;
  margin-top: 31px;
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${colors.border};
  margin: 25px 0;
`

export const BoxWrapper = styled.div`
  display: flex;
  overflow: hidden;
  padding-bottom: 15px;
  gap: 30px;

  ${media.xs`
     gap: 1.5rem;
     overflow: auto;
     flex-direction: column;
  `}
`

export const ArticleButtonWrapper = styled.div`
  display: flex;
  padding-right: 24px;
  gap: 20px;
`

export const ArticleButton = styled.button`
  display: flex;
  align-items: center;
  margin: auto;
  background-color: ${colors.white};
  border-radius: 12px;
  border: 1px solid var(--neutral-300);
  width: 56px;
  max-height: 56px;
  min-height: 56px;
  min-width: 56px;
  font-size: 19px;
  box-shadow: 0 2px 8px rgba(20, 20, 43, 0.06);
  cursor: pointer;
  width: fit-content;
  padding: 20px 15px;
  &:hover {
    background-color: ${colors.primary};
  }

  ${media.xs`
    display: none;
  `}
`

export const ArticleList = styled.div`
  display: flex;
  gap: 20px;

  ${media.lg`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
  `}

  ${media.xs`
    width: 100%;
  `}
`

export const ArticleBoxList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 643.5px;
  overflow-y: auto;
  width: 100%;
  gap: 50px;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  overflow-y: hidden;
  overflow-x: hidden;

  ${media.lg`
    max-height: 100%;
  `}
`

export const ArticleBoxSmall = styled.div<{ type: string }>`
  display: ${({ type }) => type === 'readMoreSmall' && 'flex'};
  flex-direction: ${({ type }) => type === 'readMoreSmall' && 'row'};

  ${media.md`
    flex-direction: ${({ type }: any) => type === 'readMoreSmall' && 'column'};

    img{
      width:100%;
    }
  `}
`

export const ReadMore = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  color: ${colors.secondary};
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  display: inline-block;

  ${media.md`
    padding-bottom: 0.5rem;
  `}
`
