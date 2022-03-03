import { PageContainer } from "@ant-design/pro-layout";
import { Form, Card, Row, Col, Space } from 'antd';
import { useRequest, useLocation, history } from 'umi';
import FormBuiler from "@/utils/FormBuilder";
import ActionBuilder from "@/utils/ActionBuilder";
import { Steps } from 'antd';
import styles from "./index.less";

const CurrencyForm = () => {

  const { Step } = Steps;

  const init = useRequest(`http://localhost:8000/currency/form`);
  console.log(init.data?.layout.tabs[init.data.meta.page].data);

  return (
    <PageContainer>
      <Form>
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
              <Space className={styles.actions}>
                {ActionBuilder(init.data?.layout.actions[init.data.meta.page].data)}
              </Space>
            </Col>
            <Col sm={6} />
          </Row>
        </Card>
      </Form>
    </PageContainer>
  );
};

export default CurrencyForm;