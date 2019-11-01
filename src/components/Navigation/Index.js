import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Col,
  Row,
  Button,
} from "reactstrap"

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

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
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button color="outline-white" href="https://getshifter.io">getshifter.io</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Navigation
