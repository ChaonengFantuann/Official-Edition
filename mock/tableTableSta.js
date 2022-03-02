const getList = (_, res) => {
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
            type: 'datatime',
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
                uri: '',
              },
              {
                component: 'button',
                text: '删除',
                type: 'default',
                action: 'delete',
                danger: true,
                uri: '',
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
            action: 'jump',
            uri: '',
          },
        ],
        searchToolbar: {
          data: [
            {
              title: '规则编号',
              dataIndex: 'role',
              key: '规则编号',
              type: 'text',
            },
            {
              title: '状态',
              dataIndex: 'status',
              key: '状态',
              type: 'select',
              data: [
                {
                  value: 0,
                  title: '关闭',
                  key: '关闭',
                },
                {
                  value: 1,
                  title: '异常',
                  key: '异常',
                },
                {
                  value: 2,
                  title: '运行中',
                  key: '运行中',
                },
                {
                  value: 3,
                  title: '已上线',
                  key: '已上线',
                },
              ],
            },
          ],
          actions: [
            {
              component: 'button',
              text: '查询',
              type: 'primary',
              key: '查询',
            },
            {
              component: 'button',
              text: '重置',
              type: 'default',
              key: '重置',
            },
          ]
        },
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
        {
          key: 11,
          name: '这是一个产品名称',
          interest_rate: 0.43,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 3,
        },
      ],
      meta: {
        total: 4,
        per_page: 10,
        page: 1,
      },
    },
  });
};

export default {
  'GET /formal/list': getList,
};