<template>
  <div>
     <a-tabs @change="callback">
      <a-tab-pane key="1" tab="banner广告">
        <BannerAd/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import BannerAd from '../components/bannerAd/BannerAd'
export default {
 name:'AdManage',
 components:{
   BannerAd
 },
  setup(){
    let callback=(key)=>{
       console.log(key);
    }
    return  {
      callback
    }
  }
}
</script>

<style>

</style>