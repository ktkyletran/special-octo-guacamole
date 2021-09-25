import axios from "axios";

export default {
    getUserList: function() {
      return axios.get('/api/user')
    }
};