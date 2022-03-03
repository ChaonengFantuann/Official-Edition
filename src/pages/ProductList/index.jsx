import { useState, useEffect } from 'react';
import { useRequest } from "umi";
import { useToggle } from "ahooks";
import { stringify } from 'query-string';
import { Button, Card, Pagination, Space, Table, Tooltip, Form, Row, Col, Radio } from "antd";
import { FooterToolbar, PageContainer } from "@ant-design/pro-layout";
import { SearchOutlined } from "@ant-design/icons";
import ColumnBuilder from "@/utils/ColumnBuilder";
import SearchBuiler from '@/utils/SearchBuilder';
import ActionBuilder from '@/utils/ActionBuilder';
import { submitFieldsAdaptor } from '@/utils/helper';
import styles from "./index.less";


const ProductList = () => {

  const [pageQuery, setPageQuery] = useState('');
  const [searchVisible, setSearchVisible] = useToggle(false);

  const [searchForm] = Form.useForm();

  const init = useRequest((value) => {
    return {
      url: `http://localhost:8000/formal/list${pageQuery}`,
      params: value,
      paramsSerializer: (params) => {
        console.log(params);
        return stringify(params, { arrayFormat: 'comma', skipEmptyString: true, skipNull: true });
      },
    };
  });
  // console.log(init);

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

  const searchLayout = () => {
    return (
      searchVisible && (
        <Card>
          <Form onFinish={onFinish} form={searchForm}>
            <Row gutter={24}>
              {SearchBuiler(init.data?.layout.tableColumn)}
            </Row>
            <Row>
              <Col sm={24} className={styles.searchToolbar}>
                <Space>
                  <Button type="primary" htmlType="submit">提交</Button>
                  <Button onClick={() => {
                    init.run();
                    searchForm.resetFields(); //清空表单
                  }}>
                    清空
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
      <Space className={styles.tableToolBar}>
        {ActionBuilder(init.data?.layout.tableToolBar)}
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
    selectedRowKeys: [],
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(selectedRowKeys, selectedRows);
    },
  }

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

  const batchToolBar = () => { };

  return (
    <PageContainer>
      {searchLayout()}
      <Card>
        {beforeTableLayout()}
        <Table
          dataSource={init.data?.dataSource}
          columns={ColumnBuilder(init.data?.layout.tableColumn)}
          pagination={false}
          rowSelection={rowSelection}
        >
        </Table>
        {afterTableLayout()}
        <FooterToolbar extra={batchToolBar()} />
      </Card>
    </PageContainer>
  );
};

export default ProductList;