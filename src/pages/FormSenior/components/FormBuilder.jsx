import { Input, Form, DatePicker, TreeSelect, Switch, InputNumber, Radio, Col, Select } from "antd";

const FormBuiler = (data) => {
  return (

    (data || []).map((field) => {
      const basicAttr = {
        label: field.title,
        name: field.key,
        key: field.key,
      }
      switch (field.type) {
        case 'text':
          return (
            <Col sm={8}>
              <Form.Item {...basicAttr}>
                <Input disabled={field.disabled} />
              </Form.Item>
            </Col>
          );
        case 'number':
          return (
            <Form.Item {...basicAttr}>
              <InputNumber disabled={field.disabled} />
            </Form.Item>
          );
        case 'datetime':
          return (
            <Col sm={8}>
              <Form.Item {...basicAttr}>
                <DatePicker showTime disabled={field.disabled} />
              </Form.Item>
            </Col>
          );
        case 'select':
          return (
            <Col sm={8}>
              <Form.Item {...basicAttr} valuePropName='checked'>
                <Select>
                  {(field.data || []).map((option) => {
                    return (
                      <Select.Option value={option.value}>{option.title}</Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          );
        case 'tree':
          return (
            <Form.Item {...basicAttr}>
              <TreeSelect treeData={field.data} disabled={field.disabled} treeCheckable />
            </Form.Item>
          );
        case 'switch':
          return (
            <Form.Item {...basicAttr} valuePropName='checked'>
              <Switch disabled={field.disabled} />
            </Form.Item>
          );
        case 'textarea':
          return (
            <Form.Item {...basicAttr}>
              <Input.TextArea disabled={field.disabled} />
            </Form.Item>
          );
        case 'radio':
          return (
            <Form.Item {...basicAttr}>
              <Radio.Group buttonStyle="solid" defaultValue={field.data[0]?.value}>
                {(field.data || []).map((item) => {
                  return <Radio.Button value={item.value}>{item.name}</Radio.Button>
                })}
              </Radio.Group>
            </Form.Item>
          );
        default:
          return null;
      }

    })
  );
}

export default FormBuiler;