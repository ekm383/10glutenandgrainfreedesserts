import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import HeaderLogo from "./globals/header/HeaderLogo"
import Footer from "./globals/footer/Footer"
import Copyright from "./globals/footer/Copyright"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <HeaderLogo />
      {children}
      <Footer />
      <Copyright />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
