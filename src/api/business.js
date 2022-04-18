// 对于商家操作的接口管理
import axios from '@/axios';

export default {
  // 登录
  login(params) {
    return axios.post('/business/login', params);
  },
  // 修改密码
  changePass(params) {
    return axios.post('/business/changePwd', params);
  },
  // 创建商家
  register(params) {
    return axios.post('/business/register', params);
  },
  // 查询所有商家
  selectAll(params) {
    return axios.post('/business/select', params);
  },
  // 查询商家详细信息
  queryInfo(params) {
    return axios.post('/business/queryInfo', params);
  },
  // 修改商家信息
  changeInfo(params) {
    return axios.post('/business/changeInfo', params);
  },
  // 删除商家
  delete(params) {
    return axios.post('/business/delete', params);
  },
};
