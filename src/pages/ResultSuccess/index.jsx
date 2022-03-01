import { Result, Button, Card, Steps, Row, Col, Typography } from 'antd';
import styles from './index.less';

const ResultSuccess = () => {

  const { Step } = Steps;
  const { Paragraph, Text } = Typography;

  return (
    <Card>
      <Result
        status="success"
        title="提交成功"
        subTitle="这是一段描述~这是一段描述~这是一段描述~这是一段描述~这是一段描述~这是一段描述~"
        extra={[
          <>
            <Row className={styles.steps}>
              <Col sm={6} />
              <Col sm={12}>
                <Card title="项目名称" bordered={true} className={styles.text}>
                  <Paragraph>
                    <Text
                      style={{
                        fontSize: 16,
                      }}
                    >
                      这是一段文字
                    </Text>
                  </Paragraph>
                  <Steps current={1} className={styles.steps}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                  </Steps>
                </Card>
              </Col>
              <Col sm={6} />
            </Row>
            <Button type="primary" key="返回修改">返回修改</Button>
            <Button type='default' key="查看项目">查看项目</Button>
            <Button type='default' key="打印">打印</Button>
          </>

        ]}
      />
    </Card>

  );
};

export default ResultSuccess;