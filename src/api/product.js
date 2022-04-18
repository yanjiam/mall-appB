import axios from '@/axios';

export default {
  // 查询产品列表接口
  list(params) {
    return axios.post('/products/all', params);
  },
  // 删除商品
  delete(params) {
    return axios.post('/products/delete', params);
  },
  // 添加商品
  add(params) {
    return axios.post('/products/add', params);
  },
  // 查询商品详细
  detail(params) {
    return axios.post('/products/queryInfo', params);
  },
  // 编辑产品
  edit(params) {
    return axios.post('/products/edit', params);
  },
};
