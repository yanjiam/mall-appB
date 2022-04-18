<template>
  <a-table
    :columns="columns"
    :data-source="tableData"
    :pagination="page"
    @change="changePage"
  >
    <div
      slot="operation"
      slot-scope="text, record"
    >
      <a-button @click="editUser(record)">编辑</a-button>
      <a-button @click="removeUser(record)">删除</a-button>
    </div>
  </a-table>
</template>
<script>
const columns = [
  {
    title: 'pin',
    dataIndex: 'pin',
    key: 'pin',
  },
  {
    title: '用户名称',
    dataIndex: 'username',
    key: 'name',
    ellipsis: true,
  },
  {
    title: '权限等级',
    dataIndex: 'power',
    key: 'power',
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
    editUser(record) {
      this.$emit('edit', record);
    },
    removeUser(record) {
      this.$emit('remove', record);
    },
  },
};
</script>
<style lang="less">
.user-list {
  padding-top: 60px;
}
</style>
