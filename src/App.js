import React, { Component } from "react"
import {Switch, Route, Link, Redirect } from "react-router-dom"
import AuthService from "./Services/AuthService"
import {Products} from './Pages/Products'
import {ProductDetails} from './Pages/ProductDetails'
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import AdminPage from "./Pages/AdminPage"
import NoAccess from "./Pages/NoAccess"
import Cart from "./Components/Cart"
// import NavBar from "./Components/NavBar"


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
      cartItems: null
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    const cart = JSON.parse(localStorage.getItem('cart'))
    

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.Role.includes("admin"),
        cartItems: cart
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard, cartItems } = this.state;

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
              <Link to={"/products"} className="nav-link">
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
                  Register
                </Link>
              </li>
            </div>
          )}
          {cartItems && (
            <div className="navbar-nav ml-auto">
              <button
          type="button"
          className=" mx-3 position-absolute top-50 end-0 translate-middle-y"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
           ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  class="bi bi-cart" viewBox="0 0 16 16">
           <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
         </svg></button>
                   
    
              </div>
            )
          }
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" > 
              {currentUser ? <Profile />: <Redirect to="/NoAccess" /> }
            </Route>
            <Route path="/admin"component={AdminPage}/>  
            <Route path ="/noaccess" component={NoAccess} />
            <Route path="/cart">
            {currentUser ? <Cart />: <Redirect to="/NoAccess" /> }
            </Route>  
            <Route exact path="/products" component={Products} />
            <Route path="/product/:id"  > 
              {currentUser ? <ProductDetails />: <Redirect to="/NoAccess" /> }
            </Route>

          </Switch>
        </div>
      </div>
      </div>
      </>
    );
  }
}

export default App;
