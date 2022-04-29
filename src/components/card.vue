<template>
  <div style="background-color: #ececec; padding: 20px">
    <a-row :gutter="16">
      <a-col :span="12">
        <a-card title="商品总览" :bordered="false">
          <div class="content">
            <span>在售商品：{{ this.data.productOnsale || 0 }}</span>
            <span>总商品数：{{ this.data.productCount || 0 }}</span>
          </div>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="销售总览" :bordered="false">
          <div class="content">
            <span>本月订单量：{{ this.data.nowOrderCount || 0 }}</span>
            <span>总订单量：{{ this.data.orderCount || 0 }}</span>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  props: ['data'],
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.content {
  height: 40px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 20px;
    color: #30a679;
  }
}
</style>
