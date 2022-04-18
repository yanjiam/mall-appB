import Cookies from 'js-cookie';

/** *
 * @param {Object} info
 */
export function setCookie(info) {
  const arr = Object.entries(info);
  for (let i = 0; i < arr.length; i += 1) {
    Cookies.set(arr[i][0], arr[i][1]);
  }
  return true;
}
/**
 * 获取用户的cookie信息
 */
export function getBusinessCookie() {
  return {
    b_name: Cookies.get('b_name'),
    pin: Cookies.get('pin'),
    power: Cookies.get('power'),
  };
}

export function removeBusinessCookie() {
  Cookies.remove('b_name');
  Cookies.remove('pin');
  Cookies.remove('power');
  return true;
}
