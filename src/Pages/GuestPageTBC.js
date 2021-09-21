import React, { Component } from "react";

// import UserService from "../Services/auth-service";

export class GuestPageTBC extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     content: ""
  //   };
  // }

  // componentDidMount() {
  //   UserService.getModeratorBoard().then(
  //     response => {
  //       this.setState({
  //         content: response.data
  //       });
  //     },
  //     error => {
  //       this.setState({
  //         content:
  //           (error.response &&
  //             error.response.data &&
  //             error.response.data.message) ||
  //           error.message ||
  //           error.toString()
  //       });
  //     }
  //   );
  // }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          {/* <h3>{this.state.content}</h3> */}
          <h3>This is Moderator or Guest Page</h3>
        </header>
      </div>
    );
  }
}

export default GuestPageTBC
