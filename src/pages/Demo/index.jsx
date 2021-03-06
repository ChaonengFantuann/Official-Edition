import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Form, Card, Row, Col, Input, message, Select, TreeSelect, Button, Switch } from 'antd';
import { useRequest, useLocation, history } from 'umi';
import { submitFieldsAdaptor } from '@/utils/helper';

const Demo = () => {
  const { Option } = Select;
  const { TreeNode } = TreeSelect;
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);

  const request = useRequest(
    (values) => {
      message.loading({ content: 'Processing...', key: 'process', duration: 0 });
      const { uri, method, ...formValues } = values;
      return {
        url: `http://localhost:8000/api/management/orchestration`,
        method: 'post',
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

  const onFinish = (values) => {
    console.log(values);
    request.run(values);
  };

  const AonChange = (checked) => {
    // console.log(checked);
    setA(checked);
  };

  const BonChange = (checked) => {
    setB(checked);
  };

  const ConChange = (checked) => {
    setC(checked);
  };

  const handleClick = () => {
    console.log('aaa');
    history.push('/manegement/process');
  };

  return (
    <PageContainer>
      <Card style={{ paddingBottom: '50px' }}>
        <Form
          onFinish={onFinish}
          initialValues={{
            a: false,
            b: false,
            c: false,
            d: false,
            e: false,
            f: false,
            g: false,
            h: false,
            i: false,
            j: false,
          }}
        >
          <Row>
            <Col span={24}>
              <Button
                type="primary"
                onClick={() => {
                  handleClick();
                }}
              >
                ??????
              </Button>
            </Col>
            <Col span={6} />
            <Col span={12}>
              <Row gutter={[0, 36]}>
                <Col span={12}>
                  <Form.Item label="????????????" name="a">
                    <Switch />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="??????????????????" name="b">
                    <Switch />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="?????????????????????" name="c">
                    <Switch onChange={AonChange} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="??????ID" name="id">
                    <Input disabled={a ? false : true} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="??????????????????" name="d">
                    <Switch onChange={BonChange} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="??????" name="place">
                    <TreeSelect
                      disabled={b ? false : true}
                      // showSearch
                      style={{ width: '100%' }}
                      // value={value}
                      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                      // placeholder="Please select"
                      allowClear
                      treeDefaultExpandAll
                      // onChange={onChange}
                    >
                      <TreeNode value="parent 1" title="parent 1">
                        <TreeNode value="parent 1-0" title="parent 1-0">
                          <TreeNode value="leaf1" title="leaf1" />
                          <TreeNode value="leaf2" title="leaf2" />
                        </TreeNode>
                        <TreeNode value="parent 1-1" title="parent 1-1">
                          <TreeNode value="leaf3" title={<b style={{ color: '#08c' }}>leaf3</b>} />
                        </TreeNode>
                      </TreeNode>
                    </TreeSelect>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="??????????????????" name="e">
                    <Switch onChange={ConChange} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="??????" name="level">
                    <Select
                      disabled={c ? false : true}
                      // defaultValue="low"
                      style={{ width: '100%' }}
                      // onChange={handleChange}
                    >
                      <Option value="low">???</Option>
                      <Option value="middle">???</Option>
                      <Option value="hige">???</Option>
                    </Select>
                  </Form.Item>
                </Col>
                {/* <Col span={12}>
                  <Form.Item label="??????????????????" name="f">
                    <Switch />
                  </Form.Item>
                </Col>
                <Col span={12}></Col> */}
                <Col span={8}>
                  <Form.Item label="??????????????????" name="g">
                    <Switch />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="??????????????????" name="h">
                    <Switch />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="??????????????????" name="f">
                    <Switch />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="??????????????????" name="i">
                    <Switch />
                  </Form.Item>
                </Col>
                {/* <Col span={12}></Col> */}
                <Col span={12}>
                  <Form.Item label="??????????????????" name="j">
                    <Switch />
                  </Form.Item>
                </Col>
                {/* <Col span={12}></Col> */}
                <Col span={24} style={{ textAlign: 'center' }}>
                  <Button type="primary" htmlType="submit" style={{ width: '40%' }}>
                    ??????
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col span={6} />
          </Row>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default Demo;
