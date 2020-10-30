import axios from 'axios';
import { options } from 'less';

//封装post请求的函数
function axiosPost(options){
  axios({
    url:options.url,
    method:'post',
    header:{
      "Content-Type":"application/x-www-form-urlencoded"
    },
    data:{
      ...options.data
    }
  })
  .then(res=>{
    options.success(res.data);
  })
  .catch(err=>{
    options.error(err)
  })
}

//封装get请求函数
function axiosGet(options){
  axios(options.url)
  .then(res=>{
    options.success(res.data);
  })
  .catch(err=>{
    options.error(err)
  })
}

export {
  axiosGet,
  axiosPost
}