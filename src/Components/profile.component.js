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
      </div>
    );
  }
}

export default Profile 
