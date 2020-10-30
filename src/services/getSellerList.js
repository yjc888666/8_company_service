import {getSellerList} from './request'
// import{useRouter} from 'vue-router'
export default async (store)=>{
  let data=null;
  data=await getSellerList()
  if(data.status==true){
    store.commit('setStatus',data.status);
    console.log(data)
    //  return;
    let res=data.data;
  console.log(res)
  store.commit('setData',res)
  console.log(store.state.sellerList);
    return data.status
  }
}