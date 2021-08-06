import React from 'react'
import {Route, Switch ,Router} from "react-router-dom";
import EditUser from './EditUser';
import FileUpload from "./AddXml";
import Home from "./Home"
// import Roster from './Roster'
// import Schedule from './Schedule'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
    <Route path='/' component={Home}/>
    </Switch>
  </main>
)

export default Main
