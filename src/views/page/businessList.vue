<template>
  <div class="business-list">
    <a-button class="business-add-btn">
      <router-link :to="{ name: 'BusinessAdd' }">新增</router-link>
    </a-button>
    <!-- 表格 -->
    <business-table
      :data="tableData"
      :page="page"
      @change="changePage"
      @edit="editBusiness"
      @remove="removeBusiness"
    />
  </div>
</template>

<script>
import businessTable from '@/components/businessTable.vue';
import businessApi from '@/api/business';

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
    businessTable,
  },
  created() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      businessApi
        .selectAll({
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
    },
    changePage(page) {
      this.page = page;
      this.getTableData();
    },
    editBusiness(record) {
      this.$router.push({
        name: 'BusinessEdit',
        params: {
          // eslint-disable-next-line no-underscore-dangle
          pin: record.pin,
        },
      });
    },
    removeBusiness(record) {
      this.$confirm({
        title: '确认删除',
        content: () => (
          <div style="color:red;">{`确认删除:${record.bname}的类目吗`}</div>
        ),
        onOk: () => {
          businessApi
            .delete({
              // eslint-disable-next-line no-underscore-dangle
              pin: record.pin,
            })
            .then(() => {
              console.log(this);
              this.getTableData();
            });
        },
        onCancel() {
          this.$router.push({
            name: 'BusinessList',
          });
        },
        class: 'confirm-box',
      });
    },
  },
};
</script>

<style lang="less" scoped>
.business-list {
  position: relative;
  .business-add-btn {
    position: absolute;
    right: 250px;
    top: 14px;
  }
}
</style>
