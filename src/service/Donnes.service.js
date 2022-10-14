import axios from "axios";
const API_URL= "http://localhost:3000/donnee/";




class DataService{

    getAllData() {
        return axios.get(API_URL)
      }
    
    getOneData(ts){
      return axios.get(API_URL+ts);
    }

    


}
export default new DataService();

