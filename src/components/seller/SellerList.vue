<template>
  <div>
    <div class="top2">
      <div class="left">共{{ data.count }}条记录 {{ value }}</div>
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
    <a-table
      bordered
      :data-source="data.list"
      :columns="columns"
      :pagination="false"
    >
     <template v-slot:id="{ text, record,index }">
      <a>{{ index+1 }}</a>
    </template>
      <template v-slot:operation="{ text, record }">
        <!-- <a-popconfirm v-if="data.list" @click="getInfo(record)">
          <a>查看&nbsp;</a>
        </a-popconfirm> -->
        <a-button type="link" v-if="data.list" @click="getInfo(record)" >
          <a>查看</a>
        </a-button>
        <a>|</a>
        <a-button type="link" v-if="data.list" @click="getInfo(record)" >
          <a>编辑</a>
        </a-button>
        <!-- <a-popconfirm v-if="data.list" @confirm="onDelete(record.key)">
          <a>| 编辑</a>
        </a-popconfirm> -->
      </template>
    </a-table>
     <!-- 查看详情弹出的对话框 -->
    <a-modal
      v-model:visible="visible"
      title="店铺信息"
    >
      <div class="form">
        <SellerForm></SellerForm>
      </div>
      <template slot="footer">
        <a-button @click="handleOk">确定</a-button>
      </template>
    </a-modal>
     
    <div class="center">
      <a-pagination
        size="small"
        :total="data.list.length"
        show-size-changer
        show-quick-jumper
        :style="{ height: '32px', lineHeight: '32px', textAlign: 'center' }"
      />
    </div>

   
    
  </div>
</template>

<script>
import SellerForm from './SellerlistForm'
import getSellerList from '../../services/getSellerList.js'
 import {useStore} from 'vuex';
import { ref, reactive, computed,onMounted } from "vue";
export default {
  name: "sellerlist",
  components:{
    SellerForm
  },
  setup() {
   
   const store=useStore();

    let value = ref(null),
      visible = ref(false);

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
    let data = reactive({
      count: 20,
      list: [
        {
          key: "0",
          id: 1,
          title: "安徽印发养老标准化研究报告",
          sort: "展会资讯",
          status: "显示",
          time: "2020-07-10",
          people: "cc",
        },
        {
          key: "1",
          id: 2,
          title: "安徽印发养老标准化研究报告",
          sort: "展会资讯",
          status: "显示",
          time: "2020-07-10",
          people: "cc",
        },
        {
          key: "2",
          id: 3,
          title: "安徽印发养老标准化研究报告",
          sort: "展会资讯",
          status: "显示",
          time: "2020-07-10",
          people: "cc",
        },
      ],
    });
    let columns = ref([
      {
        title: "序列",
        dataIndex: "id",
        slots: { customRender: "id" },
      },
      {
        title: "店铺ID",
        dataIndex: "title",
      },
      {
        title: "店铺名称",
        dataIndex: "sort",
      },
      {
        title: "店铺Logo",
        dataIndex: "status",
      },
      {
        title: "店铺类型",
        dataIndex: "time",
      },
      {
        title: "所在地",
        dataIndex: "people",
      },
      {
        title: "申请人",
        dataIndex: "people",
      },
      {
        title: "申请时间",
        dataIndex: "people",
      },
      {
        title: "店铺状态",
        dataIndex: "people",
      },
      {
        title: "操作",
        dataIndex: "operation",
        slots: { customRender: "operation" },
      },
    ]);
    const onSearch = (value) => {
        console.log("use value", value);
        console.log("or use this.value", value);
      },
      selectChange = (e) => {
        console.log(e);
      },
      getInfo=(val)=>{
        visible.value=true;
       console.log(val)
      },
      onDelete = (key) => {
        const dataSource = [...data.list];
        data.list = dataSource.filter((item) => item.key !== key);
      },
      handleOk=(e)=> {
      console.log(e);
       visible.value = false;
    };
    onMounted(()=>{
     getSellerList(store);
    })
    return {
      visible,
      data,
      value,
      columns,
      onSearch,
      selectChange,
      getInfo,
      onDelete,
      handleOk
    };
  },
};
</script>

<style lang="less">
.search {
  width: 30%;
  margin-left: 70%;
  margin-bottom: 10px;
}
.ant-btn {
  padding: 0 3px;
}
.ant-input {
  border-radius: 5px;
}
.center {
  margin: 20px auto;
}
.ant-table table {
  text-align: center;
}
.ant-table-thead > tr > th {
  text-align: center;
}
.top2 {
  height: 50px;

  line-height: 50px;
  display: flex;
  justify-content: space-between;
}
</style>
