<template>
  <div>
    <a-tabs @change="callback">
      <a-tab-pane key="1" tab="商品推广">
        <GoodPush></GoodPush>
      </a-tab-pane>
      <a-tab-pane key="2" tab="申请推广" force-render>
      <ApplicationPush></ApplicationPush>
      </a-tab-pane>
      <a-tab-pane key="3" tab="拒绝申请" force-render>
      <RefuseApplication></RefuseApplication>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import GoodPush from '../components/goodpush/GoodPush'
import ApplicationPush from '../components/goodpush/ApplicationPush'
import RefuseApplication from '../components/goodpush/RefuseApplication'
export default {
  name:'goodsPromotion',
  components:{
    GoodPush,
    ApplicationPush,
    RefuseApplication
  },
   setup(){
     let callback=(key)=>{
       console.log(key)
     }
   }

};
</script>