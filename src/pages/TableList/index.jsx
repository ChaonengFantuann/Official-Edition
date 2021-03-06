import { useState, useEffect } from 'react';
import { useRequest, history, useLocation } from 'umi';
import { useToggle } from 'ahooks';
import { stringify } from 'query-string';
import {
  Button,
  Card,
  Pagination,
  Space,
  Table,
  Tooltip,
  Form,
  Row,
  Col,
  Modal,
  message,
} from 'antd';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { SearchOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import ColumnBuilder from '@/utils/ColumnBuilder';
import SearchBuiler from '@/utils/SearchBuilder';
import ActionBuilder from '@/utils/ActionBuilder';
import { submitFieldsAdaptor } from '@/utils/helper';
import styles from './index.less';

const TableList1 = () => {
  const [pageQuery, setPageQuery] = useState('');
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchVisible, setSearchVisible] = useToggle(false);

  const [searchForm] = Form.useForm();
  const { confirm } = Modal;
  const location = useLocation();

  const init = useRequest((value) => {
    console.log(value);
    // console.log(`http://localhost:8000/mock${location.pathname}${pageQuery}`);
    return {
      url: `http://localhost:8000/api${location.pathname}${pageQuery}`,
      params: value,
      paramsSerializer: (params) => {
        // console.log(params);
        return stringify(params, { arrayFormat: 'comma', skipEmptyString: true, skipNull: true });
      },
    };
  });
  // console.log(location.pathname);
  console.log(init);

  const request = useRequest(
    (values) => {
      message.loading({ content: 'Processing...', key: 'process', duration: 0 });
      const { uri, method, ...formValues } = values;
      return {
        url: `http://localhost:8000${uri}`,
        method: method,
        body: JSON.stringify(formValues),
        dataa: {
          ...formValues,
        },
      };
    },
    {
      manual: true,
      onSuccess: (data) => {
        message.success({
          content: data?.message,
          key: 'process',
        });
      },
      formatResult: (res) => {
        return res;
      },
    },
  );

  useEffect(() => {
    init.run();
  }, [pageQuery]);

  const paginationChangeHandler = (page, per_page) => {
    console.log(page, per_page);
    setPageQuery(`&page=${page}&per_page=${per_page}`);
  };

  const onFinish = (value) => {
    init.run(submitFieldsAdaptor(value));
  };

  // record < object > : {
  //   key: <number>
  //   name: <string>
  //   interest_rate: <number>
  //   update_time: <string>
  //   status: <number>
  //  },
  function actionHandler(action, record) {
    // console.log(record);
    switch (action.action) {
      case 'add':
      case 'recycle':
      case 'display':
        history.push(action.uri);
        break;
      case 'reload':
        // console.log('reload');
        init.run();
        break;
      case 'edit':
      case 'detial':
        // action.uri: /products/edit/:xxx
        // field: ??????????????????????????????
        const uri = (action.uri || '').replace(/:\w+/g, (field) => {
          return record[field.replace(':', '')];
        });
        history.push(uri);
        break;
      //?????????
      case 'delete':
        // case 'deletePermanently':
        // case 'restore':
        // console.log(record);
        confirm({
          title: '????????????????????????????????????',
          icon: <ExclamationCircleOutlined />,
          content: '?????????????????????????????????',
          okText: '??????',
          cancelText: '??????',
          onOk() {
            return request.run({
              uri: action.uri,
              method: action.method,
              type: action.action,
              ids: Object.keys(record).length ? [record.key] : selectedRowKeys,
            });
          },
          onCancel() {
            // console.log('Cancel');
          },
        });
      default:
        break;
    }
  }

  const searchLayout = () => {
    return (
      searchVisible && (
        <Card>
          <Form onFinish={onFinish} form={searchForm}>
            <Row gutter={24}>{SearchBuiler(init.data?.layout.tableColumn)}</Row>
            <Row>
              <Col sm={24} className={styles.searchToolbar}>
                <Space>
                  <Button type="primary" htmlType="submit">
                    ??????
                  </Button>
                  <Button
                    onClick={() => {
                      init.run();
                      searchForm.resetFields(); //????????????
                    }}
                  >
                    ??????
                  </Button>
                </Space>
              </Col>
            </Row>
          </Form>
        </Card>
      )
    );
  };

  const beforeTableLayout = () => {
    return (
      <Space className={styles.tableToolBar} size={'middle'}>
        {ActionBuilder(init.data?.layout.tableToolBar, actionHandler)}
        <Tooltip title="search">
          <Button
            shape="circle"
            icon={<SearchOutlined />}
            onClick={() => {
              setSearchVisible.toggle();
            }}
            type={searchVisible ? 'primary' : 'default'}
          />
        </Tooltip>
      </Space>
    );
  };

  const rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onChange: (_selectedRowKeys, selectedRows) => {
      console.log(_selectedRowKeys, selectedRows);
      setSelectedRowKeys(_selectedRowKeys);
    },
  };

  const afterTableLayout = () => {
    return (
      <Pagination
        className={styles.pagination}
        total={init.data?.meta.total || 0}
        current={init.data?.meta.page || 1}
        pageSize={init.data?.meta.per_page || 10}
        showSizeChanger
        showQuickJumper
        onChange={paginationChangeHandler}
        onShowSizeChange={paginationChangeHandler}
      />
    );
  };

  const batchToolBar = () => {
    return (
      selectedRowKeys.length > 0 && (
        <Space>{ActionBuilder(init.data?.layout.batchToolBar, actionHandler)}</Space>
      )
    );
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
    init.run({
      key_sort: JSON.stringify(sorter),
      // key_sort_multiple: sorter?.column.sorter.multiple,
    });
  }

  return (
    <PageContainer>
      {searchLayout()}
      <Card>
        {beforeTableLayout()}
        <Table
          dataSource={init.data?.dataSource}
          columns={ColumnBuilder(init.data?.layout.tableColumn, actionHandler)}
          pagination={false}
          rowSelection={rowSelection}
          onChange={onChange}
          loading={init.loading}
        ></Table>
        {afterTableLayout()}
        <FooterToolbar extra={batchToolBar()} />
      </Card>
    </PageContainer>
  );
};

export default TableList1;
