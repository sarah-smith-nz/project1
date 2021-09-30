import React, { useState, useEffect } from "react"
import {Switch, Route, Redirect } from "react-router-dom"
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
import NavBar from "./Components/NavBar"


function App () {
  const [currentUser, setCurrentUser] = useState(undefined)
  
  useEffect(() =>{
    const user = AuthService.getCurrentUser();
    if (user) {  
        setCurrentUser(user)
    }
  }, [])

return(
  <>
  <NavBar />
  

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
        </>
        )}


export default App;
