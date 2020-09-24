import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Section from "../components/globals/section/Section"
import styled from "styled-components"
import Banner from "../components/globals/header/Banner"
import SignUpForm from "../components/SignUpForm"
import BackgroundImage from "gatsby-background-image"
import Gallery from "../components/Gallery"
import TableOfContents from "../components/TableOfContents"

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      promoItem: promosJson(id: { eq: "1" }) {
        id
        title
        details
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
  const { title, details, src, testimonial } = data.promoItem
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
              <div className="details">
                <ul>
                  {details.map((value, id) => {
                    return <li key={id}>{value}</li>
                  })}
                </ul>
              </div>
            </Banner>
          </BackgroundImage>
        </Section>
        <Section style={{ width: "80vw", margin: "4rem auto 1rem auto" }}>
          <div className="box form-container">
            <div className="summary-container">
              <Img fluid={data.rina.childImageSharp.fluid} />
            </div>
            <div className="summary-container">
              <div className="form ">
                <SignUpForm />
              </div>
            </div>
          </div>
        </Section>
        <Section style={{ width: "80vw", margin: "2rem auto 2rem auto" }}>
          <div className="content-intro">
            <h1>BUSHELS AND FEASTS</h1>
            <h3>
              170 FARM TO TABLE RECIPES FOR A GLUTEN AND GRAIN FREE LIFESTYLE
            </h3>
            <p>By Rina Thoma with Sarah Fragoso</p>
            <p style={{ marginTop: "1rem" }}>
              BUSHELS AND FEASTS is a collaboration between Le Cordon Bleu
              trained chef Rina Thoma and international bestselling cookbook
              author Sarah Fragoso. The result is a celebration of real food
              inspired by California and French cuisine; beautiful, delicious,
              market-fresh, family meals free from gluten and grains and filled
              with healthy fats and decadent desserts.
            </p>
          </div>
        </Section>
        <Section style={{ width: "80vw", margin: "4rem auto 2rem auto" }}>
          <h3 style={{ marginBottom: "2rem" }}>A few of my favorites:</h3>
          <Gallery />
        </Section>
        <Section style={{ width: "80vw", margin: "4rem auto 0rem auto" }}>
          <TableOfContents />
        </Section>
        <Section style={{ margin: "0rem auto 4rem auto" }}>
          <div className="form ">
            <SignUpForm />
          </div>
        </Section>
        <Section style={{ width: "80vw", margin: "2rem auto 2rem auto" }}>
          <div className="testimonial">
            <div className="testimonial-copy">
              <h4>Testimonial:</h4>
              <ul className="contentList">
                {testimonial.map((value, id) => {
                  return <li key={id}>{value}</li>
                })}
              </ul>
            </div>
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
    width: 80%;
    margin: 0rem auto;
    padding: 1rem;
    border-radius: 2px;
    font-size: 0.9rem;
    ul {
      list-style-type: none;
    }
  }
  .testimonial {
    ul {
      li {
        margin: 1rem 0rem;
      }
    }
  }
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  button {
    background: var(--mainColor);
    border: none;
    border-radius: 5px;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    color: #ffffff;
    &:hover {
      cursor: pointer;
    }
  }
  .content-intro {
    h1,
    h3 {
      color: var(--mainColor);
    }
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
