/**
 * 存储的是 角色对应的权限名称
 */
const roleToRoute = {
  coustomer: [
    {
      name: 'Product',
    },
    {
      name: 'ProductList',
    },
    {
      name: 'ProductAdd',
    },
    {
      name: 'Category',
    },
    {
      name: 'categoryAdd',
    },
    {
      name: 'ProductEdit',
    },
  ],
  admin: [
    {
      name: 'Product',
    },
    {
      name: 'ProductList',
    },
    {
      name: 'ProductAdd',
    },
    {
      name: 'ProductEdit',
    },
    {
      name: 'Category',
    },
    {
      name: 'CategoryAdd',
    },
    {
      name: 'CategoryEdit',
    },
    {
      name: 'User',
    },
    {
      name: 'UserList',
    },
    {
      name: 'UserAdd',
    },
    {
      name: 'UserEdit',
    },
    {
      name: 'Business',
    },
    {
      name: 'BusinessList',
    },
    {
      name: 'BusinessAdd',
    },
    {
      name: 'BusinessEdit',
    },
  ],
};

/**
 * 过滤掉没有权限的路由
 * @param {String} role
 * @param {Array} routes
 *
 */
export default function getMenuRoute(power, routes) {
  console.log('power: ', power);
  const powerRoutr = power === 1 ? 'coustomer' : 'admin';
  const allowRoutesName = roleToRoute[powerRoutr].map((item) => item.name);
  const resultRoutes = routes.filter((r) => {
    const obj = r;
    if (allowRoutesName.indexOf(r.name) !== -1) {
      const { children } = obj;
      obj.children = children.filter((c) => allowRoutesName.indexOf(c.name) !== -1);
      return true;
    }
    return false;
  });
  return resultRoutes;
}
