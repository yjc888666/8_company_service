<template> 
<div class="home">
  <div class="center">
     <a-card title="管理中心" style="100%">
       <div class="list">
          <div class="centerData" v-for="item in centerData.data" :key="item">
         <div class="img" ><img src="" alt=""></div>
          <p>{{item.des}}</p>
          <p class="count">{{item.count}}</p>
        </div>
       </div>
       
     </a-card>
 </div>
  <div class="card">
   <a-card title="访问浏览量 pv" style="width:48%" >
      <template v-slot:extra><a href="#">统计日期: 2020-8-30</a></template>
      <div class="textContent">昨日<span>1000</span> 前日<span>200</span> 浮动<span>500%</span></div>
      
      <div ref="chart" style="width:96%;height:300px" id="haha"></div>
  </a-card>

  <a-card title="活跃用户数 uv" style="width:48%" >
        <template v-slot:extra><a href="#">统计日期: 2020-8-30</a></template>
      <div class="textContent">昨日<span>1000</span> 前日<span>200</span> 浮动<span>500%</span></div>
      
      <div ref="chart2" style="width:96%;height:300px" id="haha2"></div>
 </a-card>
  
</div>
</div>
 
 
</template>

<script>
 import echarts from "echarts";
 let echarts2 = require("echarts/lib/echarts");
 require("echarts/lib/chart/line");
 import { ref,onMounted,reactive} from "vue";
export default {
  name: "homePage",
 setup(){
   //管理中心的数据
    let centerData=reactive({
      data:[
        { 
          image:'',
          des:'新增商品',
          count:6
         },
          { 
          image:'',
          des:'新增求购',
          count:6
          },
            { 
          image:'',
          des:'商家入驻申请',
          count:6
            },
              { 
          image:'',
          des:'新增用户',
          count:6
            }
      ]
    })
    onMounted(()=>{
      initChart();
    })
      function initChart(){
         let myChart1=echarts.init(document.getElementById('haha'))
         let myChart2=echarts.init(document.getElementById('haha2'))
         myChart1.setOption(setOption('浏览量'))
         myChart2.setOption(setOption('用户数'))
      }
         function setOption(title){
           let option = {
              title: { text: title },
                 xAxis: {
             type: 'category',
              data: ['10.1', '10.2', '10.3', '10.4', '10.5', '10.6', '10.7']
       },
            yAxis: {
                 type: 'value'
            },
            series: [{
           data: [200, 932, 901, 934, 1290, 1330, 1500],
             type: 'line'
           }]
           }
           return option;
           };


      return {
         initChart,setOption,centerData
      }
       }
}
</script>

<style>
.center{
   margin: 20px 0px;
   
}
.centerData .img {
  width: 180px;
  height: 100px;
}
.list{
  display: flex;
  justify-content: space-around;
}
.list .centerData {
  /* width: 20%; */
  /* height: 100px; */
  background: #1890ff;
  text-align: center;

}
.card {
  display: flex;
  justify-content: space-between;
}

.textContent {
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
}
.textContent span {
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    margin-right: 20%;
}
.textContent span:nth-child(3){
  font-size: 16px;
  color: rgb(247, 12, 12);
  margin-right: 0px;
}
</style>
