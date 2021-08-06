import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditUser from "./EditUser";
import {Redirect} from 'react-router-dom';
import {Progress} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Sidebar } from 'react-sidebar-ui';
import SidebarClass from './SideBar'
import './css/in.css'

 class Home extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        };
    }

    componentDidMount(){
    }
  

    render() {
      return (
        
    <div>
      <div class="container-fluid">
    <div class="row">
    <div class="col-md-2 col-xs-5 orange">
        

         <SidebarClass/></div>
         <div class="col-md-10 col-xs-7 green">
             
             {/* //Card - 1 */}
             <br/><br/>
             <div class="card text-black bg-light mb-3">
                   <div class="card-header">Projects List</div>
                   <div class="card-body">  </div></div>

              {/* //Card - 2 */}
               <br/>
               <div class="card text-black bg-light mb-3">
                   <div class="card-header">Projects List</div>
                   <div class="card-body" ></div></div>
                  
                {/* card-3 */}
           <div class = "row">

               <div class="col-md-6">
                  <div class="card text-black bg-light mb-3">
                   <div class="card-header">Login</div>
                   <div class="card-body"> 
                   <div class="form-group">
                      <label for="inputEmail">Email</label>
                      <input type="email" class="form-control" id="inputEmail" placeholder="Email"/>
                  </div>
                              <div class="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                </div>
                        <div class="form-group">
                <label class="form-check-label"><input type="checkbox"/> Remember me</label>
            </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
                    </div> </div></div>




                    <div class="col-md-6 ">
                   <div class="card text-black bg-light mb-3">
                   <div class="card-header">Sign up</div>
                   <div class="card-body"> 
                  
                   <div class="form-group">
                      <label for="inputEmail">UserName</label>
                      <input type="email" class="form-control" id="inputEmail" placeholder="UserName"/>
                  </div>
                  <div class="form-group">
                      <label for="inputEmail">Email</label>
                      <input type="email" class="form-control" id="inputEmail" placeholder="Email"/>
                  </div>
                  <div class="form-group">
                      <label for="inputEmail">Password</label>
                      <input type="email" class="form-control" id="inputEmail" placeholder="Password"/>
                  </div>
                              <div class="form-group">
                    <label class="form-check-label"><input type="checkbox"/> Remember me</label>
                </div>
                  <button type="submit" class="btn btn-primary">Sign in</button>
        
               </div></div>
                </div></div>  


             {/* card-4       */}

         
     

            
                   
          </div>
     </div>
   </div>
   </div>
   
      );
    }
  }


  export default Home;
