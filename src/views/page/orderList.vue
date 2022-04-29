<template>
  <div class="order-list">
    <!-- 表格 -->
    <order-table
      :data="tableData"
      :page="page"
      @change="changePage"
      @changeStatus="changeStatus"
      @remove="removeOrder"
    />
  </div>
</template>

<script>
import orderTable from '@/components/orderTable.vue';
import orderApi from '@/api/order';

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
    orderTable,
  },
  created() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      orderApi
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
    changeStatus(record) {
      this.$confirm({
        title: '确认已发货',
        content: () => <div style="color:red;">确认要将订单状态改为已发货么</div>,
        onOk: () => {
          orderApi
            .changeStatus({
              // eslint-disable-next-line no-underscore-dangle
              _id: record._id,
              status: 2,
            })
            .then(() => {
              console.log(this);
              this.getTableData();
            });
        },
        onCancel() {
          this.$router.push({
            name: 'orderList',
          });
        },
        class: 'confirm-box',
      });
    },
    removeOrder(record) {
      this.$confirm({
        title: '确认删除',
        content: () => <div style="color:red;">确认删除该的订单吗</div>,
        onOk: () => {
          orderApi
            .delete({
              // eslint-disable-next-line no-underscore-dangle
              _id: record._id,
            })
            .then(() => {
              console.log(this);
              this.getTableData();
            });
        },
        onCancel() {
          this.$router.push({
            name: 'orderList',
          });
        },
        class: 'confirm-box',
      });
    },
  },
};
</script>

<style lang="less" scoped>
.order-list {
  position: relative;
}
</style>
