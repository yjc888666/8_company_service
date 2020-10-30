<template>
<div class="home">
    <Header :userData="userData"></Header>
     <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed"  collapsible 
    :style="{height:'92.4vh',miniHeight:'1000px'} "
    :theme="theme" 
    >
      <!-- <div class="logo" /> -->
      <div class="logo1" >
        <a-switch
      default-checked
      checked-children="dark"
      un-checked-children="light"
      @change="changeTheme"
       />
         </div>
          
      <a-menu :theme="theme" mode="inline" v-model:selectedKeys="keys.selecctedKeys">
        <a-menu-item key="1">
          <user-outlined />
          <span>首页</span>
           <router-link to='/homePage' ></router-link>
        </a-menu-item>
       <a-sub-menu key="group1">
        <template v-slot:title>
          <span><video-camera-outlined/><span>广告管理</span></span>
        </template>
        <a-menu-item key="3"><router-link to='/admanage' tag='div'>banner广告</router-link></a-menu-item>
        <a-menu-item key="4"><router-link to='/goodsPromotion' tag='div'>商品推广</router-link></a-menu-item>
      </a-sub-menu>
         
        <a-sub-menu key="group2">
        <template v-slot:title>
          <span><upload-outlined/><span>商品管理</span></span>
        </template>
        <a-menu-item key="6" > <router-link to='/goods' tag='div'>商品管理</router-link></a-menu-item>
      </a-sub-menu>

       <a-sub-menu key="group3">
        <template v-slot:title>
          <span><SettingOutlined /><span>商家管理</span></span>
        </template>
        <a-menu-item key="9"><router-link to='/seller' tag='div'>商家审核</router-link></a-menu-item>
      </a-sub-menu>

   
         <a-menu-item key="10">
          <upload-outlined />
          <span>帖子管理</span>
          <router-link to='/invitation' tag='div'></router-link>
        </a-menu-item>
         <a-menu-item key="11">
          <upload-outlined />
          <span>投诉管理</span>
          <router-link to='/application' tag='div'></router-link>
        </a-menu-item>
        
      </a-menu>
    </a-layout-sider>
    <a-layout>
        
      <a-layout-content
        :style="{ margin: '0px 16px', padding: '20px 50px', background: '#fff', miniHeight:'200px' }"
      >
    <router-view >

    </router-view>
    
      </a-layout-content>
       <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
   
  </a-layout>
   </div>
 
</template>

<script>
import Header from './Header.vue';
import {ref,reactive,onMounted,computed} from 'vue';
import {useStore} from 'vuex';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
   SettingOutlined
} from '@ant-design/icons-vue';

export default {
  name: 'Home',
  components:{
    Header,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
   SettingOutlined
  },
  setup(){
    
    //从store中拿到登录人的信息
    const store=useStore(),
          state=store.state;
    console.log(state)

    let keys=reactive({
      selecctedKeys:['1']
    });
    let theme=ref('dark')
    let changeTheme=(checked)=>{
      theme.value=checked?'dark':'light';
    }
    let collapsed=ref(false);
    return {
       keys,
      collapsed,
      theme,
       changeTheme,
       userData:computed(()=>state.userData)
    }
  }
}
</script>
<style >

.logo1{
   margin: 10%;
  text-align: right;
  color: #fff;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 10%;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  text-align: center;
  line-height: 32px;
  color: #fff ;
  font-weight: bold;
}
</style>
