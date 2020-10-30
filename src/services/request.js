// import { reject, resolve } from 'core-js/fn/promise'
// import { reject, resolve } from 'core-js/fn/promise';
import {axiosPost} from '../libs/http'

//封装登录请求的函数
function login(info){
   return new Promise((resolve,reject)=>{
     axiosPost({
       url:"/api/login",
       data:{
         ...info
       },
       success(data){
         resolve(data)
       },
       error(err){
         reject(err);
       }
     })
   })
}

//封装请求商家列表数据的函数
function getSellerList(){
    return new Promise((resolve,reject)=>{
      axiosPost({
        url:'/api/getSellerList',
        success(data){
        resolve(data)
      },
      error(err){
        reject(err);
      }
    })
  })
}
export{
  login,
  getSellerList
}