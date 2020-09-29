import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "cookbook/dessert-image-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "cookbook/dessert-image-02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: { eq: "cookbook/dessert-image-03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img4: file(relativePath: { eq: "cookbook/dessert-image-04.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img5: file(relativePath: { eq: "cookbook/dessert-image-05.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img6: file(relativePath: { eq: "cookbook/dessert-image-06.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img7: file(relativePath: { eq: "cookbook/dessert-image-07.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img8: file(relativePath: { eq: "cookbook/dessert-image-08.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img9: file(relativePath: { eq: "cookbook/dessert-image-09.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img10: file(relativePath: { eq: "cookbook/dessert-image-10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <GalleryWrapper>
      <div className="item item-1">
        <Img fluid={data.img1.childImageSharp.fluid} />
        <p className="info">SUMMER FRUIT PAPILLOTES</p>
      </div>
      <div className="item item-2">
        <Img fluid={data.img2.childImageSharp.fluid} />
        <p className="info">SALTED CARAMEL DARK CHOCOLATE MOUSSE</p>
      </div>
      <div className="item item-3">
        <Img fluid={data.img3.childImageSharp.fluid} />
        <p className="info">PEARS POACHED IN PORT WINE AND VANILLA</p>
      </div>
      <div className="item item-4">
        <Img fluid={data.img4.childImageSharp.fluid} />
        <p className="info">
          GRILLED HONEY-BUTTER NECTARINES WITH CINNAMON ICE CREAM
        </p>
      </div>
      <div className="item item-5">
        <Img fluid={data.img5.childImageSharp.fluid} />
        <p className="info">DARK CHOCOLATE GANACHE WITH FRESH SEASONAL FRUIT</p>
      </div>
      <div className="item item-6">
        <Img fluid={data.img6.childImageSharp.fluid} />
        <p className="info">CHERRY CLAFOUTI WITH MAPLE WHIPPED CREAM</p>
      </div>
      <div className="item item-7">
        <Img fluid={data.img7.childImageSharp.fluid} />
        <p className="info">
          CHOCOLATE-COCONUT POTS DE CREME WITH PASSION FRUIT CARAMEL
        </p>
      </div>
      <div className="item item-8">
        <Img fluid={data.img8.childImageSharp.fluid} />
        <p className="info">CARDAMOM SCENTED DARK CHOCOLATE TRUFFLES</p>
      </div>
      <div className="item item-9">
        <Img fluid={data.img9.childImageSharp.fluid} />
        <p className="info">BROWN BUTTER PISTACHIO AND LEMON FINANCIERS</p>
      </div>
      <div className="item item-10">
        <Img fluid={data.img10.childImageSharp.fluid} />
        <p className="info">
          BAKED APPLES WITH GOAT CHEESE, BACON, AND WALNUTS
        </p>
      </div>
    </GalleryWrapper>
  )
}

const GalleryWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  margin: 0rem auto;
  .item {
    margin: 1rem auto;
    position: relative;
    width: 60%;
  }
  .info {
    text-transform: uppercase;
    font-size: 2rem;
    line-height: 2.5rem;
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    color: var(--white);
    font-weight: bold;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 768px) {
    .item {
      width: 100%;
    }
  }
`

export default Gallery
