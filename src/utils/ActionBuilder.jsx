import { Button } from "antd";

const ActionBuilder = (
  action,
  actionHandler,
  loading = false,
  record = {},
) => {
  return (action || []).map((action) => {
    if (action.component === 'button') {
      // console.log('aaa');
      return (
        <Button
          key={action.text}
          type={action.type}
          onClick={() => {
            // console.log('点击时间触发');
            actionHandler(action, record);
          }}
          danger={action?.danger || false}
          loading={loading}
        >
          {action.text}
        </Button>
      )
    }
    return null;
  })
}

export default ActionBuilder;