const getForm = (_, res) => {
  res.json({
    success: true,
    message: '',
    data: {
      layout: {
        form: {
          data: [
            {
              type: 'text',
              title: '产品名称',
              key: '产品名称',
            },
            {
              type: 'datetime',
              title: '起始时间',
              key: '起始时间',
            },
            {
              type: 'number',
              title: '起存金额',
              key: '起存金额',
            },
            {
              type: 'number',
              title: '递增金额',
              key: '递增金额',
            },
            {
              type: 'number',
              title: '单人限额',
              key: '单人限额',
            },
            {
              type: 'number',
              title: '单日限额',
              key: '单日限额',
            },
            {
              type: 'textarea',
              title: '结算方式',
              key: '结算方式',
            },
            {
              type: 'textarea',
              title: '风险等级',
              key: '风险等级',
            },
            {
              type: 'textarea',
              title: '产品期限',
              key: '产品期限',
            },
            {
              type: 'number',
              title: '年化利率',
              key: '年化利率',
            },
          ],
        },
        actions: {
          name: 'actons',
          title: 'Actions',
          data: [
            {
              component: 'button',
              text: '提交',
              type: 'primary',
              action: '提交',
            },
            {
              component: 'button',
              text: '保存',
              type: 'default',
              action: '保存',
            },
            {
              component: 'button',
              text: '删除',
              type: 'dashed',
              action: '删除',
              danger: true,
            },
          ],
        },
      },
    },
  });
};

export default {
  'GET /mock/form': getForm,
};