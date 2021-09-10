import React, { Component } from "react";
import {Switch, Route, Link } from "react-router-dom";

import AuthService from "./Services/auth-service";

import {Product} from './Product'
// import {User} from './User'
import {ProductDetails} from './ProductDetails'
import {MyAccount} from './MyAccount'
import Login from "./Components/login.component";
import Register from "./Components/register.component";
import Home from "./Home";
import Profile from "./Components/profile.component";
import BoardUser from "./Pages/board-user.component";
import BoardModerator from "./Pages/board-moderator.component";
import BoardAdmin from "./Pages/board-admin.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    console.log("App componentDidMount:", user)

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.Role.includes("Guest"),
        showAdminBoard: user.Role.includes("admin"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
<>
      <div>
      <div className="App Container">
       <h3 className="d-flex justify-content-center m-3"> 
       React JS Frontend
       </h3>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Project 1
          </Link>

          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/product"} className="nav-link">
                Products
              </Link>
            </li>
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/home" component={Home} />
            <Route exact path="/product" component={Product} />
            <Route path="/product/:id" component={ProductDetails} />  
            <Route path="/myaccount" component={MyAccount} />
          </Switch>
        </div>
      </div>
      </div>
      </>
    );
  }
}

export default App;
