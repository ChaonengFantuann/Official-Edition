const getForm = (_, res) => {
  res.json({
    success: true,
    message: '',
    data: {
      page: {
        title: 'Product Add',
        type: 'page',
      },
      layout: {
        tabs: [
          {
            title: '第一步',
            subTitle: '第一个副标题',
            description: '这是一段描述',
            data: [
              {
                type: 'inputNumber',
                title: '产品编号',
                dataIndex: 'id',
                key: 'id',
                data: {
                  placeholder: '这是一段描述',
                  rules: [
                    {
                      required: true,
                      message: '这是一段提示信息!',
                    },
                  ],
                },
              },
              {
                type: 'input',
                title: '产品名称',
                dataIndex: 'name',
                key: 'name',
                data: {
                  placeholder: '这是一段描述',
                  allowClear: true,
                },
              },
              {
                type: 'inputNumber',
                title: '产品期限',
                dataIndex: 'deadline',
                key: 'deadline',
                data: {
                  placeholder: '这是一段描述',
                  addowAfter: [
                    {
                      title: '天',
                      value: 'day',
                    },
                    {
                      title: '周',
                      value: 'week',
                    },
                    {
                      title: '月',
                      value: 'month',
                    },
                    {
                      title: '季度',
                      value: 'season',
                    },
                    {
                      title: '年',
                      value: 'year',
                    },
                  ],
                },
              },
              {
                type: 'datePicker',
                title: '起息日期',
                dataIndex: 'data_value',
                key: 'data_value',
                placeholder: '这是一段描述',
              },
              {
                type: 'datePicker',
                title: '到息日期',
                dataIndex: 'data_due',
                key: 'data_due',
              },
            ],
          },
          {
            title: '第而步',
            subTitle: '第二个副标题',
            description: '这是一段描述',
            data: [
              {
                type: 'inputNumber',
                title: '年化利率',
                dataIndex: 'yearate',
                key: 'yearate',
                data: {
                  placeholder: '这是一段描述',
                  addowAfter: [
                    {
                      title: '%',
                      value: '%',
                    },
                  ],
                  accuracy: {
                    stringMode: true,
                    min: '-99.99',
                    max: '99.99',
                    step: '0.01',
                  },
                },
              },
              {
                type: 'inputNumber',
                title: '起存金额',
                dataIndex: 'amount_mini',
                key: 'amount_mini',
                data: {
                  placeholder: '这是一段描述',
                  addowAfter: [
                    {
                      title: 'RMB 元 (¥)',
                      value: 'yuan',
                    },
                  ],
                  controls: false,
                },
              },
              {
                type: 'inputNumber',
                title: '递增金额',
                dataIndex: 'amount_increa',
                key: 'amount_increa',
                data: {
                  placeholder: '这是一段描述',
                  addowAfter: [
                    {
                      title: 'RMB 元 (¥)',
                      value: 'yuan',
                    },
                  ],
                  controls: false,
                },
              },
              {
                type: 'inputNumber',
                title: '单人限额',
                dataIndex: 'limit_single',
                key: 'limit_single',
                data: {
                  placeholder: '这是一段描述',
                  addowAfter: [
                    {
                      title: 'RMB 元 (¥)',
                      value: 'yuan',
                    },
                  ],
                  controls: false,
                },
              },
              {
                type: 'inputNumber',
                title: '单日限额',
                dataIndex: 'limit_day',
                key: 'limit_day',
                data: {
                  placeholder: '这是一段描述',
                  addowAfter: [
                    {
                      title: 'RMB 元 (¥)',
                      value: 'yuan',
                    },
                  ],
                  controls: false,
                },
              },
            ],
          },
          {
            title: '第三步',
            subTitle: '第三个副标题',
            description: '这是一段描述',
            data: [
              {
                type: 'select',
                title: '风险等级',
                dataIndex: 'level-risk',
                key: 'level_risk',
                data: [
                  {
                    title: '高',
                    value: 1,
                  },
                  {
                    title: '中',
                    value: 2,
                  },
                  {
                    title: '低',
                    value: 3,
                  },
                ],
              },
              {
                type: 'select',
                title: '结息方式',
                dataIndex: 'settle_way',
                key: 'settle_way',
                data: [
                  {
                    title: '方式1',
                    value: 1,
                  },
                  {
                    title: '方式2',
                    value: 2,
                  },
                  {
                    title: '方式3',
                    value: 3,
                  },
                ],
              },
              {
                type: 'select',
                title: '产品状态',
                dataIndex: 'status',
                key: 'status',
                data: [
                  {
                    title: '异常',
                    value: 1,
                  },
                  {
                    title: '关闭',
                    value: 2,
                  },
                  {
                    title: '运行中',
                    value: 3,
                  },
                  {
                    title: '已上线',
                    value: 4,
                  },
                ],
              },
              {
                type: 'select',
                title: '购买权限',
                dataIndex: 'permission',
                key: 'permission',
                data: [
                  {
                    title: '无',
                    value: 1,
                  },
                  {
                    title: '低',
                    value: 2,
                  },
                  {
                    title: '中',
                    value: 3,
                  },
                  {
                    title: '高',
                    value: 4,
                  },
                ],
              },
              {
                type: 'inputNumber',
                title: '产品库存',
                dataIndex: 'inventory',
                key: 'inventory',
                data: {
                  placeholder: '这是一段描述',
                  addowAfter: [
                    {
                      title: 'RMB 元 (¥)',
                      value: 'yuan',
                    },
                  ],
                  controls: false,
                },
              },
            ],
          },
        ],
        actions: [
          {
            name: 'actons1',
            title: 'Actions1',
            data: [
              {
                component: 'button',
                text: '清空',
                type: 'default',
                action: 'clear',
              },
              {
                component: 'button',
                text: '下一步',
                type: 'primary',
                action: 'next',
                uri: '/product/add1',
                method: 'post',
              },
            ],
          },
          {
            name: 'actons2',
            title: 'Actions2',
            data: [
              {
                component: 'button',
                text: '上一步',
                type: 'primary',
                action: 'previous',
              },
              {
                component: 'button',
                text: '清空',
                type: 'default',
                action: 'clear',
              },
              {
                component: 'button',
                text: '下一步',
                type: 'primary',
                action: 'next',
                uri: '/product/add1',
                method: 'post',
              },
            ],
          },
          {
            name: 'actons3',
            title: 'Actions3',
            data: [
              {
                component: 'button',
                text: '上一步',
                type: 'primary',
                action: 'previous',
              },
              {
                component: 'button',
                text: '清空',
                type: 'default',
                action: 'clear',
              },
              {
                component: 'button',
                text: '完成',
                type: 'primary',
                action: 'submit',
                uri: '/product/add2',
                method: 'post',
              },
            ],
          },
        ],
      },
    },
  });
};
const get1Form = (_, res) => {
  res.json({
    success: true,
    message: '',
    data: {
      page: {
        title: 'Product Add',
        type: 'page',
      },
      layout: {
        tabs: [
          {
            title: '第一步',
            subTitle: '第一个副标题',
            description: '这是一段描述',
            data: [
              {
                type: 'inputNumber',
                title: '产品编号',
                dataIndex: 'id',
                key: 'id',
                data: {
                  placeholder: '这是一段描述',
                  rules: [
                    {
                      required: true,
                      message: '这是一段提示信息!',
                    },
                  ],
                },
              },
              {
                type: 'input',
                title: '产品名称',
                dataIndex: 'name',
                key: 'name',
                data: {
                  placeholder: '这是一段描述',
                  allowClear: true,
                },
              },
              {
                type: 'inputNumber',
                title: '产品期限',
                dataIndex: 'deadline',
                key: 'deadline',
                data: {
                  placeholder: '这是一段描述',
                  addowAfter: [
                    {
                      title: '天',
                      value: 'day',
                    },
                    {
                      title: '周',
                      value: 'week',
                    },
                    {
                      title: '月',
                      value: 'month',
                    },
                    {
                      title: '季度',
                      value: 'season',
                    },
                    {
                      title: '年',
                      value: 'year',
                    },
                  ],
                },
              },
              {
                type: 'datePicker',
                title: '起息日期',
                dataIndex: 'data_value',
                key: 'data_value',
                placeholder: '这是一段描述',
              },
              {
                type: 'datePicker',
                title: '到息日期',
                dataIndex: 'data_due',
                key: 'data_due',
              },
            ],
          },
          {
            title: '第而步',
            subTitle: '第二个副标题',
            description: '这是一段描述',
            data: [
              {
                type: 'inputNumber',
                title: '年化利率',
                dataIndex: 'yearate',
                key: 'yearate',
                data: {
                  placeholder: '这是一段描述',
                  addowAfter: [
                    {
                      title: '%',
                      value: '%',
                    },
                  ],
                  accuracy: {
                    stringMode: true,
                    min: '-99.99',
                    max: '99.99',
                    step: '0.01',
                  },
                },
              },
              {
                type: 'inputNumber',
                title: '起存金额',
                dataIndex: 'amount_mini',
                key: 'amount_mini',
                data: {
                  placeholder: '这是一段描述',
                  addowAfter: [
                    {
                      title: 'RMB 元 (¥)',
                      value: 'yuan',
                    },
                  ],
                  controls: false,
                },
              },
              {
                type: 'inputNumber',
                title: '递增金额',
                dataIndex: 'amount_increa',
                key: 'amount_increa',
                data: {
                  placeholder: '这是一段描述',
                  addowAfter: [
                    {
                      title: 'RMB 元 (¥)',
                      value: 'yuan',
                    },
                  ],
                  controls: false,
                },
              },
              {
                type: 'inputNumber',
                title: '单人限额',
                dataIndex: 'limit_single',
                key: 'limit_single',
                data: {
                  placeholder: '这是一段描述',
                  addowAfter: [
                    {
                      title: 'RMB 元 (¥)',
                      value: 'yuan',
                    },
                  ],
                  controls: false,
                },
              },
              {
                type: 'inputNumber',
                title: '单日限额',
                dataIndex: 'limit_day',
                key: 'limit_day',
                data: {
                  placeholder: '这是一段描述',
                  addowAfter: [
                    {
                      title: 'RMB 元 (¥)',
                      value: 'yuan',
                    },
                  ],
                  controls: false,
                },
              },
            ],
          },
          {
            title: '第三步',
            subTitle: '第三个副标题',
            description: '这是一段描述',
            data: [
              {
                type: 'select',
                title: '风险等级',
                dataIndex: 'level-risk',
                key: 'level_risk',
                data: [
                  {
                    title: '高',
                    value: 1,
                  },
                  {
                    title: '中',
                    value: 2,
                  },
                  {
                    title: '低',
                    value: 3,
                  },
                ],
              },
              {
                type: 'select',
                title: '结息方式',
                dataIndex: 'settle_way',
                key: 'settle_way',
                data: [
                  {
                    title: '方式1',
                    value: 1,
                  },
                  {
                    title: '方式2',
                    value: 2,
                  },
                  {
                    title: '方式3',
                    value: 3,
                  },
                ],
              },
              {
                type: 'select',
                title: '产品状态',
                dataIndex: 'status',
                key: 'status',
                data: [
                  {
                    title: '异常',
                    value: 1,
                  },
                  {
                    title: '关闭',
                    value: 2,
                  },
                  {
                    title: '运行中',
                    value: 3,
                  },
                  {
                    title: '已上线',
                    value: 4,
                  },
                ],
              },
              {
                type: 'select',
                title: '购买权限',
                dataIndex: 'permission',
                key: 'permission',
                data: [
                  {
                    title: '无',
                    value: 1,
                  },
                  {
                    title: '低',
                    value: 2,
                  },
                  {
                    title: '中',
                    value: 3,
                  },
                  {
                    title: '高',
                    value: 4,
                  },
                ],
              },
              {
                type: 'inputNumber',
                title: '产品库存',
                dataIndex: 'inventory',
                key: 'inventory',
                data: {
                  placeholder: '这是一段描述',
                  addowAfter: [
                    {
                      title: 'RMB 元 (¥)',
                      value: 'yuan',
                    },
                  ],
                  controls: false,
                },
              },
            ],
          },
        ],
        actions: [
          {
            name: 'actons1',
            title: 'Actions1',
            data: [
              {
                component: 'button',
                text: '清空',
                type: 'default',
                action: 'clear',
              },
              {
                component: 'button',
                text: '下一步',
                type: 'primary',
                action: 'next',
                uri: '/product/add1',
                method: 'post',
              },
            ],
          },
          {
            name: 'actons2',
            title: 'Actions2',
            data: [
              {
                component: 'button',
                text: '上一步',
                type: 'primary',
                action: 'previous',
              },
              {
                component: 'button',
                text: '清空',
                type: 'default',
                action: 'clear',
              },
              {
                component: 'button',
                text: '下一步',
                type: 'primary',
                action: 'next',
                uri: '/product/add1',
                method: 'post',
              },
            ],
          },
          {
            name: 'actons3',
            title: 'Actions3',
            data: [
              {
                component: 'button',
                text: '上一步',
                type: 'primary',
                action: 'previous',
              },
              {
                component: 'button',
                text: '清空',
                type: 'default',
                action: 'clear',
              },
              {
                component: 'button',
                text: '完成',
                type: 'primary',
                action: 'submit',
                uri: '/product/add2',
                method: 'post',
              },
            ],
          },
        ],
      },
      dataSource: {
        id: '1',
      },
    },
  });
};

const getFormMessage = (_, res) => {
  res.json({
    code: 300,
    message: '提交成功',
  });
};
const getFormMessage1 = (_, res) => {
  res.json({
    code: 301,
    message: '',
  });
};

const getOrchestration = (_, res) => {
  res.json({
    code: 300,
    message: '提交成功',
  });
};

export default {
  'GET /mock/manegement/product/edit/*': get1Form,
  'GET /mock/manegement/product/add': getForm,
  'POST /api/product/add2': getFormMessage,
  'POST /api/product/add1': getFormMessage1,
  'POST /api/management/orchestration': getOrchestration,
};
