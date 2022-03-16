import { Input, Form, DatePicker, TreeSelect, Switch, InputNumber, Radio, Select, Col } from 'antd';
import styles from '../global.less';

const FormBuiler = (data) => {
  // console.log(data);
  return (data || []).map((field) => {
    const basicAttr = {
      label: field.title,
      name: field.key,
      key: field.key,
    };
    switch (field.type) {
      case 'input':
        if (field.data?.addowBefore !== undefined) {
          // console.log(field.data.addowBefore.length);
          // console.log(field.data.addowAfter.length);
          if (field.data.addowBefore.length > 1) {
            var inputSelectBefore = (
              <Select defaultValue={field.data.addowBefore[0].value}>
                {(field.data.addowBefore || []).map((option) => {
                  return <Select.Option value={option.value}>{option.title}</Select.Option>;
                })}
              </Select>
            );
          } else {
            var inputSelectBefore = field.data.addowBefore[0].title;
          }
        }
        if (field.data?.addowAfter !== undefined) {
          if (field.data.addowAfter.length > 1) {
            var InputSelectAfter = (
              <Select defaultValue={field.data?.addowAfter[0].value}>
                {field.data.addowAfter.map((option) => {
                  return <Select.Option value={option.value}>{option.title}</Select.Option>;
                })}
              </Select>
            );
          } else {
            var InputSelectAfter = field.data.addowAfter[0].title;
          }
        }
        // console.log(field.data);
        return (
          <Form.Item {...basicAttr} className={styles.form_item}>
            <Input
              placeholder={field.data?.placeholder}
              disabled={field.disabled}
              addonBefore={inputSelectBefore}
              prefix={field.data?.prefix}
              addonAfter={InputSelectAfter}
              suffix={field.data?.suffix}
              maxLength={field.data?.maxLength}
              allowClear={field.data?.allowClear}
              showCount={field.data?.showCount}
              bordered={field.data?.bordered}
              style={{ width: '100%' }}
            />
          </Form.Item>
        );
      case 'inputNumber':
        if (field.data?.addowBefore !== undefined) {
          // console.log(field.data.addowBefore.length);
          if (field.data.addowBefore.length > 1) {
            var inputNumberSelectBefore = (
              <Select defaultValue={field.data.addowBefore[0].value}>
                {(field.data.addowBefore || []).map((option) => {
                  return <Select.Option value={option.value}>{option.title}</Select.Option>;
                })}
              </Select>
            );
          } else {
            var inputNumberSelectBefore = field.data.addowBefore[0].title;
          }
        }
        if (field.data?.addowAfter !== undefined) {
          if (field.data.addowAfter.length > 1) {
            var InputNumberSelectAfter = (
              <Select defaultValue={field.data?.addowAfter[0].value}>
                {field.data.addowAfter.map((option) => {
                  return <Select.Option value={option.value}>{option.title}</Select.Option>;
                })}
              </Select>
            );
          } else {
            var InputNumberSelectAfter = field.data.addowAfter[0].title;
          }
        }
        return (
          <Form.Item {...basicAttr} className={styles.form_item}>
            <InputNumber
              disabled={field.disabled}
              placeholder={field.data?.placeholder}
              addonBefore={inputNumberSelectBefore}
              prefix={field.data?.prefix}
              addonAfter={InputNumberSelectAfter}
              stringMode={field.data?.accuracy?.stringMode}
              min={field.data?.accuracy?.min}
              max={field.data?.accuracy?.max}
              step={field.data?.accuracy?.step}
              controls={field.data?.controls}
              bordered={field.data?.bordered}
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
          <Form.Item {...basicAttr} className={styles.form_item}>
            <Select>
              {(field.data || []).map((option) => {
                return <Select.Option value={option.value}>{option.title}</Select.Option>;
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
          <Form.Item {...basicAttr} valuePropName="checked" className={styles.form_item}>
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
                return <Radio.Button value={item.value}>{item.name}</Radio.Button>;
              })}
            </Radio.Group>
          </Form.Item>
        );
      default:
        return null;
    }
  });
};

export default FormBuiler;
