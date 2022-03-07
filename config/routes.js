export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: 'table.table-sta',
    icon: 'table',
    path: '/table-sta',
    component: './TableStandard',
  },
  {
    name: 'form.form-basic',
    icon: 'form',
    path: '/from-basic',
    component: './FormBasic',
  },
  {
    name: 'form.form-senior',
    icon: 'form',
    path: '/from-senior',
    component: './FormSenior',
  },
  {
    name: 'result.result.success',
    icon: 'smile',
    path: '/result-success',
    component: './ResultSuccess',
  },
  {
    name: 'result.result.fail',
    icon: 'smile',
    path: '/result-fail',
    component: './ResultFail',
  },
  {
    name: 'list.product-list',
    icon: 'table',
    path: '/products/display',
    component: './ProductList',
  },
  {
    name: 'list.recycle-list',
    icon: 'table',
    path: '/products/recycle',
    component: './ProductList',
  },
  {
    name: 'form.currency-form',
    icon: 'form',
    path: '/products/*',
    component: './CurrencyForm',
  },
  {
    name: 'client.product-list',
    icon: 'table',
    path: 'client/product',
    component: './ClientProductList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
