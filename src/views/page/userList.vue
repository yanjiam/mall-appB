<template>
  <div class="user-list">
    <a-button class="user-add-btn">
      <router-link :to="{name:'UserAdd'}">新增</router-link>
    </a-button>
    <!-- 表格 -->
    <user-table :data="tableData"
                  :page="page"
                  @change="changePage"
                  @edit="editUser"
                  @remove="removeUser"/>
  </div>
</template>

<script>
import userTable from '@/components/userTable.vue';
import userApi from '@/api/user';

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
    userTable,
  },
  created() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      userApi.selectAll({
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
    editUser(record) {
      this.$router.push({
        name: 'UserEdit',
        params: {
          // eslint-disable-next-line no-underscore-dangle
          pin: record.pin,
        },
      });
    },
    removeUser(record) {
      this.$confirm({
        title: '确认删除',
        content: () => <div style="color:red;">{`确认删除:${record.username}的类目吗`}</div>,
        onOk: () => {
          userApi.delete({
            // eslint-disable-next-line no-underscore-dangle
            pin: record.pin,
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
.user-list {
  position: relative;
  .user-add-btn {
    position: absolute;
    right: 250px;
    top: 14px;
  }
}
</style>
