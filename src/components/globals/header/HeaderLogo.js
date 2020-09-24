import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "Rina-Logo.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <>
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#ffffff`}
          >
            {children}
          </BackgroundImage>
          <p
            style={{
              fontSize: "20px",
              margin: "0 auto",
              color: "black",
              fontFamily: "Caveat",
              textAlign: "center",
            }}
          >
            Gluten and Grain Free Recipes Inspired by my Sweet and Savory Life
          </p>
        </>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 300px;
`

export default StyledBackgroundSection
