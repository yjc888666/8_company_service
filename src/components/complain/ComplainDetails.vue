<template>
<div>
  <div class="header">
    <a-button type="link" @click="submit">
      &lt;-投诉申请详情
   </a-button>
  </div>
   <div class="flex">
 <a-descriptions title="商品信息" bordered :column=2>
    <a-descriptions-item label="商品图片">
      img
    </a-descriptions-item>
    <a-descriptions-item label="商品标题">
      Prepaid
    </a-descriptions-item>
    
    <a-descriptions-item label="商品价格">
      2018-04-24 18:00:00
    </a-descriptions-item>
    <a-descriptions-item label="商品分类" >
      2019-04-24 18:00:00
    </a-descriptions-item>
    <a-descriptions-item label="服务区域">
      <a-badge status="processing" text="Running" />
    </a-descriptions-item>
    <a-descriptions-item label="商品状态">
      $80.00
    </a-descriptions-item>
    <a-descriptions-item label="商家名称">
      $20.00
    </a-descriptions-item>
    <a-descriptions-item label="商家地址">
      $60.00
    </a-descriptions-item>
     <a-descriptions-item label="联系人">
      $60.00
    </a-descriptions-item>
     <a-descriptions-item label="联系方式">
      $60.00
    </a-descriptions-item>
  
  </a-descriptions>
  
  <a-descriptions title="投诉信息" bordered :column=2>
    <a-descriptions-item label="投诉人">
      img
    </a-descriptions-item>
    <a-descriptions-item label="联系方式">
      Prepaid
    </a-descriptions-item>
    
    <a-descriptions-item label="投诉类型">
     haha
    </a-descriptions-item>
    <a-descriptions-item label="投诉时间" >
      2019-04-24 18:00:00
    </a-descriptions-item>
    <a-descriptions-item label="投诉理由" :span="3">
      <a-badge status="processing" text="Running" />
    </a-descriptions-item>
    <a-descriptions-item label="上传证据" :span="3">
      $80.00
      <br/>
      <br/>
      <br/>
    
    
    </a-descriptions-item>
  </a-descriptions>
</div>
<div class="deal">
   <a-descriptions title="投诉处理" bordered :column=1>
    <a-descriptions-item label="备注">
      img
    </a-descriptions-item>
    <a-descriptions-item label="结果说明">
      Prepaid
    </a-descriptions-item>
    
    <a-descriptions-item label="处置结果">
      <a-radio-group v-model:value="value" @change="onChange">
      <a-radio :value="1">
        已解决
      </a-radio>
      <a-radio :value="2">
        未解决
      </a-radio>
      <a-radio :value="3">
        强制下架
      </a-radio>
    </a-radio-group>
    </a-descriptions-item>

  
  </a-descriptions>
  </div>
  <div class="button">
    <button class="btn" @click="submit">
      确认提交
    </button>
  </div>
</div>

</template>

<script>
import{ref,reactive,toRefs} from 'vue'
import {useRouter} from 'vue-router'
export default {
 name:'details',
 setup(){
   const router=useRouter();
   let state=reactive({
     value:1
   })
   const onChange=(e)=> {
      console.log('radio checked', e.target.value);
    },
     //提交投诉详情
      submit=()=>{
        router.push('/application');
      };
   return {
     ...toRefs(state),
     onChange,
     submit
   }
 }
  
}
</script>

<style scoped>
.header {
  padding-bottom: 10px;
}
.ant-btn-link{
  color:#6d6c6c ;
}
.ant-btn-link:hover{
  color: #1890ff ;
}
.ant-btn-link:visited{
  color: #1890ff;
}
.ant-descriptions-view{
  border-radius: 10px;
}
.flex{
  display: flex;
  padding: 10px;
  justify-content: space-between;
  /* background: rgba(190, 186, 186, 0.1); */
  border: 1px dotted rgba(190, 186, 186, 0.5) ;
  border-radius: 10px;
}
.deal{
  margin-top:10px ;
  padding: 10px;
  border: 1px dotted rgba(190, 186, 186, 0.5) ;
  border-radius: 10px;
}
.button{
  padding-top: 20px;
   width: 30%;
   margin: 0 auto;
   text-align: center;
}
.button .btn {
  height: 30px;
  text-align: center;
  background: none;
  border-radius: 5px;
  border: 1px dotted  rgba(190, 186, 186, 1);
}
.button .btn:hover {
  color: #1890ff;
   border: 1px dotted  #1890ff;
}
.button .btn:visited {
  color: #1890ff;
   border: none;
}
   
</style>