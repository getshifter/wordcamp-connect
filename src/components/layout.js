/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Intercom from 'react-intercom';
import Navigation from '../components/Navigation/Index'
import "../assets/style.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navigation />
        <main>{children}</main>
      </div>
      <Intercom appID="w5yiaz2d" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
