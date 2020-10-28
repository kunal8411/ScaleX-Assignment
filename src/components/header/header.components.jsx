import React from 'react';

import './header.styles.scss'
import { Navbar, Nav,  Form, FormControl,Button } from 'react-bootstrap';
const Header= ()=>(
    <Navbar bg="grey" expand="lg" className='header'>
  <Navbar.Brand href="/">ScaleX</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/dashboard">DASHBOARD</Nav.Link>
      <Nav.Link href="/signin">SIGNIN</Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

)

export default Header;