const getProductsList = (_, res) => {
  res.json({
    success: true,
    message: '',
    data: {
      layout: {
        tableColumn: [
          {
            title: '产品编号',
            dataIndex: 'key',
            key: 'key',
            type: 'text',
          },
          {
            title: '产品名称',
            dataIndex: 'name',
            key: 'name',
            type: 'text',
          },
          {
            title: '年化利率 (%)',
            dataIndex: 'interest_rate',
            key: 'interest_rate',
            type: 'text',
          },
          {
            title: '更新时间',
            dataIndex: 'update_time',
            key: 'update_time',
            type: 'datetime',
          },
          {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            type: 'status',
            data: [
              {
                value: 0,
                title: '关闭',
                color: 'geekblue',
              },
              {
                value: 1,
                title: '异常',
                color: 'red',
              },
              {
                value: 2,
                title: '运行中',
                color: 'blue',
              },
              {
                value: 3,
                title: '已上线',
                color: 'green',
              },
            ],
          },
          {
            title: '操作',
            dataIndex: 'actions',
            key: 'actions',
            type: 'actions',
            actions: [
              {
                component: 'button',
                text: '编辑',
                type: 'primary',
                action: 'edit',
                uri: '/manegement/product/edit/:key',
              },
              {
                component: 'button',
                text: '详情',
                type: 'default',
                action: 'detial',
                uri: '/manegement/product/detail/:key',
              },
              {
                component: 'button',
                text: '删除',
                type: 'default',
                action: 'delete',
                danger: true,
                uri: '/product/delete',
                method: 'post',
              },
            ],
          },
        ],
        tableToolBar: [
          {
            component: 'button',
            text: '+ 新建',
            type: 'primary',
            action: 'add',
            uri: '/manegement/product/add',
          },
          {
            component: 'button',
            text: '刷新',
            type: 'dashed',
            action: 'reload',
          },
          {
            component: 'button',
            text: '回收站',
            type: 'default',
            action: 'recycle',
            uri: '/manegement/product/recycle',
          },
        ],
        batchToolBar: [
          {
            component: 'button',
            text: '删除',
            type: 'primary',
            danger: true,
            action: 'delete',
            uri: '/product/delete',
            method: 'post',
          },
        ],
      },
      dataSource: [
        {
          key: 1,
          name: '这是一个产品名称',
          interest_rate: 0.43,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 0,
        },
        {
          key: 2,
          name: '这是一个产品名称',
          interest_rate: 1.37,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 1,
        },
        {
          key: 3,
          name: '这是一个产品名称',
          interest_rate: 2.92,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 2,
        },
        {
          key: 4,
          name: '这是一个产品名称',
          interest_rate: 1.37,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 3,
        },
        {
          key: 5,
          name: '这是一个产品名称',
          interest_rate: 2.92,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 2,
        },
        {
          key: 6,
          name: '这是一个产品名称',
          interest_rate: 2.92,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 3,
        },
        {
          key: 7,
          name: '这是一个产品名称',
          interest_rate: 1.37,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 0,
        },
        {
          key: 8,
          name: '这是一个产品名称',
          interest_rate: 1.37,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 1,
        },
        {
          key: 9,
          name: '这是一个产品名称',
          interest_rate: 2.92,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 1,
        },
        {
          key: 10,
          name: '这是一个产品名称',
          interest_rate: 0.43,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 3,
        },
      ],
      meta: {
        total: 100,
        per_page: 10,
        page: 1,
      },
    },
  });
};

const getRecycleList = (_, res) => {
  res.json({
    success: true,
    message: '',
    data: {
      layout: {
        tableColumn: [
          {
            title: '产品编号',
            dataIndex: 'key',
            key: 'key',
            type: 'text',
          },
          {
            title: '产品名称',
            dataIndex: 'name',
            key: 'name',
            type: 'text',
          },
          {
            title: '年化利率 (%)',
            dataIndex: 'interest_rate',
            key: 'interest_rate',
            type: 'text',
          },
          {
            title: '更新时间',
            dataIndex: 'update_time',
            key: 'update_time',
            type: 'datetime',
          },
          {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            type: 'status',
            data: [
              {
                value: 0,
                title: '关闭',
                color: 'geekblue',
              },
              {
                value: 1,
                title: '异常',
                color: 'red',
              },
              {
                value: 2,
                title: '运行中',
                color: 'blue',
              },
              {
                value: 3,
                title: '已上线',
                color: 'green',
              },
            ],
          },
          {
            title: '操作',
            dataIndex: 'actions',
            key: 'actions',
            type: 'actions',
            actions: [
              {
                component: 'button',
                text: '永久删除',
                type: 'primary',
                action: 'delete',
                danger: true,
                uri: '/recycle/delete',
                method: 'post',
              },
            ],
          },
        ],
        tableToolBar: [
          {
            component: 'button',
            text: '产品列表',
            type: 'primary',
            action: 'display',
            uri: '/products/display',
          },
          {
            component: 'button',
            text: '刷新',
            type: 'dashed',
            action: 'reload',
          },
        ],
        batchToolBar: [
          {
            component: 'button',
            text: '删除',
            type: 'primary',
            danger: true,
            action: 'delete',
            uri: '/product/delete',
            method: 'post',
          },
        ],
      },
      dataSource: [
        {
          key: 1,
          name: '这是一个产品名称',
          interest_rate: 0.43,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 0,
        },
        {
          key: 2,
          name: '这是一个产品名称',
          interest_rate: 1.37,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 1,
        },
        {
          key: 3,
          name: '这是一个产品名称',
          interest_rate: 2.92,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 2,
        },
        {
          key: 4,
          name: '这是一个产品名称',
          interest_rate: 1.37,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 3,
        },
        {
          key: 5,
          name: '这是一个产品名称',
          interest_rate: 2.92,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 2,
        },
      ],
      meta: {
        total: 100,
        per_page: 10,
        page: 1,
      },
    },
  });
};

const getDeleteMessage = (_, res) => {
  res.json({
    code: 300,
    message: 'delete success',
  });
};

export default {
  'GET /mock/manegement/product': getProductsList,
  'GET /mock/manegement/product/recycle': getRecycleList,
  'POST /product/delete': getDeleteMessage,
};
