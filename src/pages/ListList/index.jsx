import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import { List, Card, Statistic, Row, Col, Button, Typography, Space } from 'antd';
import { useRequest, history, useLocation } from 'umi';
import ActionBuilder from '@/utils/ActionBuilder';

const Detal = () => {
  const { Title } = Typography;
  const location = useLocation();

  // console.log();
  console.log(location.pathname);
  const init = useRequest(`http://localhost:8000/mock${location.pathname}`);
  // console.log(init);
  // console.log(init.data?.layout.tableToolBar);
  console.log(`http://localhost:8000/mock${location.pathname}}`);
  // http://localhost:8000/mock/manegement/product/detail/1

  function actionHandler(action) {
    console.log(action.uri);
    switch (action.action) {
      case 'return':
        history.push(action.uri);
        break;
      default:
        break;
    }
  }

  return (
    <PageContainer>
      <Card>
        <Row gutter={[24, 36]}>
          <Col span={24}>
            <Space size="large">
              {ActionBuilder(init.data?.layout.tableToolBar, actionHandler)}
            </Space>
          </Col>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Title>{init.data?.dataSource[1].content}</Title>
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Statistic
              title={init.data?.dataSource[5].title}
              value={init.data?.dataSource[5].content}
              valueStyle={{ color: '#3f8600' }}
            />
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Statistic
              title={init.data?.dataSource[6].title}
              value={init.data?.dataSource[6].content}
            />
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Statistic
              title={init.data?.dataSource[10].title}
              value={init.data?.dataSource[10].content}
            />
          </Col>
        </Row>
      </Card>
      <Card>
        <Row gutter={[0, 24]}>
          <Col>
            <List
              // split={false}
              // size="small"
              // header={<div>aaa</div>}
              // bordered={true}
              grid={{
                gutter: 3,
                column: 6,
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
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};

export default Detal;
