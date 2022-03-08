import { Tabs, Form, Input, Button, Checkbox, Card } from 'antd';
import styles from "./index.less";


const Login = () => {

  const { TabPane } = Tabs;

  const callback = (key) => {
    console.log(key);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.page}>
      <Card
        bordered={false}
        style={{ width: 500 }}
      >
        <Tabs
          defaultActiveKey="1"
          size="large"
          onChange={callback}
        >
          <TabPane tab="Tab 1" key="1">
            <Form
              name="basic"
              // labelCol={{ span: 10 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入您的用户名！',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入您的密码',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 9,
                  span: 6,
                }}
              >
                <Button type="primary" htmlType="submit" style={{ width: 200 }} >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default Login;