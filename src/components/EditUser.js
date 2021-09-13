import React from 'react';
import SidebarClass from './SideBar';

 class EditUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          user:{}
      };
    }

    componentDidMount(){
        
        this.setState({
            user:this.props.location.state
        }, () => {
            console.log(this.state.user.name)
        });
    }
  
    handleChange = event => {
      console.log(event.target.value)
      this.setState({user:{
        ...this.state.user,
        name:event.target.value,
    }});
        // this.setState({ username: event.target.value });
     };


     handleClick = event => {
      //  this.setState({ username: event.target.value });
     };
  
    render() {
      // Because `this.handleClick` is bound, we can use it as an event handler.
      return (
        <div>
        <div class="container-fluid">
      <div class="row">
    
        <div class="col-md-12 col-xs-7 ">
        <br></br><br></br>
       <div class="card text-black bg-light mb-3">
  <div class="card-header">Update User</div>
  <div class="card-body">
    {/* <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
       <div class = "row">
        
         <div class="col-md-6 text-center" >
        <input type="text" name="username" value={this.state.user.name} onChange={this.handleChange}  /> <br/>
          <input type="text" name="email" value={this.state.user.email} onChange={this.handleChange}  /> <br/>
          </div>

          <div class="col-md-6 text-center" >
          <input type="text" name="phoneNumber" value={this.state.user.phone} onChange={this.handleChange}  /> <br/>
           <input type="text" name="Website" value={this.state.user.website} onChange={this.handleChange}  /><br/> 
        
            <button  className="btn btn-secondary btn-lr"  onClick={() => this.handleClick()}>Update</button></div>
  </div></div>
</div></div></div></div></div>
       



      );
    }
  }
  export default EditUser;


   {/* // <div>
        //     <center>
        //         <h2>User Update</h2>
        //     <input type="text" name="username"value={this.state.user.name} onChange={this.handleChange}  /> <br/>
        //     <input type="text" name="email"value={this.state.user.email} onChange={this.handleChange}  /> <br/>
        //     <input type="text" name="phoneNumber"value={this.state.user.phone} onChange={this.handleChange}  /> <br/>
        //     <input type="text" name="Website"value={this.state.user.website} onChange={this.handleChange}  /><br/> 
        //     <button  className="btn btn-secondary btn-sm"  onClick={() => this.handleClick()}>Update</button>
     
        //     </center>
        // </div> */}