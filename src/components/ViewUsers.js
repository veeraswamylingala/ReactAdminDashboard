import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditUser from "./EditUser";
import {Redirect} from 'react-router-dom';
import { Sidebar } from 'react-sidebar-ui';
import SidebarClass from './SideBar';

 class ViewUsers extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          message: 'Hello!',
          data:null,
        
        };
      // This line is important!
      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users/').
        then((res)=>{
            console.log(res.data.length)
            this.setState({
                data:res.data
            })

                console.log(this.state.data[0].company)
        
        });
    }
  
    handleClick = e => {
        console.log(e.name)
   // return  <Redirect  to="/EditUser/" />
    }
  
    render() {
      // Because `this.handleClick` is bound, we can use it as an event handler.
      return (
        <div>
        <div class="container-fluid">
      <div class="row">
     
        <div class="col-md-12 col-xs-7 green">
        {/* <button onClick={this.handleClick}>
           HI  USER!
        </button><br/>   */}
        <h2>Users</h2>
         
      {this.state.data ?  <table  class="table table-bordered">
            
            <th scope="col">ID</th>
         <th scope="col" >NAME</th>
         <th scope="col">USERNAME</th>
         <th scope="col">EMAIL</th>    
         <th scope="col">PHONENUMBER</th>
         <th scope="col">WEBSITE</th>  
         <th scope="col">EDIT</th>   
       
           
     {this.state.data.map((user,i)=>{

         return (<tr>
         <td>{user.id}</td>
         <td>{user.name}</td>
         <td>{user.username}</td>
         <td>{user.email}</td>    
         <td>{user.phone}</td>
         <td>{user.website}</td>    
         <td><Link to={{pathname:'./EditUser',state:user}}>
         <button  className="btn btn-secondary btn-sm"  onClick={() => this.handleClick(user)}>Edit</button>
           </Link></td>
         </tr>)
     })}
     </table>   : ""}
        </div></div></div></div>
      );
    }
  }
  export default ViewUsers;
