import { useRequest } from 'umi';
import { Form, Card, Row, Col, Space } from 'antd';
import { PageContainer } from "@ant-design/pro-layout";
import FormBuiler from '@/utils/FormBuilder';
import ActionBuilder from '@/utils/ActionBuilder';
import style from './index.less';

const FormBasic = () => {

  const init = useRequest(`http://localhost:8000/mock/form`);
  // console.log(init);

  return (
    <PageContainer>
      <Form>
        <Card loading={init.loading}>
          <Row>
            <Col sm={6} />
            <Col sm={12}>
              {FormBuiler(init.data?.layout.form.data)}
            </Col>
            <Col sm={6} />
          </Row>
          <Row>
            <Col sm={6} />
            <Col sm={12} className={style.formToolbar}>
              <Space>
                {ActionBuilder(init.data?.layout.actions.data)}
              </Space>
            </Col>
            <Col sm={6} />
          </Row>
        </Card>
      </Form>
    </PageContainer>
  );
};

export default FormBasic;