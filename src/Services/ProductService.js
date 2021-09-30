import axios from 'axios'
import {API} from './API'

const API_URL = API.API_URL

class ProductService {
  deleteProduct(id) {
    const user = JSON.parse(localStorage.getItem('user'));;
    const token = user.Token
    const headers = { 
      "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`   
      };
  return axios.delete(API_URL + "product/" + id, { headers }) 
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

  addNewProduct(newProduct) {
    const user = JSON.parse(localStorage.getItem('user'));;
    const token = user.Token
    const headers = { 
      "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`   
      };
    return axios.post(API_URL + "product", newProduct, {
      headers
    })    
  }

 

 
}

export default new ProductService();