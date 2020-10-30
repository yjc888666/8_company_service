<template>
  <div>
    <a-tabs @change="callback">
      <a-tab-pane key="1" tab="帖子列表">
        <InvitationList/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="下架帖子" force-render>
       <InvitationAbandon/>
      </a-tab-pane>
     
    </a-tabs>
  </div>
</template>
<script>
import InvitationList from '../components/invitation/InvitationList'
import InvitationAbandon from '../components/invitation/InvitationAbandon'
export default {
  name:'invitation',
  components:{
   InvitationList,
   InvitationAbandon
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