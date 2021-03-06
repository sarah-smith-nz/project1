import axios from 'axios'
import {API} from './API'

const API_URL = API.API_URL

class UserService {
  deleteUser(id) {
    const user = JSON.parse(localStorage.getItem('user'));;
    const token = user.Token
    const headers = { 
      "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`   
      };
  return axios.delete(API_URL + "user/" + id, { headers }) 
  }

  getEditUser(username) {
    const user = JSON.parse(localStorage.getItem('user'));;
    const token = user.Token
    const headers = { 
      "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`   
      };
    return axios.get(API_URL + "user/" + username, { headers }) 
  }

  updateUser(editedUser) {
    const user = JSON.parse(localStorage.getItem('user'));;
    const token = user.Token
    const headers = { 
      "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`   
      };
  return axios.put(API_URL + "user", editedUser, { 
    headers
  }) 
  }

 

 
}

export default new UserService();