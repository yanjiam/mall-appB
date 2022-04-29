// 对于商家操作的接口管理
import axios from '@/axios';

export default {
  // echarts
  queryEchartsData() {
    return axios.post('/echart/hotSale');
  },
};
