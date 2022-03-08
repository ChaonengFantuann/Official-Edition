import { useEffect } from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { Form, Card, Row, Col, Space, Steps, Input } from 'antd';
import { useRequest, useLocation, history } from 'umi';
import FormBuiler from "@/utils/FormBuilder";
import ActionBuilder from "@/utils/ActionBuilder";
import { submitFieldsAdaptor } from "@/utils/helper";
import styles from "./index.less";

const ClientOrder = () => {

  const { Step } = Steps;
  const [form] = Form.useForm();
  const loaction = useLocation();
  console.log(loaction.pathname);

  const init = useRequest(`http://localhost:8000/api${loaction.pathname.replace('/edit', '')}`);
  // console.log(init.data?.layout.tabs[init.data.meta.page].data);

  const request = useRequest(
    (values) => {
      // message.loading({ content: 'Processing...', key: 'process', duration: 0 })
      const { uri, method, ...formValues } = values;
      return {
        url: `http://localhost:8000/mock${uri}`,
        method: method,
        // body: JSON.stringify(formValues),
        data: {
          ...submitFieldsAdaptor(formValues),
        }
      };
    },
    {
      manual: true,
      // onSuccess: (data) => {
      //   message.success({
      //     content: (data?.message || []),
      //     key: 'process',
      //   });
      //   history.goBack();
      // },
      // formatResult: (res) => {
      //   return res;
      // }
    }
  );
  useEffect(() => {
    if (init.data?.dataSource) {
      form.setFieldsValue(init.data.dataSource);
    }
  }, [init.data?.dataSource])
  const actionHandler = action => {
    // console.log("bbb");
    switch (action.action) {
      case 'submit':
        console.log('提交');
        form.setFieldsValue({ uri: action.uri, method: action.method })
        form.submit();
        break;
      // case 'cancel':
      //   hideModal();
      //   break;
      case 'clear':
        form.resetFields();
        break;
      default:
        break;
    }
  }

  const onFinish = (values) => {
    console.log(values);
    request.run(values);
  }

  const formInitValues = (init.data?.dataSource || {})
  console.log(formInitValues);

  return (
    <PageContainer>
      <Form
        onFinish={onFinish}
        form={form}
        initialValues={{
        }}

      >
        <Card>
          <Row>
            <Col sm={6} />
            <Col sm={12} className={styles.step}>
              <Steps current={init.data?.meta.page}>
                <Step title="第一步" subTitle="这是一段文字" description="这是一段描述" />
                <Step title="第二步" subTitle="这是一段文字" description="这是一段描述" />
                <Step title="第三步" subTitle="这是一段文字" description="这是一段描述" />
              </Steps>
              {FormBuiler(init.data?.layout.tabs[init.data.meta.page].data)}
              <Space className={styles.actions} size='large'>
                {ActionBuilder(init.data?.layout.actions[init.data.meta.page].data, actionHandler)}
              </Space>
              <Form.Item name="uri" key="uri" hidden>
                <Input />
              </Form.Item>
              <Form.Item name="method" key="method" hidden>
                <Input />
              </Form.Item>
            </Col>
            <Col sm={6} />
          </Row>
        </Card>
      </Form>
    </PageContainer>
  );
};

export default ClientOrder;