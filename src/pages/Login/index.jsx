import { Tabs, Form, Input, Button, Checkbox, Card, Radio } from 'antd';
import { history } from 'umi';
import styles from "./index.less";


const Login = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFormLayoutChange = () => {
    console.log("change");
  };

  const routeJump = () => {
    console.log("aaa");
    history.push("/welcome");
  };

  return (
    <div className={styles.page}>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 4 }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item
          label="端口"
          name="layout"
          rules={[
            {
              required: true,
              message: '请选择您要登录的端口！',
            },
          ]}
        >
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="1">客户端</Radio.Button>
            <Radio.Button value="2">管理端</Radio.Button>
          </Radio.Group>
        </Form.Item>
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
        <Form.Item wrapperCol={{ offset: 10, span: 4 }}
        >
          <Button type="primary" htmlType="submit" block={true} onClick={routeJump}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;