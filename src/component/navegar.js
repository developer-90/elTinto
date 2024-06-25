import React from 'react';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';

const Navegar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Navbar.Brand href="/" className="navbar-brand-custom text-warning">El Tinto</Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-warning'>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="ml-auto">
            <Nav.Link href="/" className="nav-link-custom">Inicio</Nav.Link>
            <Nav.Link href="nosotros" className="nav-link-custom">Nosotros</Nav.Link>
            <Nav.Link href="carta" className="nav-link-custom">Carta</Nav.Link>
            <Nav.Link href="contacto" className="nav-link-custom">Contacto</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default Navegar;
