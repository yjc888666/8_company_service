<template>
  <div id="app">
    <!-- <HomePage/> -->
    <router-view>
    </router-view>
  </div>
</template>

<script>
  //  import{useRouter} from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// import HomePage from './view/HomePage.vue'
export default {
 name:'App',
 components:{
  // HomePage
 },
  setup(){
    // const router=useRouter();
    // router.push('/')
  }
}
</script>

<style lang="less" >
   #app{
     width: 100%;
     
   }
</style>