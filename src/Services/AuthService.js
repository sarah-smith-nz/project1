import axios from "axios";
import authHeader from './AuthHeader';
import {API} from './API'
import { Redirect } from "react-router";

const API_URL = API.API_URL

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "user/login", {
        username,
        password
      })
      .then(response => {

        if (response.data.Token) { 
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log("JWT  local:", localStorage)
        }

        return (
          response.data 
        )          
      })
      .catch(error => {
        alert("User name or password is incorrect" );
        console.error('There was an error!', error);
    });;
  }

  logout() {
    localStorage.removeItem("user","cart");
  }

  register(firstname, lastname, username, password) {
    return axios.post(API_URL + "user/register", {
      firstname, 
      lastname,
      username,
      password
    })    
  }

  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user.Token.exp * 1000 < Date.now()) {
      localStorage.removeItem("user","cart");
    <Redirect to="/login" />  }
    return user

  }

  getAdminBoard() {   
    return axios.get(API_URL + 'user/admin', { headers: authHeader() });
  }
  
}

export default new AuthService();