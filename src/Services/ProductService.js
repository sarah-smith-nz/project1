import axios from 'axios'
import {API} from './API'

const API_URL = API.API_URL

class UserService {
  deleteProduct(ProductId) {
    const user = JSON.parse(localStorage.getItem('user'));;
    const token = user.Token
    const headers = { 
      "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`   
      };
  return axios.delete(API_URL + "product/" + ProductId, { headers }) 
  }

  getEditedProduct(ProductId) {
    const user = JSON.parse(localStorage.getItem('user'));;
    const token = user.Token
    const headers = { 
      "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`   
      };
    return axios.get(API_URL + "product/" + ProductId, { headers }) 
  }

  updateProduct(editedProduct) {
    const user = JSON.parse(localStorage.getItem('user'));;
    const token = user.Token
    const headers = { 
      "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`   
      };
  return axios.put(API_URL + "product", editedProduct, { 
    headers
  }) 
  }

 

 
}

export default new UserService();