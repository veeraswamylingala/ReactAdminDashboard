import Sidebar from './SideBar';
import Main from './Main';
import  ViewUsers from './ViewUsers';
import EditUser from  './EditUser';
import AddXml from './AddXml';
import AddUser from "./AddUser";
import Demo from './Demo'
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './NavBar';


function App() {
  return (
    <div>
    <Router>
    <NavBar/> 
    {/* <Sidebar /> */}
  
    <Route exact path='/' component={Home}/>
    <Route exact path='/EditUser' component={EditUser}/>
     <Route exact path='/ViewUsers' component={ViewUsers}/>
     <Route exact path='/AddXml' component={AddXml}/>
     <Route exact path='/AddUser' component={AddUser}/>
     <Route exact path='/Demo' component={Demo}/>

    </Router>

  </div>
  );
}

export default App;
