<template>
<div>
   <div class="btn">
   <a-button type="link" @click="showModal">
      +新增广告
   </a-button>
   </div>
  <a-table bordered :data-source="dataSource" :columns="columns" :pagination="false">
    <template v-slot:name="{ text }">
      <editable-cell :text="text"  />
    </template>
    <template v-slot:operation="{ text, record }">
      <a-popconfirm
        v-if="dataSource.length"
        title="Sure to delete?"
        @confirm="onDelete(record.key)"
      >
        <a>编辑&nbsp;</a>
      </a-popconfirm>
       <a-popconfirm
        v-if="dataSource.length"
        title="确定删除么?"
        @confirm="onDelete(record.key)"
      >
        <a>|  删除</a>
        
      </a-popconfirm>
    </template>
  </a-table>
  <!-- 点击新增广告弹出的对话框 -->
  <a-modal v-model:visible="visible" title="广告详情" 
    @ok="handleOk"
    @cancel="handleCancel"
  
  >
    <div class="form">
      <Form/>
      
    </div>
      <template slot="footer">
      <a-button @click="handleOk">确定</a-button>
    </template>

     
    </a-modal>
</div>

</template>
<script>
 import Form from './Form'
export default {
  components: {
    Form
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
          dataIndex: 'key',
        },
        {
          title: '广告ID',
          dataIndex: 'goodID',
        },
        {
          title: '广告位置',
          dataIndex: 'sort',
        },
           {
          title: '广告名称',
          dataIndex: 'pic',
        },
           {
          title: '广告图',
          dataIndex: 'sellerName',
        },
           {
          title: '显示',
          dataIndex: 'sellLogo',
        },
           {
          title: '排序',
          dataIndex: 'type',
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
.ant-modal-footer {
  padding: 16px 24px;
  border-top:none;
}
.ant-modal-footer  div{
  display: none;
}
   .form {
     margin: 0 auto;
     text-align: center;
   }
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