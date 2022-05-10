import React from 'react'
import {Container,Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { useNavigate} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import {logout, reset} from '../features/auth/authSlice'

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector(state => state.auth);

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <Navbar bg="primary " variant="light" className="mb-3">
    <Container>
    <Navbar.Brand>Dev Stack</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link>Create</Nav.Link>
      {user ? (
        <NavDropdown title={user.name} id='username'>
          <LinkContainer to='/profile'>
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
      ) : (
        <LinkContainer to='/login'>
          <Nav.Link>
            Sign In
          </Nav.Link>
        </LinkContainer>
      )}
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Header