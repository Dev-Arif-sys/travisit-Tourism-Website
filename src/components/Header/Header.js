import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
           <Navbar className='py-2' collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar className='logo ' href="#home">TRAV<span className="logo-part">ISIT</span></Navbar>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link}  to="/home">Home</Nav.Link>
      <Nav.Link as={Link}  to="orders">All Orders</Nav.Link>
      <Nav.Link as={Link} className="sign-btn" to="/login">Login</Nav.Link>
    </Nav>
    </Navbar.Collapse >
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;