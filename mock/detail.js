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
                uri: '/products/edit/:key',
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
            text: '返回',
            type: 'primary',
            action: 'return',
            uri: '/manegement/product',
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
          title: '产品编号',
          content: '1',
        },
        {
          title: '产品名称',
          content: '这是一个名称',
        },
        {
          title: '产品期限',
          content: '1年',
        },
        {
          title: '起息日期',
          content: '2022-3-5',
        },
        {
          title: '到息日期',
          content: '2023-3-5',
        },
        {
          title: '年化利率',
          content: '5.37 %',
        },
        {
          title: '起存金额',
          content: '10,000 ¥',
        },
        {
          title: '递增金额',
          content: '1,000 ¥',
        },
        {
          title: '单人限额',
          content: '1,000,000 ¥',
        },
        {
          title: '单日限额',
          content: '10,000 ¥',
        },
        {
          title: '风险等级',
          content: '低',
        },
        {
          title: '结息方式',
          content: '方式1',
        },
        {
          title: '产品状态',
          content: '已上线',
        },
        {
          title: '购买权限',
          content: '中',
        },
        {
          title: '产品库存',
          content: '1,000,000,000 ¥',
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
  'GET /mock/manegement/product/detail/1': getProductsList,
  'GET /mock/manegement/product/detail/*': getProductsList,
};
