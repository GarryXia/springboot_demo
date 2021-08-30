import axios from "axios";
import store from "../store";

const CancelToken = axios.CancelToken;
var cancel;
var service = axios.create({
  baseURL:process.env.BASE_API,
  timeout: 6000
});

// 添加请求拦截器
service.interceptors.request.use(function(config){
  if (store.getters.token){
    config.headers['TOKEN']=getCookie('TOKEN')
  }
  return config;
},
function(error){
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function(response){
  return response
},
function(error){
  console.warn('err:'+error);
  return Promise.reject(error);
});

export default{
  // get
  get(url, param) {
    return new Promise((resolve, reject) => {
      service({
        method: 'get',
        url: url,
        params: param,
        cancelToken: new CancelToken(c => {
          cancel = c;
        }),
      })
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        console.warn(error);
      });
    });
  },

  // post
  post(url, param) {
    return new Promise((resolve, reject) => {
      service({
        method: 'post',
        url: url,
        params: param,
        cancelToken: new CancelToken(c => {
          cancel = c;
        }),
      })
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        console.warn(error);
      });
    });
  }
}