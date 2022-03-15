import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Col } from 'antd';
import { useRequest, history, useLocation } from 'umi';

const CardBuilder = (
  cards, //<array>
) => {
  const { Meta } = Card;

  // // let a = 0;
  // const jumpShop = () => {
  //   // a += 1;
  //   // console.log(a);
  //   // // console.log(id);
  //   // if (a > 10) {
  //     history.push(`/client/product/details/${id}`)

  //   // }
  //   console.log("aaa");
  //   // console.log(card.key);

  // }

  return (cards || []).map((card) => {
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
            <ShoppingCartOutlined
              key="shop"
              onClick={() => {
                history.push(`/client/product/purchase/${card.key}`);
              }}
            />,
            <EllipsisOutlined
              key="ellipsis"
              onClick={() => {
                history.push(`/client/product/detail/${card.key}`);
              }}
            />,
          ]}
        >
          <Meta title={card.name} description={card.description} />
        </Card>
      </Col>
    );
  });
};

export default CardBuilder;
