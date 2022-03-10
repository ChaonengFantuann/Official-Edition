import { EditOutlined, EllipsisOutlined, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Card, Col } from "antd";

const CardBuilder = (
  cards, //<array>
) => {

  const { Meta } = Card;

  return (
    (cards || []).map((card) => {
      return (
        <Col sm={6}>
          <Card
            hoverable={true}
            // loading={true}
            cover={
              <img
                alt="卡片封面加载失败"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <ShoppingCartOutlined key='shop' />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              title={card.title}
              description={card.description}
            />
          </Card>
        </Col>
      );
    })
  );
};

export default CardBuilder;