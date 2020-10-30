<template>
<div>
   <div class="top"></div>
  <a-table bordered :data-source="dataSource" :columns="columns" :pagination="false" >
    <template v-slot:name="{ text }">
      <editable-cell :text="text"  />
    </template>
    <template v-slot:operation="{ text, record }">
      <a-popconfirm
        v-if="dataSource.length"
        title="?"
        @confirm="onDelete(record.key)"
      >
        <a>下架</a>
        
      </a-popconfirm>
       
    </template>
  </a-table>
</div>

</template>
<script>

export default {
  components: {
   
  },
  data() {
    return {
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
  },
};
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