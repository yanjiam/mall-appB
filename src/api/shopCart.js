import axios from '@/axios';

export default {
  // 查询购物车列表接口
  list(params) {
    return axios.get('/shopCart/all', params);
  },
  // 删除商品
  delete(params) {
    return axios.post('/shopCart/delete', params);
  },
  // 加车
  add(params) {
    return axios.post('/shopCart/add', params);
  },
  // 编辑产品
  edit(params) {
    return axios.post('/shopCart/edit', params);
  },
};
