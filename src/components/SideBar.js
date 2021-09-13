import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';


//npm install react-sidebar-ui


const SideBar = () => {
  return (
    <div>
      <Sidebar bgColor='black' isCollapsed={false}>
      <br></br><br></br>  <br></br><br></br>
        <Logo
          // image=''
          imageName='react logo'/>
        
        {/* <LogoText>ECIL</LogoText> */}
        {/* <DropdownItem
          values={['First', 'Second', 'Third']}
          bgColor={'black'}>
          Menu
        </DropdownItem> */}
         <br></br><br></br>

         <Link to='/'> <Item bgColor='black'>
          <Icon><i className="fas fa-home"/></Icon>
          Home
        </Item></Link>

        <hr class="sidebar-divider my-0" color="grey"/>

        <Link to='./ViewUsers'><Item bgColor='black'>
          <Icon><i className="fas fa-info"/></Icon>
         View Users 
        </Item></Link>

        <hr class="sidebar-divider my-0" color="grey"/>

       <Link to='./AddUser'> <Item bgColor='black'>
          <Icon><i className="fas fa-sitemap"/></Icon>
         Add User
        </Item></Link>
        <hr class="sidebar-divider my-0" color="grey"/>
        <Item bgColor='black'>
          <Icon><i className="far fa-address-book"/></Icon>
          View Projects 
        </Item>
        <hr class="sidebar-divider my-0" color="grey" />
        <Item bgColor='black'>
          <Icon><i className="fas fa-rss-square"/></Icon>
          Add Projects 
        </Item>
        <hr class="sidebar-divider my-0" color="grey"/>
        <Link to='./AddXml'><Item bgColor='black'>
          <Icon><i className="fas fa-rss-square"/></Icon>
          Add XML 
        </Item></Link>
        <hr class="sidebar-divider my-0" color="grey" />
        <Link to='./graph'><Item bgColor='black'>
          <Icon><i className="fas fa-rss-square"/></Icon>
          Graphs
        </Item></Link>
        <hr class="sidebar-divider my-0" color="grey" />
        {/* <Link to='./Demo'><Item bgColor='black'>
          <Icon><i className="fas fa-rss-square"/></Icon>
          Demo 
        </Item></Link> */}
        {/* <InputItem type='text' placeholder={'Search...'}/> */}
      </Sidebar>
    </div>
  )
};




export default SideBar
