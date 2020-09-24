import React, { Component } from "react"
import styled from "styled-components"
import { FaInstagram, FaFacebookSquare, FaPinterest } from "react-icons/fa"

class Footer extends Component {
  state = {
    icons: [
      {
        id: 2,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https://www.instagram.com/la_dolce_rina/",
      },
      {
        id: 1,
        icon: <FaFacebookSquare className="icon facebook-icon" />,
        path: "https://www.facebook.com/rina.thoma",
      },
      {
        id: 1,
        icon: <FaPinterest className="icon pinterest-icon" />,
        path: "#",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="box contact">
          <h6>
            <a href="/">BUSHELS AND FEASTS</a>
          </h6>
          <p>
            170 Farm to Table Recipes for a Gluten and Grain Free Lifestyle
            <br />
            By Rina Thoma with Sarah Fragoso
          </p>
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  background: var(--darkGray);
  color: var(--white);
  p,
  .phone {
    font-size: 0.8rem;
  }
  .box {
    flex-basis: 100%;
    padding: 4rem;
    text-align: center;
  }
  .contact {
    h6 {
      color: #ffffff;
      font-size: 2rem;
    }
    p {
      color: #ffffff;
    }
  }
  a {
    color: var(--white);
    font-size: 2rem;
    line-height: 4rem;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    .box {
      flex-basis: 100%;
    }
    .phone {
      font-size: 0.8rem;
    }
  }
`

export default Footer
