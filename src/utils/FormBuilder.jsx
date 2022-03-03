import { Input, Form, DatePicker, TreeSelect, Switch, InputNumber, Radio, Select } from "antd";
import styles from "../global.less"

const FormBuiler = (data) => {
  return (
    (data || []).map((field) => {
      const basicAttr = {
        label: field.title,
        name: field.key,
        key: field.key,
      }
      switch (field.type) {
        case 'input':
          return (
            <Form.Item {...basicAttr} className={styles.form_item}>
              <Input disabled={field.disabled} />
            </Form.Item>
          );
        case 'inputNumber':
          return (
            <Form.Item {...basicAttr} className={styles.form_item} style={{ width: '100%' }}>
              <InputNumber disabled={field.disabled} />
            </Form.Item>
          );
        case 'datePicker':
          return (
            <Form.Item {...basicAttr} className={styles.form_item}>
              <DatePicker disabled={field.disabled} />
            </Form.Item>
          );
        case 'select':
          <Form.Item {...basicAttr} valuePropName='checked'>
            <Select>
              {(field.data || []).map((option) => {
                return (
                  <Select.Option value={option.value}>{option.title}</Select.Option>
                );
              })}
            </Select>
          </Form.Item>
        case 'tree':
          return (
            <Form.Item {...basicAttr} className={styles.form_item}>
              <TreeSelect treeData={field.data} disabled={field.disabled} treeCheckable />
            </Form.Item>
          );
        case 'switch':
          return (
            <Form.Item {...basicAttr} valuePropName='checked' className={styles.form_item}>
              <Switch disabled={field.disabled} />
            </Form.Item>
          );
        case 'textarea':
          return (
            <Form.Item {...basicAttr} className={styles.form_item}>
              <Input.TextArea disabled={field.disabled} />
            </Form.Item>
          );
        case 'radio':
          return (
            <Form.Item {...basicAttr} className={styles.form_item}>
              <Radio.Group buttonStyle="solid" defaultValue={field.data[0]?.value}>
                {(field.data || []).map((item) => {
                  return <Radio.Button value={item.value}>{item.name}</Radio.Button>
                })}
              </Radio.Group>
            </Form.Item>
          );
        default:
          return null;
      };
    })
  );
};

export default FormBuiler;