import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
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
      <Helmet>
        <script id="mcjs">
          !function(c,h,i,m,p)
          {
            ((m = c.createElement(h)),
            (p = c.getElementsByTagName(h)[0]),
            (m.async = 1),
            (m.src = i),
            p.parentNode.insertBefore(m, p))
          }
          (document,"script","https://chimpstatic.com/mcjs-connected/js/users/20bb22ff7fdb4f70b68522c88/dd1f35af4890c63fda8645cf6.js");
        </script>
      </Helmet>
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
