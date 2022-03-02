import { useState, useEffect } from 'react';
import { useRequest } from "umi";
import { Card, Pagination, Space, Table } from "antd";
import { FooterToolbar, PageContainer } from "@ant-design/pro-layout";
import ColumnBuilder from "@/utils/ColumnBuilder";
import styles from "./index.less";
import ActionBuilder from '@/utils/ActionBuilder';


const ProductList = () => {

  const [pageQuery, setPageQuery] = useState('');

  const init = useRequest(`http://localhost:8000/formal/list${pageQuery}`);
  // console.log(init);

  useEffect(() => {
    init.run();
  }, [pageQuery]);

  const paginationChangeHandler = (page, per_page) => {
    console.log(page, per_page);
    setPageQuery(`&page=${page}&per_page=${per_page}`);
  };

  const searchLayout = () => { };
  const beforeTableLayout = () => {
    return (
      <Space className={styles.tableToolBar}>
        {ActionBuilder(init.data?.layout.tableToolBar)}
      </Space>
    );
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
        >
        </Table>
        {afterTableLayout()}
        <FooterToolbar extra={batchToolBar()} />
      </Card>
    </PageContainer>
  );
};

export default ProductList;