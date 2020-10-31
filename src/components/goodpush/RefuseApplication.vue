<template>
<div>
   <div class="top"></div>
  <a-table bordered :data-source="dataSource" :columns="columns" :pagination="false">
    <template v-slot:id="{ text, record,index }">
      <a>{{ index+1 }}</a>
    </template>
      <template v-slot:status="{ text, record }">
      <a-tag  
        :color="formatColor[text]"
      >
        {{formatStatus[text]}}
      </a-tag>
    </template>
    
  </a-table>
</div>

</template>
<script>
 import {ref,reactive,computed,toRefs} from 'vue'
export default {
  components: {
  },
 setup(){
   let state=reactive({
      dataSource: [
        {
          key: '0',  
          goodID:'112',
          goodname: '嘎嘣脆',
          sort:'小零食',
          pic:'',
          sellerName:'小明',
          sellLogo:'',
          type:'食品',
          goodsort:1,
          status:'0'
        },
        {
          key: '1',
          goodID:'113',
          goodname: '嘎嘣脆2',
          sort:'小零食',
          pic:'',
          sellerName:'小明',
          sellLogo:'',
          type:'食品',
          goodsort:1,
          status:'1'
        }
      ],
      count: 2,
       columns: [
         {
          title: '*',
          dataIndex: 'id',
          slots: { customRender: 'id' },
        },
        {
          title: '商品ID',
          dataIndex: 'goodID',
        },
        {
          title: '商品分类',
          dataIndex: 'sort',
        },
           {
          title: '商品主图',
          dataIndex: 'pic',
        },
           {
          title: '商家名称',
          dataIndex: 'sellerName',
        },
           {
          title: '商品Logo',
          dataIndex: 'sellLogo',
        },
           {
          title: '商品类型',
          dataIndex: 'type',
        },
           {
          title: '热度排序',
          dataIndex: 'goodsort',
        },
        {
          title:'状态',
          key:'status',
          dataIndex: 'status',
          slots: { customRender: 'status' },
        }
      ]
   });
    let formatStatus=computed(()=>{
      let val1=[];
       state.dataSource.forEach(item=>{
        if(item.status=='0'){
         return val1.push('已同意')
        }
        else{
         return val1.push('未同意')
        } 
      })
      return val1
    }),
      formatColor=computed(()=>{
      let val1=[];
      state.dataSource.forEach(item=>{
        if(item.status=='0'){
         return val1.push('green')
        }
        else{
         return val1.push('red')
        } 
      })
      return val1
     }
      );
   return {
     ...toRefs(state),
      formatStatus,
      formatColor
   }
 }

}
</script>
<style lang="less">
.top{
  margin: 50px;
}
  .editable-cell {
  position: relative;
  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    line-height: 18px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
}
.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>