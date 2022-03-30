import { Card, Col, Row, Typography, Table } from 'antd';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line, Column } from '@ant-design/plots';
import DemoColumn from './column';
import DemoPie from './pie';

const Exhibition = () => {
  const { Title } = Typography;
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config1 = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    color: ['#1979C9', '#D62A0D', '#FAA219'],
  };

  //

  // const data = [
  //   {
  //     type: '家具家电',
  //     sales: 38,
  //   },
  //   {
  //     type: '粮油副食',
  //     sales: 52,
  //   },
  //   {
  //     type: '生鲜水果',
  //     sales: 61,
  //   },
  //   {
  //     type: '美容洗护',
  //     sales: 145,
  //   },
  //   {
  //     type: '母婴用品',
  //     sales: 48,
  //   },
  //   {
  //     type: '进口食品',
  //     sales: 38,
  //   },
  //   {
  //     type: '食品饮料',
  //     sales: 38,
  //   },
  //   {
  //     type: '家庭清洁',
  //     sales: 38,
  //   },
  // ];

  // const config = {
  //   data,
  //   xField: 'type',
  //   yField: 'sales',
  //   label: {
  //     // 可手动配置 label 数据标签位置
  //     position: 'middle',
  //     // 'top', 'bottom', 'middle',
  //     // 配置样式
  //     style: {
  //       fill: '#FFFFFF',
  //       opacity: 0.6,
  //     },
  //   },
  //   xAxis: {
  //     label: {
  //       autoHide: true,
  //       autoRotate: false,
  //     },
  //   },
  //   meta: {
  //     type: {
  //       alias: '类别',
  //     },
  //     sales: {
  //       alias: '销售额',
  //     },
  //   },
  // };

  //

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '4',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '5',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '6',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '7',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '8',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '9',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '10',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '11',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '12',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <Card>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Title level={3} style={{ textAlign: 'center' }}>
            数据大屏
          </Title>
        </Col>
        <Col span={6}>
          <Card>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
          </Card>
        </Col>
        <Col span={12}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Card>
                <Line {...config1} />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title">Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title">Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title">Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title">Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title">Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title">Card content</Card>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Card>
                <DemoColumn />
              </Card>
            </Col>
            <Col span={24}>
              <Card>
                <DemoPie />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default Exhibition;
