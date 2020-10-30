<template>
   <a-page-header
    style="border: 1px solid rgb(235, 237, 240);minWidth:600px"
    title="8号企服管理后台"
  >
  <template v-slot:extra>
    
    <a-badge :count="100">
       </a-badge>
      <!-- <div class="name"></div> -->
      <a-avatar size="large" src="../../src/assets/default.png">
        <template v-slot:icon><UserOutlined />
        
        </template>
   
      </a-avatar>
      {{userData.username}}
  </template>
  </a-page-header>
</template>

<script>
import { UserOutlined } from '@ant-design/icons-vue';
export default {
  name:"Header",
  props:{
    userData:Object
  },
  components:{
   UserOutlined
  },
  setup(){
    
  }
}
</script>

<style scoped>

:global(.ant-page-header-heading){
    min-width: 600px;
    max-height: 40px;
}
/* .ant-page-header-heading {
   min-width: 600px;
} */
</style>