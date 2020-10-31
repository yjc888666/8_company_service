<template>
<div>
   <div class="btn">
   <a-button type="link" @click="showModal">
      +新增广告
   </a-button>
   </div>
  <a-table bordered :data-source="dataSource" :columns="columns" :pagination="false">
    <template v-slot:id="{ text, record,index }">
      <a>{{ index+1 }}</a>
    </template>
    <template v-slot:operation="{ text, record }">
      <a-popconfirm
        v-if="dataSource.length"
        title="Sure to delete?"
        @confirm="onDelete(record.key)"
      >
        <a>删除</a>
      </a-popconfirm>
    </template>
  </a-table>
  <!-- 点击新增广告弹出的对话框 -->
  <a-modal v-model:visible="visible" title="商品推荐" @ok="handleOk" width="60%" >
    <div class="search">
     <a-input-search
      v-model:value="value"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
    </div>
    <a-table  :data-source="dataSource" :columns="columns2" :pagination="false">
    <template v-slot:name="{ text }">
      <editable-cell :text="text"  />
    </template>
    <template v-slot:operation="{ text, record }">
      <a-button  size="small">
      <p class="font">推荐</p>
    </a-button>
    </template>
  </a-table>
    </a-modal>
</div>

</template>
<script>

export default {
  components: {
   
  },
  data() {
    return {
       visible:false,
       value:'',
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
        },
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
          title: '商品排序',
          dataIndex: 'goodsort',
        },
       
        {
          title: '操作',
          dataIndex: 'operation',
          slots: { customRender: 'operation' },
        },
      ],

       columns2: [
        
        {
          title: '商品ID',
          dataIndex: 'goodID',
        },
        {
          title: '商品名称',
          dataIndex: 'sort',
        },
           {
          title: '商品图片',
          dataIndex: 'pic',
        },
           {
          title: '分类',
          dataIndex: 'sellerName',
        },
          {
          title: '商家名称',
          dataIndex: 'sellerName',
        },
           
        {
          title: '操作',
          dataIndex: 'operation',
          slots: { customRender: 'operation' },
        },
      ],
    };
  },
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    },
    handleAdd() {
      const { count, dataSource } = this;
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        age: 32,
        address: `London, Park Lane no. ${count}`,
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    },
       showModal() {
      this.visible = true;
      console.log(this.visible)
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },

     onSearch(value) {
      console.log('use value', value);
      console.log('or use this.value', this.value);
    },
  },
};
</script>
<style lang="less" >
   .font {
     font-size: 12px;
     text-align: center;
   }
  .ant-btn {
 border-radius: 5px;

}
.search {
  width: 30%;
  margin-left:70%;
  margin-bottom: 10px;
}
.ant-input{
  border-radius: 5px;
}
.ant-btn-link {
  color: rgb(119, 122, 124);
}
.btn{
  text-align: right;
  padding: 20px;

}
.ant-table table {
  text-align: center;
}
.ant-table-thead > tr > th{
 text-align: center;
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