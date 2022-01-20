import { Col, Image, Row, Typography } from "antd";
import styled from "styled-components";

import food1 from "../../assets/AboutUs/food (1).png";
import food2 from "../../assets/AboutUs/Diet (4).png";
import food3 from "../../assets/AboutUs/food (3).png";

const { Title, Text } = Typography;

const Blog = () => {
  const cards = [
    {
      id: 1,
      img: food1,
      content: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      id: 2,
      img: food2,
      content: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      id: 3,
      img: food3,
      content: "Lorem Ipsum is simply dummy text of the printing",
    },
  ];

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="start" align="middle">
          <Col span={24}>
            <Head>OUR BLOG</Head>
          </Col>
          <Col span={10}>
            <SubHead>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </SubHead>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <CardsContainer span={18}>
            <Row justify="center" align="middle">
              {cards.map((card) => (
                <Card span={7} offset={1} key={card.id}>
                  <Row justify="center" align="middle">
                    <CardImage span={24}>
                      <Image src={card.img} preview={false} />
                    </CardImage>
                    <CardBody span={24}>{card.content}</CardBody>
                  </Row>
                </Card>
              ))}
            </Row>
          </CardsContainer>
        </Row>
      </Container>
    </Row>
  );
};

export default Blog;

const Container = styled(Col)`
  margin: 5% 05% 0;
  text-align: left;
`;

const CardsContainer = styled(Col)`
  margin: 5% 0 5% 0;
`;

const Card = styled(Col)``;

const CardImage = styled(Col)``;

const CardBody = styled(Col)`
  font-family: Montserrat-Regular;
  font-size: 15px;
  color: #ffffff;
  margin-top: -30%;
  background-color: #1b2749;
  padding: 10px;
  text-align: center;
  opacity: 0.87;
`;

const Head = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-Bold;
    font-size: 41px;
    color: #1b2749;
  }
`;

const SubHead = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 15px;
    color: #858484;
  }
`;
