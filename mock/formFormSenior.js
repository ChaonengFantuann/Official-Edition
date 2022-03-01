const getForm = (_, res) => {
  res.json({
    success: true,
    message: '',
    data: {
      layout: {
        card: [
          {
            name: '产品管理',
            title: '产品管理',
            data: [
              {
                type: 'text',
                title: '产品名',
                key: '产品名',
              },
              {
                type: 'text',
                title: '产品域名',
                key: '产品域名',
              },
              {
                type: 'select',
                title: '产品管理员',
                key: '产品管理员',
                data: [
                  {
                    title: '张三',
                    value: '张三',
                  },
                  {
                    title: '李四',
                    value: '李四',
                  },
                ],
              },
              {
                type: 'select',
                title: '审批人',
                key: '审批人',
                data: [
                  {
                    title: '张三',
                    value: '张三',
                  },
                  {
                    title: '李四',
                    value: '李四',
                  },
                ],
              },
              {
                type: 'datetime',
                title: '生效日期',
                key: '生效日期',
              },
              {
                type: 'select',
                title: '产品类型',
                key: '产品类型',
                data: [
                  {
                    title: 'A',
                    value: 'A',
                  },
                  {
                    title: 'B',
                    value: 'B',
                  },
                ],
              },
            ],
          },
          {
            name: '任务管理',
            title: '任务管理',
            data: [
              {
                type: 'text',
                title: '任务名',
                key: '任务名',
              },
              {
                type: 'text',
                title: '任务描述',
                key: '任务描述',
              },
              {
                type: 'select',
                title: '执行人',
                key: '执行人',
                data: [
                  {
                    title: '张三',
                    value: '张三',
                  },
                  {
                    title: '李四',
                    value: '李四',
                  },
                ],
              },
              {
                type: 'select',
                title: '责任人',
                key: '责任人',
                data: [
                  {
                    title: '张三',
                    value: '张三',
                  },
                  {
                    title: '李四',
                    value: '李四',
                  },
                ],
              },
              {
                type: 'datetime',
                title: '生效日期',
                key: '生效日期',
              },
              {
                type: 'select',
                title: '任务类型',
                key: '任务类型',
                data: [
                  {
                    title: 'A',
                    value: 'A',
                  },
                  {
                    title: 'B',
                    value: 'B',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  });
};

const getTable = (_, res) => {
  res.json({
    success: true,
    message: '',
    data: {
      layout: {
        tableColumn: [
          {
            title: '成员姓名',
            dataIndex: 'name',
            key: 'name',
            type: 'text',
          },
          {
            title: '工号',
            dataIndex: 'key',
            key: 'key',
            type: 'text',
          },
          {
            title: '所属部门',
            dataIndex: 'department',
            key: 'department',
            type: 'text',
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
                key: '删除',
                text: '删除',
              }
            ],
          },
        ],
        tableToolbar: [
          {
            component: 'button',
            text: '+ 增加新成员',
            type: 'default',
          },
        ],
      },
      dataSource: [
        {
          name: 'John Brown',
          key: '001',
          department: 'New York No.1 Lake Park',
        },
        {
          name: 'Jim Green',
          key: '002',
          department: 'London No.1 Lake Park',
        },
        {
          name: 'Joe Black',
          key: '003',
          department: 'Sidney No.1 Lake Park',
        },
      ],
    },
  });
};

export default {
  'GET /mock/form-senior': getForm,
  'GET /mock/table-senior': getTable,
}