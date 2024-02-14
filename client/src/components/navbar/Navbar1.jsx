import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Navbar1() {
  const expand = 'md';

  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">SHOP.COM</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{marginLeft:"220px"}} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                SHOP.COM
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">On Sale</Nav.Link>
                <Nav.Link href="#action2">New Arrivals</Nav.Link>
                <Nav.Link href="#action2">Brands</Nav.Link>
                <NavDropdown
                  title="Shop"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />9
                <Button variant="outline-success">Search</Button>
              </Form>
               
            </Offcanvas.Body>
           
          </Navbar.Offcanvas>
              <div className='d-flex gap-2 m-2 ms-3'>
                  <FaShoppingCart/>
                  <FaUser/>
              </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
