import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeaderAnimation from "../components/WordCampConnect/HeaderAnimation"
import AboutConnect from "../components/WordCampConnect/AboutConnect"
import ConnectTwitterFeed from "../components/WordCampConnect/ConnectTwitterFeed"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Shifter – WordCamp Connect" />
      <HeaderAnimation />
      <AboutConnect />
      <ConnectTwitterFeed />
    </Layout>
  )
}

export default IndexPage
