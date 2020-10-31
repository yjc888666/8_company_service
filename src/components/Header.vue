<template>
   <a-page-header
    style="border: 1px solid rgb(235, 237, 240);minWidth:600px"
    title="8号企服管理后台"
  >
  <template v-slot:extra>
   
    
      <!-- <div class="name"></div> -->
      <a-avatar size="large" src="../src/assets/default.png">
        <template v-slot:icon><UserOutlined />
        
        </template>
   
      </a-avatar>
      <a-badge :count="100">
    
       </a-badge>
      {{userData.username}}
   <span class="center">hahah</span>
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

<style lang="less" scoped>
 .center {
   display: inline-block;
   margin: 0 10px;
 }
 /deep/.ant-page-header-heading-extra{
   text-align: center;
   display: flex;
   align-items: center;
   .ant-avatar{
     margin-right: 0;
   }
   .ant-badge{
     margin-bottom: auto;
     margin-left: auto;
     margin-left: -10px;
   }
 }
:global(.ant-page-header-heading){
    min-width: 600px;
    max-height: 40px;
}
/* .ant-page-header-heading {
   min-width: 600px;
} */
</style>