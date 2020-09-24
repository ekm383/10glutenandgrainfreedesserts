import React from "react"
import styled from "styled-components"

const Banner = ({ style, title, children }) => {
  return (
    <BannerWrapper style={style}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  width: 80%;
  margin: 0px auto;
  padding: 12rem 0rem 10rem 0rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: var(--white);
  .banner {
    flex-basis: 100%;
    text-align: center;
  }
  .title {
    flex-basis: 100%;
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 4rem;
    line-height: 3.5rem;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
  }
`

export default Banner
