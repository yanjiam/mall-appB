<template>
  <div class="category-list">
    <a-button class="category-add-btn">
      <router-link :to="{name:'CategoryAdd'}">新增</router-link>
    </a-button>
    <!-- 表格 -->
    <category-table :data="tableData"
                  class="table"
                  :page="page"
                  @change="changePage"
                  @edit="editCategory"
                  @remove="removeCategory"/>
  </div>
</template>

<script>
import categoryTable from '@/components/categoryTable.vue';
import categoryApi from '@/api/category';

export default {
  data() {
    return {
      tableData: [],
      page: {
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        total: 1,
      },
    };
  },
  components: {
    categoryTable,
  },
  created() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      categoryApi.list({
        page: this.page.current,
        size: this.page.pageSize,
      })
        .then((res) => {
          console.log(res);
          this.tableData = res.data.data.map((item) => ({
            ...item,
          }));
          this.page.total = res.data.total;
        });
      console.log(categoryApi.list());
    },
    changePage(page) {
      this.page = page;
      this.getTableData();
    },
    editCategory(record) {
      this.$router.push({
        name: 'CategoryEdit',
        params: {
          // eslint-disable-next-line no-underscore-dangle
          _id: record._id,
        },
      });
    },
    removeCategory(record) {
      this.$confirm({
        title: '确认删除',
        content: () => <div style="color:red;">{`确认删除:${record.name}的类目吗`}</div>,
        onOk: () => {
          categoryApi.categoryDelete({
            // eslint-disable-next-line no-underscore-dangle
            _id: record._id,
          }).then(() => {
            console.log(this);
            this.getTableData();
          });
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'confirm-box',
      });
    },
  },
};
</script>

<style lang="less" scoped>
.category-list {
  position: relative;
  .category-add-btn {
    position: absolute;
    right: 250px;
    top: 14px;
  }
}
</style>
