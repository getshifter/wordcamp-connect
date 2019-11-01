import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Col,
  Row,
  Button,
} from "reactstrap"

const Navigation = props => {
  const data = useStaticQuery(graphql`
    query {
      logoColor: file(relativePath: { eq: "shifter-logo.png" }) {
        childImageSharp {
          fixed(width: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoWhite: file(relativePath: { eq: "shifter-logo--white.png" }) {
        childImageSharp {
          fixed(width: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="navigation">
      <Container fluid>
        <Row>
          <Col>
            <Navbar dark className="p-3" expand="md">
              <NavbarBrand href="/">
                <Img fixed={data.logoWhite.childImageSharp.fixed} alt="Logo" />
              </NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button color="outline-white" href="https://getshifter.io">
                    getshifter.io
                  </Button>
                </NavItem>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Navigation
