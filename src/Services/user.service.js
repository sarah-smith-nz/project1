import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:44396/api/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return 
    // (
    //   <div>
    //     This is the Admin Board
    //   </div>
    // )
    // return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();