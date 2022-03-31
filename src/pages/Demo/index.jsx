import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {
  Form,
  Card,
  Row,
  Col,
  Space,
  Steps,
  Input,
  Typography,
  Divider,
  message,
  Radio,
  Select,
  TreeSelect,
  Button,
  Switch,
} from 'antd';
import { useRequest, useLocation, history } from 'umi';
import FormBuiler from '@/utils/FormBuilder';
import ActionBuilder from '@/utils/ActionBuilder';
import { submitFieldsAdaptor } from '@/utils/helper';
import Title from 'antd/lib/skeleton/Title';

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

  return (
    <PageContainer>
      <Card>
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
            <Col span={6} />
            <Col span={12}>
              <Row gutter={[0, 36]}>
                <Col span={12}>
                  <Form.Item label="证件审查" name="a">
                    <Switch />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="用户信息检验" name="b">
                    <Switch />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="白名单购买控制" name="c">
                    <Switch onChange={AonChange} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="用户ID" name="id">
                    <Input disabled={a ? false : true} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="地域购买控制" name="d">
                    <Switch onChange={BonChange} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="地域" name="place">
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
                  <Form.Item label="用户标签控制" name="e">
                    <Switch onChange={ConChange} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="等级" name="level">
                    <Select
                      disabled={c ? false : true}
                      // defaultValue="low"
                      style={{ width: '100%' }}
                      // onChange={handleChange}
                    >
                      <Option value="low">低</Option>
                      <Option value="middle">中</Option>
                      <Option value="hige">高</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="利息计算接口" name="f">
                    <Switch />
                  </Form.Item>
                </Col>
                <Col span={12}></Col>
                <Col span={12}>
                  <Form.Item label="库存锁定接口" name="g">
                    <Switch />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="库存锁定接口" name="h">
                    <Switch />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="库存更新接口" name="i">
                    <Switch />
                  </Form.Item>
                </Col>
                <Col span={12}></Col>
                <Col span={12}>
                  <Form.Item label="日志录入接口" name="j">
                    <Switch />
                  </Form.Item>
                </Col>
                <Col span={12}></Col>
                <Col span={24} style={{ textAlign: 'center' }}>
                  <Button type="primary" htmlType="submit" style={{ width: '40%' }}>
                    提交
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
