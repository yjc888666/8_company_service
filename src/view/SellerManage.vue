<template>
  <div>
    <a-tabs @change="callback">
      <a-tab-pane key="1" tab="店铺列表">
       <SellerList/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="入驻申请" force-render>
      <Application/>
      </a-tab-pane>
      <a-tab-pane key="3" tab="审核不通过" force-render>
        <Refuse/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import SellerList from '../components/seller/SellerList'
import Application from '../components/seller/Application'
import Refuse from '../components/seller/Refuse'

export default {
  name:'seller',
  components:{
    SellerList,
    Application,
    Refuse

  },
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },

};
</script>