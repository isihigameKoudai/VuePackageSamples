import axios from 'axios';

const API_URL = "https://qiita.com";

export default {
  request(method,path,params) {
    const url = API_URL + path + params;

    const error = () => {
      console.log("エラー");
    };

    // Execute request api changed by request method.
    switch (method) {
      case "post":
        return axios.post(url,{params}).catch(error);
        break;
      case "get":
        return axios.get(url,{params}).catch(error);
        break;
      default:
        break;
    }
  },
  post(path,params) {
    return this,this.request("post",path,params)
  },
  get(path, params) {
    const paramaters = params ? params : '';
    return this.request("get",path,paramaters);
  }
};
