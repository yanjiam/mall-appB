// 对于用户操作的接口管理
import axios from '@/axios';

export default {
  // 登录
  login(params) {
    return axios.post('/user/login', params);
  },
  // 修改密码
  changePass(params) {
    return axios.post('/user/changePwd', params);
  },
  // 注册
  register(params) {
    return axios.post('/user/register', params);
  },
  // 查询所有用户
  selectAll(params) {
    return axios.post('/user/select', params);
  },
  // 查询用户详细信息
  queryInfo(params) {
    return axios.post('/user/queryInfo', params);
  },
  // 修改用户信息
  changeInfo(params) {
    return axios.post('/user/changeInfo', params);
  },
  // 删除用户
  delete(params) {
    return axios.post('/user/delete', params);
  },
};
