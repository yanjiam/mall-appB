// 对于商家操作的接口管理
import axios from '@/axios';

export default {
  // 查询所有订单
  selectAll(params) {
    return axios.post('/order/Blist', params);
  },
  // 修改订单状态
  changeStatus(params) {
    return axios.post('/order/change', params);
  },
  // 删除订单
  delete(params) {
    return axios.post('/order/delete', params);
  },
};
