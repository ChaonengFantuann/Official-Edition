const getCard = (_, res) => {
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
                color: 'geekblue'
              },
              {
                value: 1,
                title: '异常',
                color: 'red'
              },
              {
                value: 2,
                title: '运行中',
                color: 'blue'
              },
              {
                value: 3,
                title: '已上线',
                color: 'green'
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
                uri: '/products/edit/:key',
              },
              {
                component: 'button',
                text: '删除',
                type: 'default',
                action: 'delete',
                danger: true,
                uri: '/product/delete',
                method: 'post'
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
            uri: '/products/add'
          },
          {
            component: 'button',
            text: '刷新',
            type: 'dashed',
            action: 'reload'
          },
          {
            component: 'button',
            text: '回收站',
            type: 'default',
            action: 'recycle',
            uri: '/products/recycle',
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
          title: '我是标题',
          description: '一句话描述一句话描述',
          img: '',
          uri: '',
        },
        {
          title: '我是标题',
          description: '一句话描述一句话描述',
          img: '',
          uri: '',
        },
        {
          title: '我是标题',
          description: '一句话描述一句话描述',
          img: '',
          uri: '',
        },
        {
          title: '我是标题',
          description: '一句话描述一句话描述',
          img: '',
          uri: '',
        },
        {
          title: '我是标题',
          description: '一句话描述一句话描述',
          img: '',
          uri: '',
        },
        {
          title: '我是标题',
          description: '一句话描述一句话描述',
          img: '',
          uri: '',
        },
        {
          title: '我是标题',
          description: '一句话描述一句话描述',
          img: '',
          uri: '',
        },
        {
          title: '我是标题',
          description: '一句话描述一句话描述',
          img: '',
          uri: '',
        },
        {
          title: '我是标题',
          description: '一句话描述一句话描述',
          img: '',
          uri: '',
        },
        {
          title: '我是标题',
          description: '一句话描述一句话描述',
          img: '',
          uri: '',
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

export default {
  'GET /mock/client/product/card': getCard,
};