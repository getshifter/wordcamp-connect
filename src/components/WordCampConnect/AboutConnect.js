import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Row, Col, Container } from "reactstrap"

const AboutConnect = () => {
  const data = useStaticQuery(graphql`
    query {
      stampimage: file(relativePath: { eq: "wcc-stamp.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const stampimage = data.stampimage.childImageSharp.fixed
  return (
    <Container className="mb-5 section-row">
      <Row className="justify-content-center text-center">
        <Col sm="8">
          <Img fixed={stampimage} className="my-3" />
          <h1 className="mb-3">About WordCamp Connect</h1>
          <h4 className="mb-3">
            This year, our team at Shifter is attending both{" "}
            <a href="https://2019.us.wordcamp.org">WordCamp US</a> and{" "}
            <a href="https://2019.tokyo.wordcamp.org/">WordCamp Tokyo</a>. It
            just so happens that both of these WordCamps are taking place on the
            same dates. We're taking the opportunity to create a nonstop
            WordCamp extravaganze by connecting the WordPress communities in the
            US and in Japan.
          </h4>
          <h4 className="mb-5">
            {" "}
            To dispatch a virtual postcard, simply Tweet your message and tag
            them with{" "}
            <span className="font-weight-bold">
              #wcus, #wordcamptokyo
            </span> and{" "}
            <span className="font-weight-bold">#wordcampconnect.</span>
          </h4>
          <h4>The WordPress community is global. Let's connect!</h4>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutConnect
