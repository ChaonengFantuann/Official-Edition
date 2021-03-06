const getForm = (_, res) => {
  res.json({
    success: true,
    message: '',
    data: {
      page: {
        title: 'Client Order',
        type: 'page',
      },
      layout: {
        tabs: [
          {
            name: 'name1',
            title: 'title1',
            data: [
              {
                type: 'select',
                title: '付款账户',
                dataIndex: 'payment_account',
                key: 'payment_account',
                data: [
                  {
                    title: 'AntDesign@example.com',
                    value: 1,
                  },
                ],
              },
              {
                type: 'input',
                title: '支付方式',
                dataIndex: 'payment_method',
                key: 'payment_method',
                data: {
                  placeholder: '这是一段描述',
                  addowBefore: [
                    {
                      title: '支付宝',
                      value: 'Alipay',
                    },
                    {
                      title: '微信支付',
                      value: 'Wechat_payment',
                    },
                  ],
                },
              },
              {
                type: 'input',
                title: '产品持有人姓名',
                dataIndex: 'user_name',
                key: 'user_name',
                data: {
                  placeholder: '这是一段描述',
                },
              },
              {
                type: 'input',
                title: '购买金额',
                dataIndex: 'purchase_amount',
                key: 'purchase_amount',
                data: {
                  placeholder: '这是一段描述',
                },
              },
            ],
          },
          {
            name: 'name2',
            title: 'title2',
            data: [
              {
                type: 'inputNumber',
                title: '支付密码',
                dataIndex: 'amount_mini',
                key: 'amount_mini',
                data: {
                  placeholder: '这是一段描述',
                  controls: false,
                  // bordered: false,
                },
              },
              // {
              //   type: 'input',
              //   title: '支付账户',
              //   dataIndex: 'payment_account',
              //   key: 'payment_account',
              //   // disabled: true,
              //   data: {
              //     bordered: false,
              //   },
              // },
            ],
          },
          {
            name: 'name3',
            title: 'title3',
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
                uri: '/product/purchase1',
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
                text: '完成',
                type: 'primary',
                action: 'submit',
                uri: '/product/purchase2',
                method: 'post',
              },
            ],
          },
        ],
      },
      dataSource: {
        text: {
          payment_account: 'AntDEsign@example.com',
          payment_method: 'XXXX XXXX XXXX XXXX 某银行储蓄卡',
          user_name: '张三',
          purchase_amount: '50,000.00',
        },
      },
      meta: {
        page: 2,
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
            name: 'name1',
            title: 'title1',
            data: [
              {
                type: 'inputNumber',
                title: '产品编号',
                dataIndex: 'id',
                key: 'id',
                data: {
                  placeholder: '这是一段描述',
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
            name: 'name2',
            title: 'title2',
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
            name: 'name3',
            title: 'title3',
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
                uri: '/product/purchase1',
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
                uri: '/product/purchase1',
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
                uri: '/product/purchase2',
                method: 'post',
              },
            ],
          },
        ],
      },
      dataSource: {
        name: 'aaa',
        text: {
          payment_account: 'AntDEsign@example.com',
          payment_method: 'XXXX XXXX XXXX XXXX 某银行储蓄卡',
          user_name: '张三',
          purchase_amount: '50,000.00',
        },
      },
      meta: {
        page: 2,
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

export default {
  'GET /mock/client/product/purchase/1': getForm,
  'GET /mock/client/product/purchase/*': getForm,
  'POST /api/product/purchase2': getFormMessage,
  'POST /api/product/purchase1': getFormMessage1,
};
