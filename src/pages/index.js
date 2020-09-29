import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Section from "../components/globals/section/Section"
import styled from "styled-components"
import SignUpForm from "../components/SignUpForm"
import Banner from "../components/globals/header/Banner"
import BackgroundImage from "gatsby-background-image"
import Gallery from "../components/Gallery"
import TableOfContents from "../components/TableOfContents"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      promoItem: promosJson(id: { eq: "1" }) {
        id
        title
        details
        content
        offer
        src {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        testimonial
      }
      rina: file(relativePath: { eq: "rina-cookbook-img.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      matt: file(relativePath: { eq: "matt.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { title, content, offer, details, src, testimonial } = data.promoItem
  return (
    <Layout>
      <Wrapper>
        <Section
          style={{
            width: "100vw",
            margin: "2rem auto",
            alignItems: "center",
          }}
        >
          <BackgroundImage
            className="hero"
            Tag="section"
            fluid={src.childImageSharp.fluid}
          >
            <Banner title={title}>
              <ul className="details">
                {details.map((value, id) => {
                  return <li key={id}>{value}</li>
                })}
              </ul>
            </Banner>
          </BackgroundImage>
        </Section>
        <Section style={{ width: "80vw", margin: "4rem auto 1rem auto" }}>
          <div className="box form-container">
            <div className="summary-container">
              <Img fluid={data.rina.childImageSharp.fluid} />
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  margin: "2rem 0rem",
                }}
              >
                Get your free Dessert eBook from my new cookbook Bushels and
                Feasts, containing 10 irresistible, gluten and grain-free, real
                food desserts!
              </p>
              <ul className="contentList">
                {content.map((value, id) => {
                  return <li key={id}>&#x2714; {value}</li>
                })}
              </ul>
            </div>
            <div className="summary-container">
              <div className="form ">
                <SignUpForm />
              </div>
            </div>
          </div>
          <div className="box">
            <ul className="contentList">
              {offer.map((value, id) => {
                return <li key={id}>{value}</li>
              })}
            </ul>
          </div>
        </Section>
        <Gallery />
        <Section style={{ width: "80vw", margin: "2rem auto 2rem auto" }}>
          <div className="content-intro">
            <h1 style={{ color: "var(--mainColor)" }}>BUSHELS AND FEASTS</h1>
            <h3>
              170 FARM TO TABLE RECIPES FOR A GLUTEN AND GRAIN FREE LIFESTYLE
            </h3>
            <p>By Rina Thoma with Sarah Fragoso</p>
          </div>
          <div className="testimonial-container">
            <div className="testimonial-image">
              <Img fluid={data.matt.childImageSharp.fluid} className="matt" />
            </div>
            <div className="testimonial-copy">
              <p
                style={{
                  marginTop: "1rem",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                <FaQuoteLeft /> BUSHELS AND FEASTS is a collaboration between Le
                Cordon Bleu trained chef Rina Thoma and international
                bestselling cookbook author Sarah Fragoso. The result is a
                celebration of real food inspired by California and French
                cuisine; beautiful, delicious, market-fresh, family meals free
                from gluten and grains and filled with healthy fats and decadent
                desserts. <FaQuoteRight />
              </p>
              <p
                style={{
                  marginTop: "1rem",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                <strong>Matt Raso, Famed Nobu executive chef</strong>
              </p>
            </div>
          </div>
        </Section>
        <Section style={{ margin: "0rem auto 4rem auto" }}>
          <div className="form ">
            <SignUpForm />
          </div>
        </Section>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  color: var(--darkGray);
  .form-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .summary-container {
      flex-basis: 45%;
    }
  }
  .box {
    flex-basis: 100%;
    margin-bottom: 2rem;
  }
  .hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
  .details {
    background: var(--mainColor);
    width: 60%;
    margin: 0rem auto;
    padding: 0.3rem 0.5rem 0.5rem 0.5rem;
    font-weight: bold;
    border-radius: 2px;
    li {
      margin: 0.5rem;
      display: inline;
    }
  }
  h3 {
    color: var(--mainColor);
  }
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .cta {
    font-style: italic;
    font-weight: bold;
    color: var(--mainColor);
    margin-top: 0.5rem;
  }
  .contentList {
    margin-top: 1rem;
    font-family: "Open Sans";
    li {
      list-style-type: none;
    }
  }
  .form {
    background: #f1f1f1;
    border-radius: 5px;
    flex-basis: 45%;
    padding: 1rem;
  }
  .offers {
    flex-basis: 45%;
    .offersList {
      width: 100%;
      margin: 0rem auto;
      li {
        list-style-type: none;
      }
    }
  }
  .testimonial-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2rem 0rem;
    .testimonial-image {
      flex: 1;
      margin-right: 1rem;
    }
    .testimonial-copy {
      flex: 3;
    }
  }
  svg {
    color: var(--mainColor);
  }

  @media (max-width: 768px) {
    .details {
      width: 90%;
      margin: 0rem auto;
    }
    .offers {
      flex-basis: 100%;
    }
    .list {
      margin: 2rem 0rem;
    }
    .box {
      flex-basis: 100%;
    }
    .form {
      margin: 2rem 0rem;
      flex-basis: 100%;
      padding: 1rem;
    }
    .form-container {
      .summary-container {
        flex-basis: 100%;
      }
    }
  }
`

export default Index
