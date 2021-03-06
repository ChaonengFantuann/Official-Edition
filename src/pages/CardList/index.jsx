import { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Form, Row, Select, Radio, Input } from 'antd';
import CardBuilder from './components/CardBuilder';
import { useRequest, history, useLocation } from 'umi';
import { stringify } from 'query-string';
import styles from './index.less';

const ClientProductList = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [way, setWay] = useState('');
  const [ate, setAte] = useState('');
  console.log(name);
  const { Option } = Select;
  const { Search } = Input;
  const [searchForm] = Form.useForm();

  const init = useRequest((values) => {
    return {
      url: `http://localhost:8000/mock/manegement/product`,
      params: values,
      paramsSerializer: (params) => {
        // console.log(params);
        return stringify(params, { arrayFormat: 'comma', skipEmptyString: true, skipNull: true });
        // console.log(stringify(params, { arrayFormat: 'comma' }));
      },
    };
  });
  console.log(init);

  useEffect(() => {
    init.run({
      name: name,
      deadline: date,
      kind: type,
      settle_way: way,
      yearate: ate,
    });
  }, [name, date, type, way, ate]);

  const onNameSearch = (values) => {
    // console.log(values);
    // console.log("search");
    setName(values);

    // init.run({ name: values })
  };

  const onDateSearch = (values) => {
    setDate(values.target.value);
    // console.log(values.target.value);
    // init.run({ date: values.target.value })
  };

  const onTypeSearch = (values) => {
    setType(values.target.value);
  };

  const onWaySearch = (values) => {
    // console.log(values);
    setWay(values);
  };

  const onAteSearch = (values) => {
    console.log(values);
    setAte(values);
  };

  const searchLayout = () => {
    return (
      <Row className={styles.search}>
        <Col sm={6} />
        <Col sm={12}>
          <Search
            placeholder="?????????"
            allowClear
            enterButton="??????"
            size="large"
            onSearch={onNameSearch}
          />
        </Col>
        <Col sm={6} />
      </Row>
    );
  };

  const radioLayout = () => {
    return (
      <Form>
        <Form.Item label="????????????" name="deadline">
          <Radio.Group defaultValue="all" buttonStyle="solid" onChange={onDateSearch}>
            <Radio.Button value="all">??????</Radio.Button>
            <Radio.Button value="1month-">??????1??????</Radio.Button>
            <Radio.Button value="1month">1??????</Radio.Button>
            <Radio.Button value="2month">2??????</Radio.Button>
            <Radio.Button value="3month">3??????</Radio.Button>
            <Radio.Button value="6month">6??????</Radio.Button>
            <Radio.Button value="9month">9??????</Radio.Button>
            <Radio.Button value="12month">12??????</Radio.Button>
            <Radio.Button value="1year+">??????12??????</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="????????????" name="kind">
          <Radio.Group defaultValue="all" buttonStyle="solid" onChange={onTypeSearch}>
            <Radio.Button value="all">??????</Radio.Button>
            <Radio.Button value="a">????????????</Radio.Button>
            <Radio.Button value="b">????????????</Radio.Button>
            <Radio.Button value="c">????????????</Radio.Button>
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
            <Form.Item label="????????????" mame="settle_way">
              <Select defaultValue="A" onChange={onWaySearch}>
                <Option value="A">??????A</Option>
                <Option value="B">??????B</Option>
                <Option value="C">??????C</Option>
                <Option value="D">??????D</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={8}>
            <Form.Item label="?????????" mame="yearate">
              <Select defaultValue="1" onChange={onAteSearch}>
                <Option value="1">??????1</Option>
                <Option value="2">??????2</Option>
                <Option value="3">??????3</Option>
                <Option value="4">??????4</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  };

  const cardLayout = () => {
    // console.log(init.data?.dataSource);
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
