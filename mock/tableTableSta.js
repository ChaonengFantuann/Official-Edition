const getTable = (_, res) => {
  res.json({
    success: true,
    message: '',
    data: {
      layout: {
        tableColumn: [
          {
            title: '规则编号',
            dataIndex: 'key',
            key: 'key',
            type: 'text',
          },
          {
            title: '描述',
            dataIndex: 'description',
            key: 'description',
            type: 'text',
          },
          {
            title: '服务器调用次数',
            dataIndex: 'severCallNum',
            key: 'severCallNum',
            type: 'text',
          },
          {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            type: 'tag',
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
            title: '更新时间',
            dataIndex: 'datatime',
            key: 'datatime',
            type: 'datatime',
          },
          {
            title: '操作',
            dataIndex: 'actions',
            key: 'actions',
            type: 'actions',
            actions: [
              {
                key: '编辑',
                text: '编辑',
              },
              {
                key: '订阅警报',
                text: '订阅警报',
              }
            ],
          },
        ],
      },
      dataSource: [
        {
          key: 1,
          description: '这是一段描述',
          severCallNum: '357万',
          status: 0,
          datatime: '2022-02-27T20:10:33+08:00',
        },
        {
          key: 2,
          description: '这是一段描述',
          severCallNum: '357万',
          status: 1,
          datatime: '2022-02-27T20:10:33+08:00',
        },
        {
          key: 3,
          description: '这是一段描述',
          severCallNum: '357万',
          status: 2,
          datatime: '2022-02-27T20:10:33+08:00',
        },
        {
          key: 4,
          description: '这是一段描述',
          severCallNum: '357万',
          status: 3,
          datatime: '2022-02-27T20:10:33+08:00',
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
  'GET /mock/table': getTable,
};