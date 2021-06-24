// 所有类目的接口

import axios from '@/axios';

export default {
  list(params) {
    return axios.get('/category/all', { params });
  },
  categoryadd(params) {
    return axios.get('/category/add', { params });
  },
  detail(id) {
    return axios.get(`/category/${id}`);
  },
  categoryedit(params) {
    return axios.put('/category/edit', { params });
  },
  categorydelete(params) {
    return axios.delete('/category/:id', { params });
  },
};
