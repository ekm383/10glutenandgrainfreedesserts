import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const TableOfContents = () => {
  const data = useStaticQuery(graphql`
    query {
      rina: file(relativePath: { eq: "dessert-cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyledTOC className="book-content box">
      <Img fluid={data.rina.childImageSharp.fluid} className="cookbook-cover" />
      <h3>10 Recipes from Bushels and Feasts Sweets Chapter:</h3>
      <ul>
        <li>Summer Fruit Papillotes</li>
        <li>Salted Caramel Ice Cream</li>
        <li>Pears Poached in Port Wine and Vanilla</li>
        <li>Grilled Honey-Butter Nectarines with Cinnamon Ice Cream</li>
        <li>Dark Chocolate Ganache with Fresh Seasonal Fruit</li>
        <li>Cherry Clafouti with Maple Whipped Cream</li>
        <li>Chocolate-Coconut Pots de Crème with Passion Fruit Caramel</li>
        <li>Cardamom Scented Dark Chocolate Truffles</li>
        <li>Brown Butter Pistachio and Lemon Financiers</li>
        <li>Baked Apples with Goat Cheese, Bacon, and Walnuts</li>
      </ul>
      <ul style={{ marginTop: "1rem" }}>
        <li>&#x2714; Gluten Free</li>
        <li>&#x2714; Grain Free</li>
        <li>&#x2714; Refined Sugar Free</li>
        <li>&#x2714; Paleo-friendly</li>
        <li>&#x2714; Keto-friendly</li>
        <li>&#x2714; Low Carb</li>
      </ul>
    </StyledTOC>
  )
}

const StyledTOC = styled.div`
  .cookbook-cover {
    width: 400px;
    border-radius: 1px 5px 5px 1px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
  }
  h3 {
    color: var(--mainColor);
    margin-top: 2rem;
  }
  ul {
    list-style-type: none;
  }
`

export default TableOfContents
