
// import store from '../store/index'
import {login} from './request'
// import{useRouter} from 'vue-router'
export default async (store,info)=>{
  let data=null;
  data=await login(info)
  if(data.status==true){
    store.commit('setStatus',data.status);
    console.log(data)
    //  return;
    let res=data.data;
  console.log(res)
  store.commit('setData',res)
  console.log(store.state.userData);
    return data.status
  }
}