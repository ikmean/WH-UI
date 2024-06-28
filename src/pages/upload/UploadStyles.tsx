import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { slideAnimation } from '../../styles'
import { media } from '../../helpers/device'

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 0 1rem 0;

  img {
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  span {
    color: ${colors.greyText};
  }

  p {
    color: ${colors.greyText};
  }

  ${media.xs`
    justify-content: center;
    width: 80vw;
  `}
`

export const UploadHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;

  h1 {
    font-size: 3rem;
    line-height: 60px;
    margin-bottom: 18px;
    opacity: 0;
    animation: ${slideAnimation('100px')} 1s ease 0.5s forwards;
  }

  p {
    font-size: 18px;
    line-height: 30px;
    width: 70%;
    text-align: center;
    color: ${colors.greyText};
    opacity: 0;
    animation: ${slideAnimation('100px')} 1s ease 0.7s forwards;
  }

  ${media.sm`
    h1{
    font-size: 2.5rem;
     }
    p{
    width: 60%;
    }
`}

  ${media.xs`
    h1{
      font-size: 1.9rem;
      align-self: center;
    }
    p{
      width: 80%;
    }
`}
`

export const UploadForm = styled.div`
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 0.9s forwards;

  #listing-imgs {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5rem;
    padding: 3rem;
  }

  #submit-btn {
    display: flex;
    align-items: center;
  }

  input,
  select {
    background-color: rgba(246, 246, 246, 1);
    padding: 17px 24px;
    border: transparent;
    border-radius: 12px;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px 24px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
  }

  #longDesc {
    height: 170px;
  }

  ${media.lg`
    margin: 0 100px;

    section {
        grid-template-columns: 1fr 1fr;
    }
`}

  ${media.md`
    section {
      margin: 0 2rem;
      grid-template-columns: 1fr;
    }
`}

  ${media.sm`
    max-width: 100vw;
    section{
      margin: 0 5rem;
    }
      #listing-imgs{
      margin:0;
      display: flex;
      flex-direction: column;
      gap:1rem;

      div{
        align-items: center;
      }
    }
`}

  ${media.xs`
    margin: 0;

    section {
      margin:0;
      }
`}
`

export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin-top: 15px;
`

export const Amenities = styled.div`
  display: grid !important;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  input {
    margin-right: 0.5rem;
  }

  label {
    white-space: nowrap;
  }

  ${media.sm`
    grid-template-columns: repeat(2, 1fr);
    `}

  ${media.xs`
    grid-template-columns: repeat(1, 1fr);
    `}
`

export const SectionTwo = styled.div`
  ${media.sm`
      max-width: 100vw;
      margin: 0 5rem;
    `}

  ${media.xs`
      margin: 0;
    `}
`

export const UploadGallery = styled.div`
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 1rem;

  .img-container {
    position: relative;
  }

  img {
    max-width: 15rem;
    display: block;
  }

  .closebtn {
    position: absolute;
    padding: 0 5px 2px 5px;
    right: 1.2rem;
    top: -0.5rem;
  }

  ${media.md`
    grid-template-columns: repeat(3, 1fr) !important;
    `}

  ${media.sm`
    grid-template-columns: repeat(2, 1fr) !important;
    `}
`
