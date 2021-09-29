import axios from "axios";

// eslint-disable-next-line
export default {
    getUserList: function() {
      return axios.get('/api/user')
    },
    createUser: function (userData) {
      return axios.post('/api/user/register', userData)
    }, 
    loginUser: function (userData) {
      return axios.post('/api/user/login', userData)
    }
};