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
      <a-button @click="editCategory(record)">编辑</a-button>
      <a-button @click="removeCategory(record)">删除</a-button>
    </div>
  </a-table>
</template>
<script>
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
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
        key: item.id,
      }));
    },
  },
  methods: {
    changePage(page) {
      this.$emit('change', page);
    },
    editCategory(record) {
      this.$emit('edit', record);
    },
    removeCategory(record) {
      this.$emit('remove', record);
    },
  },
};
</script>
<style lang="less">
.category-list {
  padding-top: 60px;
}
</style>
