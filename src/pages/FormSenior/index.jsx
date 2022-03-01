import { Form, Card, Row, Col, Space, Table } from 'antd';
import { useRequest } from 'umi';
import { PageContainer } from "@ant-design/pro-layout";
import FormBuiler from './components/FormBuilder';
import ColumnBuilder from '@/utils/ColumnBuilder';
import ActionBuilder from '@/utils/ActionBuilder';
import styles from './index.less';

const FormSenior = () => {

  const init = useRequest(`http://localhost:8000/mock/form-senior`);
  // console.log(init);

  const _init = useRequest(`http://localhost:8000/mock/table-senior`);
  console.log(init);

  const formLayout = () => {
    return (
      (init.data?.layout.card || []).map((card) => {
        return (
          <Form className={styles.formCard}>
            <Card title={card.title}>
              <Row gutter={96}>
                {FormBuiler(card.data)}
              </Row>
            </Card>
          </Form>
        );
      })
    );
  };

  return (
    <PageContainer >
      {formLayout()}
      <Card className={styles._formCard}>
        <Row gutter={24, 0}>
          <Col sm={24}>
            <Table
              dataSource={_init.data?.dataSource}
              columns={ColumnBuilder(_init.data?.layout.tableColumn)}
              pagination={false}
              loading={_init.loading}
            />
          </Col>
        </Row>
        <Row >
          <Col sm={24} className={styles.button}>
            <Space >
              {ActionBuilder(_init.data?.layout.tableToolbar)}
            </Space>
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};

export default FormSenior;