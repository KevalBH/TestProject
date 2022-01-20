import { Col, Divider, Image, Row, Typography } from "antd";
import styled from "styled-components";

import dineOnPhoneIcon1 from "../../../assets/HomePage/Group 5907.svg";
import dineOnPhoneIcon2 from "../../../assets/HomePage/Group 5908.svg";
import dineOnPhoneIcon3 from "../../../assets/HomePage/Group 5909.svg";
import cardBlueBase from "../../../assets/HomePage/Group 5937.svg";

const { Title, Text } = Typography;

const IconGroup = [
  {
    key: 1,
    icon: dineOnPhoneIcon1,
    head: "BOOK A TABLE",
    body: "Lorem ipsum dummy is simply a dummy text of the printing",
  },
  {
    key: 2,
    icon: dineOnPhoneIcon2,
    head: "LIVE ORDER TRACKING",
    body: "Lorem ipsum dummy is simply a dummy text of the printing",
  },
  {
    key: 3,
    icon: dineOnPhoneIcon3,
    head: "FAST DELIVERY",
    body: "Lorem ipsum dummy is simply a dummy text of the printing",
  },
];

const CardAds = () => {
  return (
    <Row justify="center" align="middle">
      <Container span={22}>
        <Row justify="space-between" align="middle">
          {IconGroup.map((items) => (
            <ItemContainer span={7} key={items.key}>
              <Row justify="center" align="middle">
                <Col span={24}>
                  <ItemImage src={items.icon} preview={false} />
                </Col>
                <Col span={24}>
                  <Image src={cardBlueBase} preview={false} />
                </Col>
                <TextContainer span={24}>
                  <Row justify="center" align="middle">
                    <Col span={24}>
                      <H1>{items.head}</H1>
                    </Col>
                    <Col span={16}>
                      <LineDivider />
                    </Col>
                    <Col span={24}>
                      <P1>{items.body}</P1>
                    </Col>
                  </Row>
                </TextContainer>
              </Row>
            </ItemContainer>
          ))}
        </Row>
      </Container>
    </Row>
  );
};

export default CardAds;

const Container = styled(Col)`
  background: #ffffff;
`;

const ItemImage = styled(Image)`
  padding: 17%;
`;

const ItemContainer = styled(Col)`
  background: #ffffff;
  box-shadow: 0 -3px 7px #00000029;
`;
const TextContainer = styled(Col)`
  margin-top: -35%;
`;
const LineDivider = styled(Divider)`
  background: #ffffff;
  margin-top: -3%;
  margin-bottom: -5%;
`;

const H1 = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-Bold;
    font-size: 20px;
    color: #ffffff;
  }
`;

const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 12px;
    color: #ffffff;
  }
`;
