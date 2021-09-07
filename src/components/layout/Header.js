import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Nav, Navbar, Container, Col } from 'react-bootstrap';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Navbar bg='light' collapseOnSelect expand='lg'>
        <Container fluid>
          <Navbar.Brand href='/'>
            Spencer Corporation
            <a
              role='button'
              className={`navbar-burger burger ${isOpen && 'is-active'}`}
              aria-label='menu'
              aria-expanded='false'
              onClick={() => setOpen(!isOpen)}>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <NavLink
                style={{ marginRight: 10 }}
                className='navbar-item'
                activeClassName='is-active'
                to='/dashboard'>
                Dashboard
              </NavLink>
              <NavLink
                style={{ marginRight: 10 }}
                className='navbar-item'
                activeClassName='is-active'
                to='/contact-us'>
                Contact Us
              </NavLink>
              <NavLink
                style={{ marginRight: 10 }}
                className='navbar-item'
                activeClassName='is-active'
                to='/feedback-form'>
                Feedback Form
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
