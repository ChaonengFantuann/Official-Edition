import moment from "moment";
import { Tag, Space } from "antd";
import ActionBuilder from "./ActionBuilder";

const ColumnBuilder = (tableColumn) => {
  const newColumns = [];
  (tableColumn || []).forEach((column) => {
    if (column.hideInColumn !== true) {
      switch (column.type) {
        case 'datetime':
          column.render = (value) => {
            return moment(value).format('YYYY-MM-DD HH:mm:ss');
          };
          break;
        case 'status':
          column.render = (value) => {
            const option = (column.data || []).find((item) => item.value === value);
            return (
              <Tag color={option.color}>{option.title}</Tag>
            );
          };
          break;
        case 'actions':
          column.render = () => {
            return (
              <Space>{ActionBuilder(column.actions)}</Space>
            )
          }
          break;
        default:
          break;
      };
      newColumns.push(column)
    };
  });
  return newColumns;
};

export default ColumnBuilder;