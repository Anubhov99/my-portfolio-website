import { Outlet, Link } from "react-router-dom";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const Layout = () => {
  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
      <Navbar.Brand href="/" >My PortFolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
       <Nav.Link href="#action1">
       <Link to="/">Home</Link>
       </Nav.Link>

      
            <Nav.Link href="#action2">
            <Link to="/blogs">
              My Work
              </Link>
              </Nav.Link>


         
            <Nav.Link href="#action2">
            <Link to="/contact">
              Contact
              </Link>
              </Nav.Link>
       
       
       
       
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">My Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul> */}
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;