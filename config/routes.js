export default [
  {
    path: '/login',
    component: './Login',
    layout: false,
  },
  {
    name: '管理端',
    icon: 'crown',
    path: '/manegement',
    routes: [
      {
        name: '产品',
        path: 'product',
        component: './TableList1',
      },
      {
        name: '回收站',
        path: 'product/recycle',
        component: './TableList1',
      },
      {
        name: '详情',
        path: 'product/detail/*',
        component: './ListList',
      },
      {
        name: '添加',
        path: 'product/add',
        component: './BasicForm',
      },
      {
        name: '编辑',
        path: 'product/edit/*',
        component: './BasicForm',
      },
    ],
  },
  {
    name: '客户端',
    icon: 'crown',
    path: '/client',
    routes: [
      {
        name: '产品',
        path: 'product',
        component: './CardList',
      },
      {
        name: '详情',
        path: 'product/detail/*',
        component: './ListList',
      },
      {
        name: '购买',
        path: 'product/purchase/*',
        component: './Order',
      },
    ],
  },
  {
    path: '/',
    redirect: '/manegement/product',
  },
  {
    component: './404',
  },
  // {
  //   name: 'management.product-list',
  //   icon: 'crown',
  //   path: '/management/product',
  //   component: './ManagementProductList',
  // },
  // {
  //   name: 'form.form-basic',
  //   icon: 'form',
  //   path: '/from-basic',
  //   component: './FormBasic',
  // },
  // {
  //   name: 'form.form-senior',
  //   icon: 'form',
  //   path: '/from-senior',
  //   component: './FormSenior',
  // },
  // {
  //   name: 'result.result.success',
  //   icon: 'smile',
  //   path: '/result-success',
  //   component: './ResultSuccess',
  // },
  // {
  //   name: 'result.result.fail',
  //   icon: 'smile',
  //   path: '/result-fail',
  //   component: './ResultFail',
  // },
  // {
  //   name: 'form.currency-form',
  //   icon: 'form',
  //   path: '/products/*',
  //   component: './CurrencyForm',
  // },
  // {
  //   path: '/user',
  //   layout: false,
  //   routes: [
  //     {
  //       path: '/user',
  //       routes: [
  //         {
  //           name: 'login',
  //           path: '/user/login',
  //           component: './user/Login',
  //         },
  //       ],
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
];
