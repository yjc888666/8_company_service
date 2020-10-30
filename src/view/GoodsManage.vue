<template>
  <div>
    <a-tabs @change="callback">
      <a-tab-pane key="1" tab="展示中">
       <Show/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="下架商品" force-render>
        <Abandon/>
      </a-tab-pane>
     
    </a-tabs>
  </div>
</template>
<script>
import Show from '../components/goodmanage/Show'
import Abandon from '../components/goodmanage/Abandon'
export default {
  name:'goods',
  components:{
    Show,
    Abandon
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