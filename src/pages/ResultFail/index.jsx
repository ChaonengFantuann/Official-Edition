import { Result, Button, Typography, Card, Row, Col } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import styles from './inex.less'


const ResultFail = () => {

  const { Paragraph, Text } = Typography;

  return (
    <Card>
      <Result
        status="error"
        title="提交失败"
        subTitle="Please check and modify the following information before resubmitting."
        extra={[
          <Row>
            <Col sm={8} />
            <Col sm={8}>
              <Card className={styles.desc}>
                <div>
                  <Paragraph>
                    <Text
                      strong
                      style={{
                        fontSize: 16,
                      }}
                    >
                      The content you submitted has the following error:
                    </Text>
                  </Paragraph>
                  <Paragraph>
                    <CloseCircleOutlined className={styles.site_result_demo_error_icon} /> Your account has been
                    frozen. <a>Thaw immediately &gt;</a>
                  </Paragraph>
                  <Paragraph>
                    <CloseCircleOutlined className={styles.site_result_demo_error_icon} /> Your account is not yet
                    eligible to apply. <a>Apply Unlock &gt;</a>
                  </Paragraph>
                </div>
              </Card>
            </Col>
            <Col sm={8} />
          </Row>,
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button key="buy">Buy Again</Button>,
        ]}
      >

      </Result>
    </Card>
  );
};

export default ResultFail;