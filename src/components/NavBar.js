import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';
import { Navbar, Nav, NavItem, Container ,NavDropdown, MenuItem ,Form ,FormControl,Button } from 'react-bootstrap';



//npm install react-sidebar-ui


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
   
 {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
 <Nav className="me-auto">
 <Link to='/'>  <Nav.Link href="#Home">Home</Nav.Link></Link>
       
        <NavDropdown title="Alarms" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Current Alarms</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Historic Alarms</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Events" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Current Events</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Historic Events</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Trends" id="collasible-nav-dropdown">
        <Link to='./graph'>    <NavDropdown.Item href="#action/3.1">Current Trends</NavDropdown.Item></Link>
          <NavDropdown.Item href="#action/3.2">Historic Trends</NavDropdown.Item>
        </NavDropdown>

  

      </Nav> 
     <Nav>
        <Nav.Link href="#deets">Reports</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
        Process Flow Models
        </Nav.Link>
      </Nav> 
    </Navbar.Collapse> 
    <Nav className="me-auto"></Nav>
  
 
    <NavDropdown title="User Management" id="collasible-nav-dropdown">
    <Link to='./ViewUsers'><NavDropdown.Item href="#action/3.1">View Users</NavDropdown.Item></Link>
    <Link to='./AddUser'>   <NavDropdown.Item href="#action/3.2">Add User</NavDropdown.Item></Link>
    <Link to='./AddXml'>    <NavDropdown.Item href="#action/3.2">Add Xml</NavDropdown.Item></Link>
        </NavDropdown>
      <Button variant="outline-info">Login</Button>
  
   
  </Navbar>
  )
};




export default NavBar
