import React, { Component } from "react";
import {Switch, Route, Link } from "react-router-dom";
import AuthService from "./Services/AuthService";
import {Product} from './Pages/Products'
import {ProductDetails} from './Pages/ProductDetails'
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import AdminPage from "./Pages/AdminPage";
import NoAccess from "./Pages/NoAccess";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.Role.includes("admin"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

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
           
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
        
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.UserName} Profile
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
             <Route path="/admin"component={AdminPage}/>  
            <Route path ="/noaccess" component={NoAccess} />
            <Route exact path="/product" component={Product} />
            <Route path="/product/:id" component={ProductDetails} />  
          </Switch>
        </div>
      </div>
      </div>
      </>
    );
  }
}

export default App;
