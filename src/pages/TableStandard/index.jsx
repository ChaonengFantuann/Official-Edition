import { useState, useEffect } from 'react';
import { useRequest } from 'umi';
import { Table, Pagination, Row, Col } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
import ColumnBuilder from './components/ColumnBuilder';
import styles from "./index.less";


const TableStandard = () => {

  const [pageQuery, setPageQuery] = useState(''); //pageQuery: 分页字段

  const init = useRequest(`http://localhost:8000/mock/table`);
  // console.log(init);

  useEffect(() => {
    init.run();
  }, [pageQuery])

  const paginationChangeHandler = (page, per_page) => {
    // console.log(page, perpage);
    setPageQuery(`&page=${page}&per_page=${per_page}`);
  }

  const afterTableLayout = () => {
    return (
      <Row>
        <Col xs={24} sm={12}>
        </Col>
        <Col xs={24} sm={12} className={styles.tableToolbar}>
          <Pagination
            total={init?.data?.meta?.total || 0}
            current={init?.data?.meta?.page || 1}
            pageSize={init?.data?.meta?.per_page || 10}
            showSizeChanger
            // showQuickJumper
            onChange={paginationChangeHandler}
            onShowSizeChange={paginationChangeHandler}
          />
        </Col>
      </Row>
    );
  };

  return (
    <PageContainer>
      <Table
        dataSource={init.data?.dataSource}
        columns={ColumnBuilder(init.data?.layout.tableColumn)}
        pagination={false}
        loading={init.loading}
      />
      {afterTableLayout()}
    </PageContainer>
  );
};

export default TableStandard;