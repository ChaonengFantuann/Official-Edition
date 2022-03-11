import { PageContainer } from '@ant-design/pro-layout';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Form, Row, Select, Radio, Input } from 'antd';
import CardBuilder from './components/CardBuilder';
import { useRequest, history, useLocation } from 'umi';
import styles from './index.less';

const ClientProductList = () => {
  const { Option } = Select;
  const { Search } = Input;

  const init = useRequest(`http://localhost:8000/mock/a`);
  console.log(init);

  const searchLayout = () => {
    return (
      <Row className={styles.search}>
        <Col sm={6} />
        <Col sm={12}>
          <Search
            placeholder="请输入"
            allowClear
            enterButton="搜索"
            size="large"
            // onSearch={onSearch}
          />
        </Col>
        <Col sm={6} />
      </Row>
    );
  };

  const radioLayout = () => {
    return (
      <Form>
        <Form.Item label="产品期限" name="deadline">
          <Radio.Group defaultValue="all" buttonStyle="solid">
            <Radio.Button value="all">全部</Radio.Button>
            <Radio.Button value="1month">1个月</Radio.Button>
            <Radio.Button value="2month">2个月</Radio.Button>
            <Radio.Button value="3month">3个月</Radio.Button>
            <Radio.Button value="6month">6个月</Radio.Button>
            <Radio.Button value="9month">9个月</Radio.Button>
            <Radio.Button value="12month">12个月</Radio.Button>
            <Radio.Button value="1year+">大于1年</Radio.Button>
            <Radio.Button value="1month-">小于1个月</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="产品类型" name="kind">
          <Radio.Group defaultValue="all" buttonStyle="solid">
            <Radio.Button value="all">全部</Radio.Button>
            <Radio.Button value="a">通知存款</Radio.Button>
            <Radio.Button value="b">定期存款</Radio.Button>
            <Radio.Button value="c">其他类型</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
    );
  };

  const selectLayout = () => {
    return (
      <Form>
        <Row gutter={24}>
          <Col sm={8}>
            <Form.Item label="结息方式" mame="settle_way">
              <Select defaultValue="A">
                <Option value="A">方式A</Option>
                <Option value="B">方式B</Option>
                <Option value="C">方式C</Option>
                <Option value="D">方式D</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={8}>
            <Form.Item label="年利率" mame="yearate">
              <Select defaultValue="1">
                <Option value="1">区间1</Option>
                <Option value="2">区间2</Option>
                <Option value="3">区间3</Option>
                <Option value="4">区间4</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  };

  const cardLayout = () => {
    console.log(init.data?.dataSource);
    return <Row gutter={[36, 36]}>{CardBuilder(init.data?.dataSource)}</Row>;
  };

  return (
    <PageContainer>
      <Card>
        {searchLayout()}
        {radioLayout()}
      </Card>
      <Card>
        {selectLayout()}
        {cardLayout()}
      </Card>
    </PageContainer>
  );
};

export default ClientProductList;
