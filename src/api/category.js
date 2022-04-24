// 所有类目的接口

import axios from '@/axios';

export default {
  // 查询类目列表接口
  list(params) {
    return axios.post('/category/list', params);
  },
  // 添加类目
  categoryAdd(params) {
    return axios.post('/category/add', params);
  },
  // 查询类目详细
  detail(params) {
    return axios.post('/category/queryInfo', params);
  },
  // 编辑类目
  categoryEdit(params) {
    return axios.post('/category/edit', params);
  },
  // 删除类目
  categoryDelete(params) {
    return axios.post('/category/delete', params);
  },
};
