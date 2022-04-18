<template>
  <div style="background-color: #ececec; padding: 20px">
    <a-row :gutter="16">
      <a-col :span="12">
        <a-card title="商品总览" :bordered="false">
          <div class="content">
            <span>在售商品：{{ this.data.productAll }}</span>
            <span>总商品数：{{ this.data.productOnSale }}</span>
          </div>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="销售总览" :bordered="false">
          <div class="content">
            <span>本月订单量：100</span>
            <span>总订单量：100</span>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  props: ['data'],
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
