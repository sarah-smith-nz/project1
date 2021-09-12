import React, { Component } from "react";
import AuthService from "../Services/auth-service";

export class Profile extends Component {
  constructor(props) {
    super(props);
console.log("ProfileProps:", props)
    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;
    console.log("CurrentUserProfile:", currentUser)

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.UserName}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.Token.substring(0, 20)} ...{" "}
          {currentUser.Token.substr(currentUser.Token.length - 20)}
        </p>
        
        {/* <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p> */}
        <strong>Authorities:</strong>{" "}
        {/* <ul> */}
          {currentUser.Role} 
          {/* &&
            currentUser.Role.map((role, index) => <li key={index}>{role}</li>)} */}
        {/* </ul> */}
        <div>
          <h4>My Account</h4>

        <table className='table'>
      <thead className='thead-light'>
  <tr>
    <th scope="col">Event</th>
    <th scope="col">Item</th>
    <th scope="col">Date</th>
    <th scope="col">Tokens</th>
    <th scope="col">Token Balance</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Opening Balance</td>
    <td></td>
    <td>21/08/2021</td>
    <td></td>
    <td>{currentUser.To}</td>

    
    
  </tr>
  <tr>
    <td>Order</td>
    <td>Zoo Pass</td>
    <td>21/08/2021</td>
    <td>33</td>
    <td>267</td>

    
  </tr>
  <tr>
    <td>Closing Balance</td>
    <td></td>
    <td>21/08/2021</td>
    <td></td>
    <td>267</td>
  </tr>
  

  </tbody>
  </table>
  </div>
      </div>
    );
  }
}

export default Profile 
