import axios from "axios";

const API_URL = "https://localhost:44396/api/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "user/login", {
        username,
        password
      })
      .then(response => {
        console.log("AuthService:", response)

        if (response.data.Token) { 
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log("JWT  local:", localStorage)
        }

        return (
          response.data 
        )          
      });
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
    
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();