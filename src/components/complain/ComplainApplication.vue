<template>
  <div>
    <div class="top2">
      <div class="left">共{{ data.count }}条记录 {{value}}</div>
      <div class="right">
       <!-- <a-select v-model:value="value" @change="selectChange"  placeholder="请输入搜索的内容"
         style="width: 50%"
       >
        <a-select-option value="0">
          按标题
        </a-select-option>
        <a-select-option value="1">
          按文章
        </a-select-option>
        <a-select-option value="2">
          按状态
        </a-select-option>
      </a-select> -->
        <a-input-search
          v-model:value="value"
          placeholder="请输入搜索的内容"
          style="width: 200px"
          @search="onSearch"
        />
      </div>
    </div>
    <a-table bordered :data-source="data.list" :columns="columns" :pagination="false" >
    <template v-slot:operation="{ text, record }">
      <a-button type="link" size="small" v-if="data.list" @click="toDeal(record)" >
          <a>立即处理</a>
        </a-button>
    </template>
  </a-table>
  <!-- <div class="center">
    <a-pagination size="small" :total="data.list.length" show-size-changer show-quick-jumper
     :style="{height:'32px', lineHeight: '32px', textAlign: 'center'}"
     />
  </div> -->
     <div class="center">
      <a-pagination
        size="small"
        :total="data.list.length"
        :style="{ height: '32px', lineHeight: '32px', textAlign: 'center' }"
        v-model="current"
        :pageSize="pageSize"
        @change="pageNumberChange"
        @showSizeChange="sizeChange"
      />
    </div>
   
  </div>
</template>

<script>
import {ref,reactive,computed} from 'vue'
 import {useRouter} from 'vue-router'
export default {
  name:'abandonlist',
  setup(){
     const router =useRouter();
     let value=ref(null);
    //  let value2=ref(computed((value)=>{
    //   switch(value){
    //     case 0: return '按标题';
    //     break;
    //     case 1: return '按文章';
    //     break;
    //     case 3: return '按状态';
    //     break;
    //   }
    // }))
     let data=reactive({
       count:20,
       list:[
         { 
           key:'0',
           id:1,
           title:'安徽印发养老标准化研究报告',
           sort:'展会资讯',
           status:'显示',
           time:'2020-07-10',
           people:'cc'
         },
         {
              key:'1',
           id:2,
           title:'安徽印发养老标准化研究报告',
           sort:'展会资讯',
           status:'显示',
           time:'2020-07-10',
           people:'cc'
         },
         {
              key:'2',
           id:3,
           title:'安徽印发养老标准化研究报告',
           sort:'展会资讯',
           status:'显示',
           time:'2020-07-10',
           people:'cc'
         }
       ]
     })
     let  columns=ref([
         {
          title: '序列',
          dataIndex: 'id',
        },
        {
          title: '投诉商品',
          dataIndex: 'title',
        },
        {
          title: '投诉类型',
          dataIndex: 'sort',
        },
           {
          title: '所属商家',
          dataIndex: 'status',
        },
           {
          title: '投诉人',
          dataIndex: 'time',
        },
           {
          title: '投诉电话',
          dataIndex: 'people',
        },
          {
          title: '商品状态',
          dataIndex: 'people',
        },
         {
          title: '处理状态',
          dataIndex: 'people',
        },
         {
          title: '投诉时间',
          dataIndex: 'people',
        },
        {
          title: '操作',
          dataIndex: 'operation',
          slots: { customRender: 'operation' },
        },
      ]) 
     const onSearch=value=> {
      console.log('use value', value);
      console.log('or use this.value', value);
       },
          selectChange=(e)=>{
            console.log(e)
          },
           onDelete=(key)=> {
          const dataSource = [...data.list];
         data.list= dataSource.filter(item => item.key !== key);
       },
        toDeal=(row)=>{
          console.log(row)
          console.dir(router)
           router.push('/details')
        };
     return {
       data,
       value,
      columns,
       onSearch,
       selectChange,
       onDelete,
       toDeal
      
     }
  }
}
</script>

<style lang="less" >
.search {
  width: 30%;
  margin-left:70%;
  margin-bottom: 10px;
}
.ant-input{
  border-radius: 5px;
}
.center {
  margin: 20px auto;
}
.ant-table table {
  text-align: center;
}
.ant-table-thead > tr > th{
 text-align: center;
}
.top2 {
  height: 50px;

  line-height: 50px;
  display: flex;
  justify-content: space-between;
}
.ant-descriptions-title{
   color:rgb(86,85,85,0.85)
}
</style>
