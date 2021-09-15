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
    return JSON.parse(localStorage.getItem('user'));;
  }

  deleteUser(id) {
    const user = JSON.parse(localStorage.getItem('user'));;
    const token = user.Token
    const headers = { 
      "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`   
      };
  return axios.delete(API_URL + "user/" + id, { headers }) 
  }


  editUser( userid, firstname, lastname, username, userbalance, password, role) {
    const user = JSON.parse(localStorage.getItem('user'));;
    const token = user.Token
    const headers = { 
      "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`   
      };
  return axios.put(API_URL + "user", { 
    headers,
    userid,
    firstname, 
    lastname,
    username,
    userbalance,
    password,
    role
  }) 
  }
 


  
}

export default new AuthService();