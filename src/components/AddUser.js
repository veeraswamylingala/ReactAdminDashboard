import React from 'react';
import SidebarClass from './SideBar';

 class AddUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          user:{
          email:"",
          firstname:"",
          lastname:"",
          phoneNumbe:"",
          website:""
          },

          usererror:{
            email:null,
            firstname:null,
            lastname:null,
            phoneNumbe:null,
            website:null
          }
      };
    }

    componentDidMount(){
        // this.setState({
        //     user:this.props.location.state
        // }, () => {
        //     console.log(this.state.user.name)
        // });
    }
  
    handleChange = event => {
      console.log(event.target.value)
      this.setState({user:{
        ...this.state.user,
        name:event.target.value,
    }});
        this.setState({ username: event.target.value });
     };


     handleClick = event => {
     
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
  <div class="card-header">Add User</div>
  <div class="card-body">
    {/* <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
       <div class = "row">
        
         <div class="col-md-4 " >
         <div class="form-group">
                      <label for="inputEmail">UserName</label>
                      <input type="email" class="form-control" id="inputEmail" placeholder="Name"/>
                  </div>
                  <div class="form-group">
                      <label for="inputEmail">Email</label>
                      <input type="email" class="form-control" id="inputEmail" placeholder="@gmail.com"/>
                  </div>
       
          </div>
          <div class="col-md-4 " >
          <div class="form-group">
                      <label for="inputEmail">FirstName</label>
                      <input type="email" class="form-control" id="inputEmail" placeholder="First"/>
                  </div>
                  <div class="form-group">
                      <label for="inputEmail">LastName</label>
                      <input type="email" class="form-control" id="inputEmail" placeholder="Last"/>
                  </div>
          </div>
          

          <div class="col-md-4 " >
          <div class="form-group">
                      <label for="inputEmail">PhoneNumber*</label>
                      <input type="email" class="form-control" id="inputEmail" placeholder="8196******"/>
                  </div>
                  <div class="form-group">
                      <label for="inputEmail">Website</label>
                      <input type="email" class="form-control" id="inputEmail" placeholder="*******.com"/>
                  </div>
           <div class="d-grid gap-2 col-6 mx-auto">
         <button class="btn btn-primary" onClick={() => this.handleClick()} type="button">Add User</button></div>
        
           </div>
  </div></div>
</div></div></div></div></div>
       
      );
    }
  }
  export default AddUser;


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