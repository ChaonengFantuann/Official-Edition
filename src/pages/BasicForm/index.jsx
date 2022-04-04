import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Form, Card, Row, Col, Space, Steps, Input, Typography, Divider, message } from 'antd';
import { useRequest, useLocation, history } from 'umi';
import FormBuiler from '@/utils/FormBuilder';
import ActionBuilder from '@/utils/ActionBuilder';
import { submitFieldsAdaptor } from '@/utils/helper';
import styles from './index.less';
import Title from 'antd/lib/skeleton/Title';

const CurrencyForm = () => {
  const [page, setPage] = useState(0);

  const { Step } = Steps;
  const [form] = Form.useForm();
  const loaction = useLocation();
  const { Text, Link, Title } = Typography;
  // console.log(loaction.pathname);

  const init = useRequest(`http://localhost:8000/mock${loaction.pathname}`);
  // const init = useRequest(`106.14.187.88:8083/addProductPage`);
  console.log(init);
  // console.log(`http://localhost:8000/mock${loaction.pathname.replace('/order', '')}`);
  // console.log(init);

  const request = useRequest(
    (values) => {
      // message.loading({ content: 'Processing...', key: 'process', duration: 0 })
      const { uri, method, ...formValues } = values;
      return {
        url: `http://localhost:8000/api${uri}`,
        method: method,
        // body: JSON.stringify(formValues),
        data: {
          ...submitFieldsAdaptor(formValues),
        },
      };
    },
    {
      manual: true,
      onSuccess: (data) => {
        if (data?.code === 301) {
          setPage(page + 1);
        }
        console.log(data);
        if (data?.code === 300) {
          message.success({
            content: data?.message || [],
            key: 'process',
          });
          history.goBack();
        }
      },
      formatResult: (res) => {
        return res;
      },
    },
  );

  useEffect(() => {
    if (init.data?.dataSource) {
      form.setFieldsValue(init.data.dataSource);
    }
  }, [init.data?.dataSource]);

  const actionHandler = (action) => {
    // console.log("bbb");
    switch (action.action) {
      case 'next':
        form.setFieldsValue({ uri: action.uri, method: action.method });
        form.submit();
        break;
      case 'previous':
        setPage(page - 1);
        break;
      case 'clear':
        form.resetFields();
        break;
      case 'submit':
        console.log('提交');
        form.setFieldsValue({ uri: action.uri, method: action.method });
        form.submit();
        break;
      // case 'cancel':
      //   hideModal();
      //   break;

      default:
        break;
    }
  };

  const onFinish = (values) => {
    console.log(values);
    request.run(values);
  };

  const formInitValues = init.data?.dataSource || {};
  // console.log(formInitValues);

  const OrderLayout = () => {
    if (page === 1 && init.data?.page.title === 'Client Order') {
      return (
        <Space direction="vertical" className={styles.messege}>
          <Title level={5}>{`支付账户：${init.data?.dataSource?.text?.payment_account}`}</Title>
          <Title level={5}>{`银行卡：${init.data?.dataSource?.text?.payment_method}`}</Title>
          <Title level={5}>{`持有资产人姓名：${init.data?.dataSource?.text?.user_name}`}</Title>
          <Title level={5}>{`购买金额：${init.data?.dataSource?.text?.purchase_amount}`}</Title>
          <Divider />
        </Space>
      );
    }
    return null;
  };

  const SuccessLayout = () => {};

  return (
    <PageContainer>
      <Form onFinish={onFinish} form={form} initialValues={{}}>
        <Card>
          <Row>
            <Col sm={6} />
            <Col sm={12} className={styles.step}>
              <Steps current={page}>
                <Step
                  title={init.body?.layout?.tabs[0]?.title}
                  subTitle={init.data?.layout?.tabs[0]?.subTitle}
                  description={init.data?.layout?.tabs[0]?.description}
                />
                <Step
                  title={init.data?.layout?.tabs[1]?.title}
                  subTitle={init.data?.layout?.tabs[1]?.subTitle}
                  description={init.data?.layout?.tabs[1]?.description}
                />
                <Step
                  title={init.data?.layout?.tabs[2]?.title}
                  subTitle={init.data?.layout?.tabs[2]?.subTitle}
                  description={init.data?.layout?.tabs[2]?.description}
                />
              </Steps>
            </Col>
            <Col sm={6} />
          </Row>
          <Row>
            <Col sm={7} />
            <Col sm={10}>
              {OrderLayout()}
              {SuccessLayout()}
              {/* {FormBuiler(init.data?.layout.tabs[init.data.meta.page].data)} */}
              {FormBuiler(init.data?.layout.tabs[page].data)}
              <Space className={styles.actions} size="large">
                {/* {ActionBuilder(init.data?.layout.actions[init.data.meta.page].data, actionHandler)} */}
                {ActionBuilder(init.data?.layout.actions[page].data, actionHandler)}
              </Space>
              <Form.Item name="uri" key="uri" hidden>
                <Input />
              </Form.Item>
              <Form.Item name="method" key="method" hidden>
                <Input />
              </Form.Item>
            </Col>
            <Col sm={7} />
          </Row>
        </Card>
      </Form>
    </PageContainer>
  );
};

export default CurrencyForm;
