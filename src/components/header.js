import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
      crossorigin="anonymous"
    />
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Under Pressure</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="ml-auto">
        <Nav.Link href="#home">Documents</Nav.Link>
        <Nav.Link href="#link">Our Team</Nav.Link>
      </Nav>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
