<template>
  <div class="index">
    <card :data="cardData" />
    <charts :data="chartData" />
  </div>
</template>

<script>
import Card from '@/components/card.vue';
import Charts from '@/components/charts.vue';
import echartApi from '@/api/echart';

export default {
  data() {
    return {
      cardData: {},
      chartData: {},
    };
  },
  components: {
    Card,
    Charts,
  },
  methods: {
    queryEchartsData() {
      echartApi.queryEchartsData().then((res) => {
        const {
          nowOrderCount,
          orderCount,
          productCount,
          productOnsale,
          XData,
          YData,
        } = res.data.data;
        this.cardData = {
          nowOrderCount,
          orderCount,
          productCount,
          productOnsale,
        };
        this.chartData = { XData, YData };
      });
    },
  },
  mounted() {
    this.queryEchartsData();
  },
};
</script>
