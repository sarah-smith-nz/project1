import React, { Component } from "react";

// import UserService from "../Services/auth-service";

export class UserPageTBC extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     content: ""
  //   };
  // }

  // componentDidMount() {
  //   UserService.getUserBoard().then(
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
          <h3>This is User Component</h3>
        </header>
        <div>
        <table className='table'>
      <thead>
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
    <td>300</td>

    
    
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

export default UserPageTBC