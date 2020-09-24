import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaInstagram, FaFacebookSquare, FaPinterest } from "react-icons/fa"

class NavBarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        text: "home",
      },
      {
        id: 1,
        path: "/about",
        text: "about",
      },
      {
        id: 2,
        path: "/recipes",
        text: "recipes",
      },
      {
        id: 3,
        path: "/cookbook",
        text: "cookbook",
      },
      {
        id: 3,
        path: "/promos/dessert-recipes",
        text: "Free eBook",
      },
      {
        id: 4,
        path: "/favorites",
        text: "favorites",
      },
      {
        id: 5,
        path: "/contact",
        text: "contact",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navBarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <AniLink fade to={item.path} className="nav-link">
                {item.text}
              </AniLink>
            </li>
          )
        })}
        <ul className="social">
          <li>
            <a href="https://www.instagram.com/la_dolce_rina/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/rina.thoma">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="/">
              <FaPinterest />
            </a>
          </li>
        </ul>
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  margin: 0rem auto;
  li {
    list-style-type: none;
  }
  svg {
    padding-top: 5px;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1.2rem;
    color: var(--darkGray);
    font-family: "Poppins";
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      background: var(--mainColor);
      color: var(--white);
      padding: 0.5rem 1.5rem;
    }
  }
  .social {
    padding-left: 1rem;
    ul {
      list-style-type: none;
    }
    li {
      display: inline;
      padding-left: 0.2rem;
    }
    a {
      font-size: 1.5rem;
      color: var(--mainColor);
      transition: all 0.2s ease-in-out;
      &:hover {
        color: var(--darkGray);
      }
    }
  }
  height: ${props => (props.open ? "300px" : "0px")};
  overflow: hidden;
  transition: all 0.1s ease-in-out;
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    .nav-link {
      padding: 1rem 1.2rem;
      font-family: "Poppins";
      font-size: 1rem;
      font-weight: bold;
    }
    .nav-link:hover {
      background: var(--white);
      color: var(--mainColor);
      padding: 1rem 1.2rem;
    }
    .social {
      margin-top: 0.9rem;
      ul {
        list-style-type: none;
      }
      li {
        display: inline;
      }
      a {
        font-size: 1.8rem;
        color: var(--mainColor);
        transition: all 0.2s ease-in-out;
        &:hover {
          color: var(--darkGray);
        }
      }
    }
  }
`

export default NavBarLinks
