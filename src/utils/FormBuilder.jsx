import { Input, Form, DatePicker, TreeSelect, Switch, InputNumber, Radio, Select, Col } from "antd";
import styles from "../global.less"

const FormBuiler = (data) => {
  console.log(data);
  return (
    (data || []).map((field) => {
      const basicAttr = {
        label: field.title,
        name: field.key,
        key: field.key,
      }
      switch (field.type) {
        case 'input':
          if (field.data !== undefined) {
            var selectAfter = (
              <Select defaultValue={field.data[0].value}>
                {(field.data || []).map((option) => {
                  return (
                    <Select.Option value={option.value}>{option.title}</Select.Option>
                  );
                })}
              </Select>
            );
          }
          // console.log(field.data);
          return (
            <Form.Item {...basicAttr} className={styles.form_item}>
              <Input
                placeholder={field.placeholder}
                disabled={field.disabled}
                addonAfter={selectAfter}
                allowClear={true}
                maxLength={field.maxLength}
                showCount={true}
                style={{ width: '100%' }}
              />
            </Form.Item>
          );
        case 'inputNumber':
          return (
            <Form.Item {...basicAttr} className={styles.form_item}>
              <InputNumber
                disabled={field.disabled}
                placeholder={field.placeholder}
                addonAfter={field.addonAfter}
                stringMode={field.stringMode}
                min={field.min}
                max={field.max}
                step={field.step}
                allowClear={true}
                controls={false}
                style={{ width: '100%' }}
              />
            </Form.Item>
          );
        case 'datePicker':
          return (
            <Form.Item {...basicAttr} className={styles.form_item}>
              <DatePicker disabled={field.disabled} style={{ width: '100%' }} />
            </Form.Item>
          );
        case 'select':
          return (
            <Form.Item {...basicAttr} valuePropName='checked'>
              <Select>
                {(field.data || []).map((option) => {
                  return (
                    <Select.Option value={option.value}>{option.title}</Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          );
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