import React from 'react'
import {Container,Navbar, Nav} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg="primary " variant="light" className="mb-3">
    <Container>
    <Navbar.Brand href="#home">Dev Stack</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Create</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="login">Sign In</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Header