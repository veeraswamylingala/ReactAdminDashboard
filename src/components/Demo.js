import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditUser from "./EditUser";
import {Redirect} from 'react-router-dom';
import { Sidebar } from 'react-sidebar-ui';
import SidebarClass from './SideBar';
import {
    HubConnectionBuilder,
    HubConnectionState,
    HubConnection,
  } from '@microsoft/signalr';

 class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          message: 'Hello!',
          data:null,
          value :0.1,
        
        };
      // This line is important!
      // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        // callPost();
        const connection = new HubConnectionBuilder()
        .withUrl('https://localhost:5001/scrumboardhub')
        .withAutomaticReconnect()
        .build();
            connection.on("send", data => {
            console.log(data);
            this.setState({
                value:data
            })
            });

    connection.start()
        .then(() => connection.invoke("send", "Hello"));
    }
  

    callPost(){
        var staticExpression = "val=6.5;$if(_HTR_1A == 1)${$val = val + 1;$if(val >= 100)$val = 0;$return val;$}$else${$val = _DTms_0003+val;$return val;$}$;";
     axios({
        method: 'post',
        url: "http://localhost:85/api/ExpressionEval/GetExprVal",
        headers: {}, 
        data: {
          tagname:staticExpression, // This is the body part
        }
      }).then((res)=>{
          console.log(res)  
      });
    }
  

    render() {
      // Because `this.handleClick` is bound, we can use it as an event handler.
      return (
        <div><center>
            <h1>{this.state.value}</h1></center>
       </div>
      );
    }
  }
  export default Demo;
