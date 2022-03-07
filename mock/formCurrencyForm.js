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
            name: 'name1',
            title: 'title1',
            data: [
              {
                type: 'input',
                title: '产品编号',
                dataIndex: 'id',
                key: 'id',
                placeholder: '这是一段描述',
                maxLength: 16,
              },
              {
                type: 'input',
                title: '产品名称',
                dataIndex: 'name',
                key: 'name',
                placeholder: '这是一段描述',
                maxLength: 16,
              },
              {
                type: 'input',
                title: '产品期限',
                dataIndex: 'deadline',
                key: 'deadline',
                placeholder: '这是一段描述',
                maxLength: 16,
                data: [
                  {
                    title: '天',
                    value: 'day',
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
              {
                type: 'datePicker',
                title: '起息日期',
                dataIndex: 'data_value',
                key: 'data_value',
                placeholder: '这是一段描述'
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
                addonAfter: '%',
                stringMode: true,
                min: "0",
                max: "10",
                step: "0.01",
                placeholder: '这是一段描述'
              },
              {
                type: 'inputNumber',
                title: '起存金额',
                dataIndex: 'amount_mini',
                key: 'amount_mini',
                addonAfter: '元 (¥)',
                stringMode: true,
                min: "0",
                max: "10",
                step: "0.01",
                placeholder: '这是一段描述'
              },
              {
                type: 'inputNumber',
                title: '递增金额',
                dataIndex: 'amount_increa',
                key: 'amount_increa',
                addonAfter: '元 (¥)',
                stringMode: true,
                min: "0",
                max: "10",
                step: "0.01",
                placeholder: '这是一段描述'
              },
              {
                type: 'inputNumber',
                title: '单人限额',
                dataIndex: 'limit_single',
                key: 'limit_single',
                addonAfter: '元 (¥)',
                stringMode: true,
                min: "0",
                max: "10",
                step: "0.01",
                placeholder: '这是一段描述'
              },
              {
                type: 'inputNumber',
                title: '单日限额',
                dataIndex: 'limit_day',
                key: 'limit_day',
                addonAfter: '元 (¥)',
                stringMode: true,
                min: "0",
                max: "10",
                step: "0.01",
                placeholder: '这是一段描述'
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
                    value: 1
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
                    value: 1
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
                    value: 1
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
                    value: 1
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
                addonAfter: '元 (¥)',
                stringMode: false,
                min: '0',
                max: '10',
                placeholder: '这是一段描述'
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
                action: 'submit',
                uri: '/products/add',
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
                action: 'submit',
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
                action: 'submit',
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
                action: 'submit',
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
              },
            ],
          },
        ],
      },
      meta: {
        page: 1,
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
                type: 'input',
                title: '产品编号',
                dataIndex: 'id',
                key: 'id',
                placeholder: '这是一段描述',
                maxLength: 16,
              },
              {
                type: 'input',
                title: '产品名称',
                dataIndex: 'name',
                key: 'name',
                placeholder: '这是一段描述',
                maxLength: 16,
              },
              {
                type: 'input',
                title: '产品期限',
                dataIndex: 'deadline',
                key: 'deadline',
                placeholder: '这是一段描述',
                maxLength: 16,
                data: [
                  {
                    title: '天',
                    value: 'day',
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
              {
                type: 'datePicker',
                title: '起息日期',
                dataIndex: 'data_value',
                key: 'data_value',
                placeholder: '这是一段描述'
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
                addonAfter: '%',
                stringMode: true,
                min: "0",
                max: "10",
                step: "0.01",
                placeholder: '这是一段描述'
              },
              {
                type: 'inputNumber',
                title: '起存金额',
                dataIndex: 'amount_mini',
                key: 'amount_mini',
                addonAfter: '元 (¥)',
                stringMode: true,
                min: "0",
                max: "10",
                step: "0.01",
                placeholder: '这是一段描述'
              },
              {
                type: 'inputNumber',
                title: '递增金额',
                dataIndex: 'amount_increa',
                key: 'amount_increa',
                addonAfter: '元 (¥)',
                stringMode: true,
                min: "0",
                max: "10",
                step: "0.01",
                placeholder: '这是一段描述'
              },
              {
                type: 'inputNumber',
                title: '单人限额',
                dataIndex: 'limit_single',
                key: 'limit_single',
                addonAfter: '元 (¥)',
                stringMode: true,
                min: "0",
                max: "10",
                step: "0.01",
                placeholder: '这是一段描述'
              },
              {
                type: 'inputNumber',
                title: '单日限额',
                dataIndex: 'limit_day',
                key: 'limit_day',
                addonAfter: '元 (¥)',
                stringMode: true,
                min: "0",
                max: "10",
                step: "0.01",
                placeholder: '这是一段描述'
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
                    value: 1
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
                    value: 1
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
                    value: 1
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
                    value: 1
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
                addonAfter: '元 (¥)',
                stringMode: false,
                min: '0',
                max: '10',
                placeholder: '这是一段描述'
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
                action: 'submit',
                uri: '/products/edit/1',
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
                action: 'submit',
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
                action: 'submit',
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
                action: 'submit',
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
              },
            ],
          },
        ],
      },
      dataSource: {
        id: '1',
        name: 'aaa',
      },
      meta: {
        page: 0,
      },
    },
  });
};
export default {
  'GET /api/products/*': get1Form,
  'GET /api/products/add': getForm,
};