import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';
import { Navbar, Nav, NavItem, Container ,NavDropdown, MenuItem ,Form ,FormControl,Button } from 'react-bootstrap';



//npm install react-sidebar-ui


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
   
    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav"> */}
      {/* <Nav className="me-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav> */}
      {/* <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav> */}
    {/* </Navbar.Collapse> */}
    <Nav className="mr-auto"></Nav>
    <Form inline>
    {/* <Button variant="outline-info">LatestAlarms</Button>{' '}
    <Button variant="outline-info">LatestEvents</Button>{' '} */}
      <Button variant="outline-info">Login</Button>
    </Form>
   
  </Navbar>
  )
};




export default NavBar
