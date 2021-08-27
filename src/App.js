import {Home} from './Home'
import {Product} from './Product'
import {User} from './User'
import {ProductDetails} from './ProductDetails'
import {MyAccount} from './MyAccount'
import {BrowserRouter, Route, Switch,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App Container">
      <h3 className="d-flex justify-content-center m-3"> 
      React JS Frontend
      </h3>

      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item m-1">
          <NavLink className="btn btn-light btn-outline-primary" to="/home">
            Home
            </NavLink>

          </li>
          <li className="nav-item m-1">
          <NavLink className="btn btn-light btn-outline-primary" to="/product">
            Products
            </NavLink>

          </li>
          <li className="nav-item m-1">
          <NavLink className="btn btn-light btn-outline-primary" to="/myaccount">
            My Account
            </NavLink>

          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/user" component={User} />
        <Route path="/myaccount" component={MyAccount} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
