import axios from "axios";
const API_URL= "http://localhost:3000/user/";

class AuthService {
  
  login(email, password) {
    return axios.post(`${API_URL}login`,   {
        email,
        password
      })
      .then(response => {
       const User=[response.data.email, response.data.fullName,response.data.password]
        if (response.data) {
          localStorage.setItem('user', JSON.stringify(User[0]));
          localStorage.setItem('name', JSON.stringify(User[1]));


        }

        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
    
  }
  getCurrentUserName() {
    return JSON.parse(localStorage.getItem('name'));
    
  }
}
export default new AuthService();