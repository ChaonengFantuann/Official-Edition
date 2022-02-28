import moment from "moment";
import { Tag, Space } from "antd";
import { Link } from "umi";

const ColumnBuilder = (tableColumn) => {
  const newColumns = [];
  (tableColumn || []).forEach((column) => {
    if (column.hideInColumn !== true) {
      switch (column.type) {
        case 'datatime':
          column.render = (value) => {
            // console.log(value);
            return moment(value).format('YYYY-MM-DD HH:mm:ss');
          };
          break;
        case 'tag':
          column.render = (value) => {
            const option = (column.data || []).find((item) => item.value === value);
            return (
              <Tag color={option.color}>{option.title}</Tag>
            );
          };
          break;
        case 'actions':
          column.render = () => {
              return (column.actions || []).map((action) => {
                return (
                    <Link key={action.text} to=''>{action.text}</Link>
                );
              })
          };
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