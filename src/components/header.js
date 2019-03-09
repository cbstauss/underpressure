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
      <Navbar.Brand href="/">Under Pressure</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="ml-auto">
        <Link to="/hardware"><Nav.Link href="#link">Hardware</Nav.Link></Link>
        <Link to="/software"><Nav.Link href="#link">Software</Nav.Link></Link>
        <Link to="/our_team"><Nav.Link href="#link">Our Team</Nav.Link></Link>
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
