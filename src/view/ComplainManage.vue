<template>
  <div>
    <a-tabs @change="callback">
      <a-tab-pane key="1" tab="投诉申请">
        <router-view></router-view>
      </a-tab-pane>
      <a-tab-pane key="2" tab="已处理" force-render>
      <DealedList/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import ComplainApplication from '../components/complain/ComplainApplication'
import DealedList from '../components/complain/DealedList'
 import {useRouter} from 'vue-router'
import { onMounted } from 'vue'
export default {
   name:'complainManage',
   components:{
     ComplainApplication,
     DealedList
   },
   setup(){
     const router=useRouter();
    //  onMounted(()=>{
    //     router.push('/application')
    //  })
        router.push('/application')
     return {
     
     }
   }
}
</script>

<style>

</style>