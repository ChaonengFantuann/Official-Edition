import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import { List, Card, Statistic, Row, Col, Button, Typography } from 'antd';
import { useRequest, history, useLocation } from 'umi';

const Detal = () => {
  const { Title } = Typography;

  const init = useRequest(`http://localhost:8000/mock/detial`);
  // console.log(init);

  return (
    <PageContainer>
      <Card>
        <Row gutter={16}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Title>h1. Ant Design</Title>
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Statistic title="Active Users" value={112893} />
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Statistic title="Active Users" value={112893} />
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Statistic title="Active Users" value={112893} />
          </Col>
        </Row>
      </Card>
      <Card>
        <List
          // split={false}
          // size="large"
          // header={<div>aaa</div>}
          // bordered={true}
          grid={{
            gutter: 3,
            column: 4,
          }}
          itemLayout={'vertical'}
          // loading={true}
          dataSource={init?.data?.dataSource}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>{item.content}</Card>
            </List.Item>
          )}
        />
      </Card>
    </PageContainer>
  );
};

export default Detal;
