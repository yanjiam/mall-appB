<template>
  <div class="echarts">
    <div id="main"></div>
    <div class="empty" v-if="empty">暂无数据</div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  props: ['data'],
  data() {
    return {
      empty: true,
    };
  },
  methods: {
    getOptions(data) {
      return {
        title: {
          text: '热销商品前十',
          left: 'center',
        },
        xAxis: {
          type: 'category',
          data: data?.XData || [],
        },
        yAxis: {
          type: 'value',
          name: '件数',
          alignTicks: true,
          axisLine: {
            show: true,
          },
        },
        series: [
          {
            data: data?.YData || [],
            type: 'bar',
          },
        ],
      };
    },
    initEcharts() {
      if (!this.data?.XData?.length || !this.data?.YData?.length) {
        this.empty = true;
      }
      const myChart = echarts.init(document.getElementById('main'));
      myChart.setOption(this.getOptions());
    },
  },
  watch: {
    data() {
      this.initEcharts();
    },
  },
  mounted() {
    this.initEcharts();
  },
};
</script>

<style lang="less" scoped>
.echarts {
  width: 100%;
  height: 700px;
  position: relative;
  #main {
    height: 100%;
  }
  .empty {
    width: 100%;
    height: 100%;
    position: absolute;
    font-size: 30px;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
