const getProcessList = (_, res) => {
  res.json({
    success: true,
    message: '',
    data: {
      layout: {
        tableColumn: [
          {
            title: '流程编号',
            dataIndex: 'key',
            key: 'key',
            type: 'text',
            sorter: {
              compare: (a, b) => a.key - b.key,
              multiple: 1,
            },
          },
          {
            title: '流程名称',
            dataIndex: 'name',
            key: 'name',
            type: 'text',
          },
          {
            title: '流程描述',
            dataIndex: 'description',
            key: 'description',
            type: 'text',
          },
          {
            title: '更新时间',
            dataIndex: 'update_time',
            key: 'update_time',
            type: 'datetime',
            sorter: {
              compare: (a, b) => a.update_time - b.update_time,
              multiple: 2,
            },
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
                uri: '/manegement/process/edit/:key',
              },
              {
                component: 'button',
                text: '详情',
                type: 'default',
                action: 'detial',
                uri: '/manegement/process/detail/:key',
              },
              {
                component: 'button',
                text: '删除',
                type: 'default',
                action: 'delete',
                danger: true,
                uri: '/process/delete',
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
            uri: '/manegement/process/add',
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
            uri: '/manegement/process/recycle',
          },
        ],
        batchToolBar: [
          {
            component: 'button',
            text: '删除',
            type: 'primary',
            danger: true,
            action: 'delete',
            uri: '/process/delete',
            method: 'post',
          },
        ],
      },
      dataSource: [
        {
          key: 1,
          name: '这是一个流程名称',
          update_time: '2022-02-27T20:10:33+08:00',
          description: '这是一段流程描述这是一段流程描述',
        },
        {
          key: 2,
          name: '这是一个流程名称',
          interest_rate: 1.37,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 1,
          description: '这是一段流程描述这是一段流程描述',
        },
        {
          key: 3,
          name: '这是一个流程名称',
          interest_rate: 2.92,
          update_time: '2022-02-27T20:10:33+08:00',
          status: 2,
          description: '这是一段流程描述这是一段流程描述',
        },
      ],
      meta: {
        total: 3,
        per_page: 10,
        page: 1,
      },
    },
  });
};

export default {
  'GET /mock/manegement/process': getProcessList,
  'GET /mock/manegement/process/edit/1': getProcessList,
};
