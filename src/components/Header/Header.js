import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import './Header.css'

const Header = () => {
  const {user,logOut}=UseAuth();
  
    return (
        <div>
           <Navbar className='py-2' collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar className='logo ' href="#home">TRAV<span className="logo-part">ISIT</span></Navbar>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    <Nav.Link   className='fw-bold text-light' >{user?.displayName}</Nav.Link>
      <Nav.Link as={Link}  to="/home">Home</Nav.Link>
      {
        user?.email &&   <Nav.Link as={Link}  to="/myBooking">My Booking</Nav.Link>   
           
     

      }
      {
           user?.email &&   <Nav.Link as={Link}  to="/manageBooking">Manage Booking</Nav.Link>   
      }
      {
        user?.email &&   <Nav.Link as={Link}  to="/addTour">Add a Service</Nav.Link>
      }
 
      {
        user?.email ?  <Nav.Link  onClick={logOut} className="sign-btn" >Logout</Nav.Link>: <Nav.Link as={Link} className="sign-btn" to="/login">Login</Nav.Link>  
      }
     
    </Nav>
    </Navbar.Collapse >
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;