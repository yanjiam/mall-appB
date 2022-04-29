<template>
  <a-table
    :columns="columns"
    :data-source="tableData"
    :pagination="page"
    @change="changePage"
  >
    <div slot="operation" slot-scope="text, record">
      <a-button v-if="record.status === 1" @click="changeStatus(record)"
        >确认发货</a-button
      >
      <a-button @click="removeOrder(record)">删除</a-button>
    </div>
  </a-table>
</template>
<script>
const columns = [
  {
    title: '订单号',
    dataIndex: '_id',
    key: '_id',
  },
  {
    title: '下单用户',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: '订单状态',
    dataIndex: 'status',
    customRender: (text, record) => {
      switch (record.status) {
        case 1:
          return '待发货';
        case 2:
          return '配送中';
        case 3:
          return '已完成';
        default:
          return '处理中';
      }
    },
    key: 'status',
  },
  {
    title: '下单时间',
    dataIndex: 'create_time',
    key: 'create_time',
    ellipsis: true,
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width: 200,
    scopedSlots: { customRender: 'operation' },
  },
];

export default {
  data() {
    return {
      columns,
    };
  },
  props: ['data', 'page'],
  computed: {
    tableData() {
      return this.data.map((item) => ({
        ...item,
        // eslint-disable-next-line no-underscore-dangle
        key: item._id,
      }));
    },
  },
  methods: {
    changePage(page) {
      this.$emit('change', page);
    },
    changeStatus(record) {
      this.$emit('changeStatus', record);
    },
    removeOrder(record) {
      this.$emit('remove', record);
    },
  },
};
</script>
<style lang="less">
.business-list {
  padding-top: 60px;
}
</style>
