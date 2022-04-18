<template>
  <div class="index">
    <card :data="cardData" />
    <charts />
  </div>
</template>

<script>
import Card from '@/components/card.vue';
import Charts from '@/components/charts.vue';
import productApi from '@/api/product';

export default {
  data() {
    return {
      cardData: {
        saleAll: 0,
        saleNow: 0,
        productAll: 0,
        productOnSale: 0,
      },
    };
  },
  components: {
    Card,
    Charts,
  },
  methods: {
    queryProductAll() {
      productApi.list().then((res) => {
        this.cardData.productAll = res.data.total;
      });
    },
    queryProductOnsale() {
      productApi.list({ sale: 1 }).then((res) => {
        this.cardData.productOnSale = res.data.total;
      });
    },
  },
  mounted() {
    this.queryProductAll();
    this.queryProductOnsale();
  },
};
</script>
