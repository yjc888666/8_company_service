<template>
  <div>
    <div class="top2">
      <div class="left">共{{ data.list.length }}条记录 {{ value }}</div>
      <div class="right">
        <div class="flex1">
          <a-select
            v-model:value="value"
            @change="selectChange"
            placeholder="请输入搜索的内容"
            style="borderRadius:10px"
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
          </a-select>
        </div>
        <div class="flex2">
          <a-input-search
            v-model:value="value1"
            placeholder="请输入搜索的内容"
            style="width: 200px"
            @search="onSearch"
          />
        </div>
      </div>
    </div>
    <a-table
      bordered
      :data-source="
        data.list.slice(pageSize * (current - 1), pageSize * current)
      "
      :columns="columns"
      :pagination="false"
    >
      <template v-slot:operation="{ text, record }">
        <a-popconfirm
          v-if="data.list"
          title="确定要下架么?"
          @confirm="onDelete(record.key)"
        >
          <a>下架</a>
        </a-popconfirm>
         <a></a>
        <a-button type="link" size="small" v-if="data.list" @click="getInfo(record)" >
          <a>|&nbsp;&nbsp;查看</a>
        </a-button>
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
import SellerForm from '../seller/SellerlistForm'
import { ref, reactive, computed, toRefs, watch } from "vue";
export default {
  name: "list",
  components:{
    SellerForm
  },
  setup() {
    let value = ref("0");
    let value1 = ref(null);
    let value2 = ref(
      computed((value) => {
        switch (value) {
          case 0:
            return "按标题";
            break;
          case 1:
            return "按文章";
            break;
          case 3:
            return "按状态";
            break;
        }
      })
    );
    let data = reactive({
      //  count:20,
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
        {
          key: "3",
          id: 4,
          title: "安徽印发养老标准化研究报告",
          sort: "展会资讯",
          status: "显示",
          time: "2020-07-10",
          people: "cc",
        },
        {
          key: "4",
          id: 5,
          title: "安徽印发养老标准化研究报告",
          sort: "展会资讯",
          status: "显示",
          time: "2020-07-10",
          people: "cc",
        },
        {
          key: "5",
          id: 6,
          title: "安徽印发养老标准化研究报告",
          sort: "展会资讯",
          status: "显示",
          time: "2020-07-10",
          people: "cc",
        },
        {
          key: "6",
          id: 7,
          title: "安徽印发养老标准化研究报告",
          sort: "展会资讯",
          status: "显示",
          time: "2020-07-10",
          people: "cc",
        },
        {
          key: "7",
          id: 8,
          title: "安徽印发养老标准化研究报告",
          sort: "展会资讯",
          status: "显示",
          time: "2020-07-10",
          people: "cc",
        },
        {
          key: "8",
          id: 9,
          title: "安徽印发养老标准化研究报告",
          sort: "展会资讯",
          status: "显示",
          time: "2020-07-10",
          people: "cc",
        },
        {
          key: "9",
          id: 10,
          title: "安徽印发养老标准化研究报告",
          sort: "展会资讯",
          status: "显示",
          time: "2020-07-10",
          people: "cc",
        },
        {
          key: "10",
          id: 11,
          title: "安徽印发养老标准化研究报告",
          sort: "展会资讯",
          status: "显示",
          time: "2020-07-10",
          people: "cc",
        },
        {
          key: "11",
          id: 12,
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
      },
      {
        title: "标题",
        dataIndex: "title",
      },
      {
        title: "文章分类",
        dataIndex: "sort",
      },
      {
        title: "状态",
        dataIndex: "status",
      },
      {
        title: "发布时间",
        dataIndex: "time",
      },
      {
        title: "发帖人",
        dataIndex: "people",
      },
      {
        title: "操作",
        dataIndex: "operation",
        slots: { customRender: "operation" },
      },
    ]);
    let state = reactive({
      //页码的数据
      pageSize: 5,
      current: 1,
      //弹出框的状态
      visible:false
    });
    watch(
      () => {
        [state.pageSize, state.current];
      },
      ([val1, val2]) => {
        console.log(val1);
        console.log(val2);
      }
    );
    const onSearch = (value) => {
        console.log("use value", value);
        console.log("or use this.value", value);
      },
      selectChange = (e) => {
        console.log(e);
      },
      onDelete = (key) => {
        const dataSource = [...data.list];
        data.list = dataSource.filter((item) => item.key !== key);
      },
      //分页页数的变化
      pageNumberChange = (current, pageSize) => {
        state.pageSize = pageSize;
        state.current = current;
        console.log("haha");
        console.log(current, pageSize);
        //  data.list=getShowData()
      },
      //  分页显示条数的变化
      sizeChange = (current, size) => {
        state.current = current;
        state.pageSize = size;
        // data.list = getShowData();
      };
     //查看详情的操作
     const getInfo=(row)=>{
         state.visible=true
     }
    // getShowData=()=>data.list.slice(state.pageSize*(state.current-1),state.pageSize*state.current);

    return {
      ...toRefs(state),
      data,
      value,
      value1,
      columns,
      onSearch,
      selectChange,
      onDelete,
      pageNumberChange,
      sizeChange,
      getInfo
      //  getShowData
    };
  },
};
</script>

<style lang="less">
.ant-select-enabled {
  width: 120px;
}
.ant-select-selection {
  border-radius: 5px;
}
.right {
  width: 20%;
  display: flex;
  justify-content: space-between;
}
.search {
  width: 30%;
  margin-left: 70%;
  margin-bottom: 10px;
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
